import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ThemeToggle from "../components/theme-toggle/theme-toggle";

export default component$(() => {
  return (
    <div class="min-h-screen">
      {/* Navbar */}
      <div class="navbar bg-base-100 shadow-sm">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex={0} role="button" class="btn btn-ghost lg:hidden">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path>
              </svg>
            </div>
            <ul tabindex={0} class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Tentang</a></li>
              <li><a>Layanan</a></li>
              <li><a>Kontak</a></li>
            </ul>
          </div>
          <a class="btn btn-ghost text-xl">Logo</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li><a>Tentang</a></li>
            <li><a>Layanan</a></li>
            <li><a>Kontak</a></li>
          </ul>
        </div>
        <div class="navbar-end">
          <ThemeToggle />
        </div>
      </div>

      {/* Hero Section */}
      <section class="hero min-h-screen bg-gradient-to-br from-primary to-secondary">
        <div class="hero-content text-center text-primary-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Selamat Datang</h1>
            <p class="mb-5 text-lg">
              Solusi terbaik untuk kebutuhan digital Anda. Kami menghadirkan inovasi terdepan dengan teknologi modern.
            </p>
            <button class="btn btn-accent btn-lg">Mulai Sekarang</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section class="py-20 bg-base-100">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-4">Fitur Unggulan</h2>
            <p class="text-lg text-base-content/70">Kenapa memilih layanan kami?</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="card bg-base-200 shadow-xl">
              <div class="card-body text-center">
                <div class="text-4xl mb-4">⚡</div>
                <h3 class="card-title justify-center">Cepat & Efisien</h3>
                <p>Performa tinggi dengan loading time yang minimal untuk pengalaman pengguna terbaik.</p>
              </div>
            </div>
            
            <div class="card bg-base-200 shadow-xl">
              <div class="card-body text-center">
                <div class="text-4xl mb-4">🔒</div>
                <h3 class="card-title justify-center">Aman & Terpercaya</h3>
                <p>Keamanan data terjamin dengan enkripsi tingkat enterprise dan backup otomatis.</p>
              </div>
            </div>
            
            <div class="card bg-base-200 shadow-xl">
              <div class="card-body text-center">
                <div class="text-4xl mb-4">📱</div>
                <h3 class="card-title justify-center">Responsif</h3>
                <p>Desain yang menyesuaikan dengan semua perangkat, dari desktop hingga mobile.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section class="py-20 bg-base-200">
        <div class="container mx-auto px-4">
          <div class="stats stats-vertical lg:stats-horizontal shadow w-full">
            <div class="stat">
              <div class="stat-title">Total Pengguna</div>
              <div class="stat-value text-primary">10K+</div>
              <div class="stat-desc">Pengguna aktif setiap bulan</div>
            </div>
            
            <div class="stat">
              <div class="stat-title">Proyek Selesai</div>
              <div class="stat-value text-secondary">500+</div>
              <div class="stat-desc">Proyek berhasil diselesaikan</div>
            </div>
            
            <div class="stat">
              <div class="stat-title">Kepuasan Klien</div>
              <div class="stat-value text-accent">99%</div>
              <div class="stat-desc">Rating kepuasan pengguna</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section class="py-20 bg-primary text-primary-content">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-4xl font-bold mb-4">Siap Memulai?</h2>
          <p class="text-xl mb-8">Bergabunglah dengan ribuan pengguna yang sudah merasakan manfaatnya</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="btn btn-accent btn-lg">Daftar Gratis</button>
            <button class="btn btn-outline btn-lg">Pelajari Lebih Lanjut</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div class="grid grid-flow-col gap-4">
          <a class="link link-hover">Tentang Kami</a>
          <a class="link link-hover">Kontak</a>
          <a class="link link-hover">Karir</a>
          <a class="link link-hover">Blog</a>
        </div>
        <div>
          <div class="grid grid-flow-col gap-4">
            <a href="#" class="text-2xl">📧</a>
            <a href="#" class="text-2xl">📱</a>
            <a href="#" class="text-2xl">🌐</a>
          </div>
        </div>
        <div>
          <p>Copyright © 2024 - Semua hak dilindungi</p>
        </div>
      </footer>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Landing Page - Solusi Digital Terbaik",
  meta: [
    {
      name: "description",
      content: "Solusi terbaik untuk kebutuhan digital Anda dengan teknologi modern dan performa tinggi",
    },
  ],
};
