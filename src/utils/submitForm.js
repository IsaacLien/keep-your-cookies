// Form submission handler
// Uses a simple webhook approach — can be connected to Google Sheets, Zapier, etc.
export async function submitForm(data) {
  const payload = {
    timestamp: new Date().toISOString(),
    monthlyRevenue: data.monthlyRevenue,
    monthlyPayroll: data.monthlyPayroll,
    monthlySoftware: data.monthlySoftware,
    name: data.name,
    email: data.email,
    storeUrl: data.storeUrl,
    estimatedSavings: {
      monthly: (parseFloat(data.monthlyPayroll) * 0.24) + (parseFloat(data.monthlySoftware) * 0.39),
      annual: ((parseFloat(data.monthlyPayroll) * 0.24) + (parseFloat(data.monthlySoftware) * 0.39)) * 12
    }
  };

  // For now, store submissions locally and log them
  // TODO: Connect to real backend (Google Sheets API, Supabase, or webhook)
  console.log('Form submission:', payload);
  
  // Store in localStorage as backup
  const existing = JSON.parse(localStorage.getItem('kyc_submissions') || '[]');
  existing.push(payload);
  localStorage.setItem('kyc_submissions', JSON.stringify(existing));
  
  // Try to send to a webhook if configured
  const WEBHOOK_URL = import.meta.env.VITE_FORM_WEBHOOK_URL;
  if (WEBHOOK_URL) {
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        mode: 'no-cors'
      });
    } catch (e) {
      console.warn('Webhook failed, submission saved locally:', e);
    }
  }
  
  return { success: true, data: payload };
}