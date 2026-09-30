/**
 * ============================================================
 *  KONFIGURASI FRONTEND SIM HRD — ISI SEBELUM DEPLOY
 * ============================================================
 *  GAS_URL          : URL Web App Apps Script yang berakhiran /exec
 *                     (Deploy → Manage deployments → salin URL)
 *  GOOGLE_CLIENT_ID : OAuth Client ID (Google Cloud Console → Credentials)
 *                     Boleh dikosongkan bila sudah diisi di sheet Pengaturan_Sistem
 *                     (kunci GOOGLE_CLIENT_ID) — akan diambil otomatis.
 *  DEMO             : 'auto' = Mode Demo bila GAS_URL masih kosong.
 *                     Tambahkan ?demo=1 di URL untuk memaksa Mode Demo.
 */
window.SIMHRD_CONFIG = {
  GAS_URL: 'https://script.google.com/macros/s/AKfycbzdZ_dyiPWE7EWsA2n1AXmExEpOew6y2cn4s-GbaSMODtuq-NIEwaWe-J-4ivozpHPCcA/exec',
  GOOGLE_CLIENT_ID: '1079355653358-8cvtdlu3a07egdll6sqcqoor6s9mut7c.apps.googleusercontent.com',
  NAMA_PERUSAHAAN: 'PT Solusi Enterprise Nusantara',
  DEMO: 'auto'
};
