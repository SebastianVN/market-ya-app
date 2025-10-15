import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  HostListener,
  signal,
  input,
  EventEmitter,
} from '@angular/core';
import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Product } from '@shared/models/product.model';
import { Output } from '@angular/core';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';
@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgFor, NgStyle, TimeAgoPipe],
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css'],
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input({ required: true }) images: Product[] = [];
  @Input() autoPlay = true;
  @Input() intervalMs = 3500;
  @Input() pauseOnHover = true;
  @Input() loop = true;
  @Input() showIndicators = true;
  @Input() ariaLabel = 'Carrusel de imágenes';
  readonly product = input.required<Product[]>();

  @Output() addToCart = new EventEmitter<Product>();
  currentIndex = signal(0);

  private timer: any = null;

  // Gestos
  dragging = false;
  private startX = 0;
  private deltaX = 0;
  private readonly swipeThreshold = 50; // px

  ngOnInit(): void {
    if (this.autoPlay) this.startTimer();
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }

  // Teclado: ← →
  @HostListener('document:keydown', ['$event'])
  onKeydown(e: KeyboardEvent) {
    if (e.key === 'ArrowLeft') this.prev();
    else if (e.key === 'ArrowRight') this.next();
  }

  // Autoplay
  private startTimer() {
    this.clearTimer();
    this.timer = setInterval(() => this.next(), this.intervalMs);
  }
  private clearTimer() {
    if (this.timer) clearInterval(this.timer);
    this.timer = null;
  }
  pause() {
    this.clearTimer();
  }
  resume() {
    if (this.autoPlay) this.startTimer();
  }

  // Navegación
  next() {
    const last = this.images.length - 1;
    if (this.currentIndex() < last) {
      this.currentIndex.update(i => i + 1);
    } else if (this.loop) {
      this.currentIndex.set(0);
    }
  }

  prev() {
    if (this.currentIndex() > 0) {
      this.currentIndex.update(i => i - 1);
    } else if (this.loop) {
      this.currentIndex.set(this.images.length - 1);
    }
  }

  goTo(i: number) {
    if (i >= 0 && i < this.images.length) this.currentIndex.set(i);
  }

  // Gestos táctiles / mouse (Pointer Events)
  onPointerDown(ev: PointerEvent) {
    this.dragging = true;
    this.startX = ev.clientX;
    this.deltaX = 0;
    (ev.target as Element).setPointerCapture?.(ev.pointerId);
    // Pausa temporal del autoplay mientras se arrastra
    this.pause();
  }

  onPointerMove(ev: PointerEvent) {
    if (!this.dragging) return;
    this.deltaX = ev.clientX - this.startX;
    // Mover “en vivo” la pista (opcional: para simplicidad solo al soltar)
    // Si deseas arrastre en vivo: aplica translateX adicional aquí.
  }

  onPointerUp(_ev: PointerEvent) {
    if (!this.dragging) return;
    const moved = this.deltaX;

    if (moved > this.swipeThreshold) this.prev();
    else if (moved < -this.swipeThreshold) this.next();

    this.dragging = false;
    this.startX = 0;
    this.deltaX = 0;

    // Reanudar autoplay si procede
    this.resume();
  }

  addToCartHandler() {
    const currentProduct = this.images[this.currentIndex()];
    if (currentProduct) {
      this.addToCart.emit(currentProduct);
    }
  }
}
