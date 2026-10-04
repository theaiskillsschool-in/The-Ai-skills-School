/*
  SITE SETTINGS for The AI Skills School
  ---------------------------------------
  Edit only the text between the quotes (or the numbers). Do not delete commas or brackets.
  After you save (commit) this file on GitHub, the website updates in 1 to 2 minutes.

  whatsapp : your number with country code, digits only. Example: '919876543210'. Leave '' to hide WhatsApp.
  email    : the email where you want to receive messages. Leave '' to hide email.
  upiId    : your UPI ID, for example 'yourname@okaxis'. Used only for products that are marked 'live'.
  formKey  : optional. A free access key from web3forms.com. When filled, a "Send message" button
             delivers messages straight to your email. Leave '' if you do not use it.

  Anything you put in whatsapp, email or upiId is PUBLIC on the website. Add only what you are happy to share.

  For each product:  status 'soon'  = shows "In preparation" and a "Notify me" button.
                     status 'live'  = shows a Buy button (needs buyUrl OR upiId).
  buyUrl   : a payment link (for example from Razorpay, Instamojo or Topmate). Must start with https://
*/
window.SITE_CONFIG = {
  instagram: 'the_ai_skills_school',
  whatsapp: '',
  email: '',
  upiId: '',
  upiName: 'The AI Skills School',
  formKey: '',

  course: {
    name: 'Python for Excel Automation',
    price: 1299,
    duration: '4 weeks (planned)'
  },

  products: [
    {
      id: 'clean-script',
      type: 'script',
      typeLabel: 'Python script',
      name: 'Clean Sales Data Script',
      price: 199,
      status: 'soon',
      buyUrl: '',
      blurb: 'A ready Python script that removes duplicates and fixes names, phone numbers, dates and amounts in a sales file.',
      inside: [
        'The clean_sales.py script with comments on every step',
        'A messy sample Excel file to practise on',
        'A setup guide for Google Colab, so nothing needs to be installed',
        'Notes on how to adapt it to your own column names'
      ],
      forWho: 'students and freelancers who want a working script to study and reuse'
    },
    {
      id: 'shop-templates',
      type: 'template',
      typeLabel: 'Excel templates',
      name: 'Excel Templates for Small Shops',
      price: 149,
      status: 'soon',
      buyUrl: '',
      blurb: 'Simple Excel sheets for daily sales, expenses and stock, with the formulas already set up.',
      inside: [
        'Daily sales sheet',
        'Expense tracker',
        'Stock list that highlights low stock',
        'A short guide on how to use all three'
      ],
      forWho: 'shop owners who still keep records on paper or in messy files'
    },
    {
      id: 'fee-tracker',
      type: 'template',
      typeLabel: 'Excel template',
      name: 'Fee Tracker for Coaching Classes',
      price: 149,
      status: 'soon',
      buyUrl: '',
      blurb: 'A monthly fee sheet that shows who has paid, who is due, and highlights late payments.',
      inside: [
        'Student list with monthly fee columns',
        'Paid and due status that updates itself',
        'Month-wise summary of fees collected',
        'A short guide on how to use it'
      ],
      forWho: 'tuition teachers and small coaching centres'
    },
    {
      id: 'prompt-pack',
      type: 'prompts',
      typeLabel: 'Prompt pack',
      name: 'AI Prompt Pack for Spreadsheet Work',
      price: 99,
      status: 'soon',
      buyUrl: '',
      blurb: 'Copy-and-paste prompts that help an AI assistant write pandas code for spreadsheet tasks, plus a checklist for testing that code safely.',
      inside: [
        'Prompts for cleaning, merging and reporting',
        'A safe-use checklist: test on dummy data first, never paste customer details',
        'Worked examples with before and after files'
      ],
      forWho: 'beginners who want to use AI for code without trusting it blindly'
    },
    {
      id: 'starter-bundle',
      type: 'bundle',
      typeLabel: 'Bundle',
      name: 'Starter Bundle',
      price: 349,
      status: 'soon',
      buyUrl: '',
      includes: ['clean-script', 'shop-templates', 'prompt-pack'],
      blurb: 'The cleaning script, the shop templates and the prompt pack together at a lower price.',
      inside: [
        'Clean Sales Data Script',
        'Excel Templates for Small Shops',
        'AI Prompt Pack for Spreadsheet Work'
      ],
      forWho: 'anyone starting out who wants everything in one go'
    }
  ]
};
