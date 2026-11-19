# TEMPLATE PORTOFOLIO PROJECT

> Salin file ini jadi `drafts/<slug-project>.md`, isi semua bagian, lalu minta agent mengubahnya
> menjadi `src/data/projects/<slug-project>.ts` (format di bagian "Output TypeScript" di bawah).
> Semua teks yang tampil di web ditulis dalam **Bahasa Inggris** (sama seperti project yang sudah ada).
> Bagian bertanda `(WAJIB)` tidak boleh kosong. Jangan mengarang angka: kalau tidak ada data, tulis `TBD`.

---

## 0. Instruksi untuk Agent

1. Isi template ini dari bahan yang saya berikan (catatan, repo, screenshot). Jangan menambah fakta yang tidak ada di bahan.
2. Letakkan gambar di `public/images/projects/<folder>/` dan rename sesuai aturan di bagian 7.
3. Setelah template terisi, buat file `src/data/projects/<slug>.ts` memakai `defineProject(...)`.
4. Daftarkan di `src/data/projects.ts`: tambahkan `import` dan masukkan ke array `projects`. Urutan array adalah urutan tampil.
5. Jalankan `npm run lint` dan `npm run build`, lalu pastikan semua path gambar benar-benar ada.
6. Baca `node_modules/next/dist/docs/` bila perlu mengubah kode Next.js, karena versinya berbeda dari yang umum (lihat `AGENTS.md`).

---

## 1. Identitas Project (WAJIB)

| Field | Isi | Contoh |
|---|---|---|
| `id` / `slug` | | `customer-billing` (huruf kecil, pakai tanda hubung, unik) |
| `title` | | Customer Billing Mobile App |
| `subtitle` | | Mobile Billing System for ISP Customers |
| `year` | | 2025 |
| `status` | | Production / In Development / Completed / Prototype |
| `category` | pilih satu: `Mobile Applications` / `Web & Enterprise Platforms` / `Special & Leadership Initiatives` | Mobile Applications |
| `imageOrientation` | `desktop` / `mobile` / `default` (opsional, menyesuaikan bentuk gambar) | mobile |
| `keyMetric` | satu kalimat pendek hasil terpenting | 24/7 Self-Service Invoicing & Push Notifications |
| `thumbnail` | path gambar sampul | `/images/projects/<folder>/thumbnail.png` |

**Deskripsi singkat** (1-2 kalimat, tampil di kartu daftar project):

```
...
```

**Link** (opsional, hapus baris yang tidak ada):

| label | href |
|---|---|
| Live Demo | https://... |
| GitHub | https://... |

---

## 2. Project ini apa? (WAJIB)

**Overview** (2-4 kalimat: apa produknya, untuk siapa, apa yang dilakukannya):

```
...
```

**Background** (masalah atau kebutuhan awal yang membuat project ini ada):

```
...
```

**Goals** (3-5 poin, tiap poin satu kalimat):

- ...
- ...
- ...

**Tech Stack** (satu per baris, nama resmi):

- ...
- ...

---

## 3. Role saya (WAJIB)

| Field | Isi |
|---|---|
| `role` | Contoh: Mobile Software Engineer / Full-Stack Developer / Project Lead |
| Durasi / periode | |
| Ukuran tim & posisi saya | Contoh: tim 4 orang, saya memegang frontend dan integrasi API |
| Tanggung jawab utama | 1-3 kalimat |

---

## 4. Apa yang saya kerjakan (WAJIB)

**Challenges** (2-4 item, tiap item punya judul dan deskripsi 1-2 kalimat):

| Judul | Deskripsi |
|---|---|
| ... | ... |
| ... | ... |

**Solutions** (poin tindakan konkret yang saya lakukan, diawali kata kerja):

- Implemented ...
- Built ...
- Integrated ...

**Features** (3-6 fitur utama, tiap item punya judul dan deskripsi):

| Judul | Deskripsi |
|---|---|
| ... | ... |
| ... | ... |

---

## 5. Hasilnya seperti apa (WAJIB)

**Impact** (poin hasil terukur kalau ada; tanpa data, tulis kualitatif dan jujur):

- ...
- ...

**Lessons Learned** (2-4 poin):

- ...
- ...

---

## 6. Galeri (WAJIB, minimal 3 gambar)

Urutkan dari yang paling menarik. Satu baris per gambar.

| # | File (di folder project) | Alt text (apa yang terlihat di layar) |
|---|---|---|
| 1 | `Home.png` | Home screen |
| 2 | | |
| 3 | | |
| 4 | | |

---

## 7. Aturan Aset Gambar

- Folder: `public/images/projects/<folder>/` (gunakan nama folder yang sama untuk semua gambar project ini).
- Path di kode selalu diawali `/images/projects/<folder>/...` (tanpa `public`).
- `thumbnail`: satu gambar sampul, nama `thumbnail.png`. Pakai screenshot terbaik atau hero image.
- Nama file: tanpa spasi, deskriptif (`AdminDashboard.png`, `Invoice1.jpeg`). Huruf besar/kecil harus **persis sama** dengan yang ditulis di kode.
- Format yang disarankan: PNG/JPG/WebP. Usahakan di bawah ~500 KB per gambar.
- Setiap gambar wajib punya `alt` yang menjelaskan isi gambar.
- Jangan menampilkan data sensitif di screenshot (nama pelanggan asli, token, email, nomor telepon). Blur atau ganti dengan data dummy.

---

## 8. Output TypeScript (diisi agent dari bagian 1-6)

Simpan di `src/data/projects/<slug>.ts`:

```ts
import { defineProject } from "./define-project";

export const namaProject = defineProject({
    id: "slug-project",
    slug: "slug-project",
    title: "",
    subtitle: "",
    description: "",
    role: "",
    category: "Web & Enterprise Platforms", // lihat pilihan di bagian 1
    keyMetric: "",
    status: "",
    thumbnail: "/images/projects/<folder>/thumbnail.png",
    year: "",
    // imageOrientation: "desktop", // opsional
    // links: [{ label: "Live Demo", href: "https://..." }], // opsional
    techStack: [],
    overview: "",
    background: "",
    goals: [],
    challenges: [{ title: "", description: "" }],
    solutions: [],
    features: [{ title: "", description: "" }],
    impact: [],
    lessonsLearned: [],
    gallery: [{ src: "/images/projects/<folder>/Home.png", alt: "" }],
});
```

Lalu di `src/data/projects.ts`:

```ts
import { namaProject } from "./projects/<slug>";
// ...
export const projects: Project[] = [
    // ...
    namaProject,
];
```

---

## 9. Checklist Akhir

- [ ] Semua bagian `(WAJIB)` terisi, tidak ada `TBD` atau `...` tersisa
- [ ] `id` dan `slug` unik dan tidak bentrok dengan project lain
- [ ] `category` persis salah satu dari 3 nilai yang valid
- [ ] Semua path gambar (termasuk `thumbnail`) ada di `public/` dan huruf besar/kecilnya cocok
- [ ] Semua gambar punya `alt`
- [ ] Tidak ada data sensitif di screenshot atau teks
- [ ] Angka di `impact` benar-benar punya sumber
- [ ] Project didaftarkan di `src/data/projects.ts`
- [ ] `npm run lint` dan `npm run build` lolos
- [ ] Halaman `/projects/<slug>` dibuka di browser dan tampil benar
