/**
 * ============================================================
 *  KONFIGURASI FRONTEND SIM HRD v2 — ISI SEBELUM DEPLOY
 * ============================================================
 *  SUPABASE_URL      : Supabase → Project Settings → Data API → Project URL
 *  SUPABASE_ANON_KEY : Supabase → Project Settings → API Keys → anon / public
 *                      (kunci ini AMAN berada di browser; data dilindungi RLS)
 *                      ⚠️ JANGAN PERNAH menaruh service_role key di sini.
 *  GAS_URL           : URL Web App Apps Script berakhiran /exec
 *                      (Apps Script → Deploy → Manage deployments → salin URL)
 *                      Dipakai untuk SEMUA penyimpanan data, unggah/unduh berkas
 *                      Google Drive, PDF slip & surat, email, dan WhatsApp.
 *  GOOGLE_CLIENT_ID  : OAuth Client ID Google (tombol "Masuk dengan Google").
 *                      Boleh dikosongkan bila sudah diisi di Pengaturan_Sistem
 *                      (kunci GOOGLE_CLIENT_ID).
 *  DEMO              : 'auto' = Mode Demo bila SUPABASE_URL kosong.
 *                      Tambahkan ?demo=1 di URL untuk memaksa Mode Demo.
 */
window.SIMHRD_CONFIG = {
  SUPABASE_URL: 'https://hfntvxbldpqondympndm.supabase.co',
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmbnR2eGJsZHBxb25keW1wbmRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA5NjY3MzUsImV4cCI6MjEwNjU0MjczNX0.VNqdNqJC5etMKZ5cceudN3XVg7djeGog2fxLJV3x02k',
  GAS_URL: 'https://script.google.com/macros/s/AKfycbzdZ_dyiPWE7EWsA2n1AXmExEpOew6y2cn4s-GbaSMODtuq-NIEwaWe-J-4ivozpHPCcA/exec',            // ← TEMPEL URL /exec Apps Script di sini
  GOOGLE_CLIENT_ID: '1079355653358-h8p3httd84v7soivs6bvu4bdo118o11m.apps.googleusercontent.com',   // ← contoh: '1234567890-abc123.apps.googleusercontent.com'
  NAMA_PERUSAHAAN: 'PT Solusi Enterprise Nusantara',
  DEMO: 'auto'
};
