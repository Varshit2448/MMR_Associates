import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

type Message = { role: 'bot' | 'user'; text: string };

const knowledgeBase: { keywords: string[]; response: string }[] = [
  {
    keywords: ['income tax', 'itr', 'tax return', 'income tax return'],
    response: 'Income Tax Return (ITR) Filing is the process of declaring your income, deductions, and tax paid to the government. At MMR Associates, we file ITRs for individuals, salaried employees, businesses, and professionals accurately and on time, ensuring maximum tax savings and full compliance with the Income Tax Department.',
  },
  {
    keywords: ['gst', 'goods and services tax'],
    response: 'GST (Goods and Services Tax) Registration & Returns: We handle GST registration for new businesses, file monthly/quarterly/annual GST returns (GSTR-1, GSTR-3B, etc.), reconcile input tax credit, and ensure timely compliance to avoid penalties. GST is mandatory for businesses with turnover above the threshold limit.',
  },
  {
    keywords: ['lei', 'legal entity identifier'],
    response: 'LEI (Legal Entity Identifier) Registration is a 20-digit unique code required for entities participating in financial transactions. We assist with fresh LEI registration and annual renewal, which is mandatory for companies dealing in derivatives, forex, and certain financial market transactions.',
  },
  {
    keywords: ['pf', 'esi', 'provident fund', 'employee state'],
    response: 'PF & ESI Registrations & Returns: Provident Fund (PF) and Employee State Insurance (ESI) are mandatory social security schemes for employees. We handle registration, monthly contributions, and return filing for businesses with eligible employees, ensuring full compliance with labour laws.',
  },
  {
    keywords: ['pt', 'professional tax'],
    response: 'PT (Professional Tax) Registration & Returns: Professional Tax is a state-level tax levied on professionals and employees. We handle PT registration, monthly/annual return filing, and compliance as per your state regulations.',
  },
  {
    keywords: ['labour', 'food licence', 'fssai', 'food license'],
    response: 'Labour & Food Licence: We assist with Labour License (required for businesses employing workers) and FSSAI Food License (mandatory for any business involved in food production, storage, distribution, or sale). We handle both fresh applications and renewals.',
  },
  {
    keywords: ['trade license', 'ie code', 'import export', 'trade licence'],
    response: 'Trade License & IE Code: A Trade License is required from the local municipality to operate a business legally. IE Code (Import Export Code) is mandatory for businesses engaged in import/export activities. We handle both registrations efficiently.',
  },
  {
    keywords: ['msme', 'halal', 'udyam'],
    response: 'MSME & Halal Certificate: MSME (Udyam) Registration provides businesses with government benefits like subsidies, easier loans, and tax exemptions. Halal Certification is required for food and product businesses targeting Muslim consumers. We assist with both certifications.',
  },
  {
    keywords: ['accounting', 'bookkeeping', 'book keeping', 'accounts'],
    response: 'Accounting & Bookkeeping Services: We maintain your books of accounts, record daily transactions, prepare financial statements (P&L, Balance Sheet), and ensure your records are audit-ready. This helps you track business performance and stay compliant with accounting standards.',
  },
  {
    keywords: ['dsc', 'digital signature'],
    response: 'DSC (Digital Signature Certificate) is an electronic form of signature used for filing documents online with government portals like MCA, GST, and Income Tax. We assist with Class 2 and Class 3 DSC issuance and renewal for individuals and organizations.',
  },
  {
    keywords: ['llp', 'pvt', 'private', 'firm', 'society', 'company registration', 'registration of company'],
    response: 'Entity Registrations: We handle complete registration of LLP (Limited Liability Partnership), Private Limited Company, Partnership Firms, and Societies. This includes name approval, document drafting, filing with MCA, and obtaining Certificate of Incorporation.',
  },
  {
    keywords: ['barcode', 'trademark', 'brand'],
    response: 'Barcode & Trademark Registration: Barcode registration is needed for products sold in retail (EAN/UPC codes). Trademark registration protects your brand name, logo, or tagline from being used by others. We handle the entire application and registration process.',
  },
  {
    keywords: ['appeal', 'scrutiny', 'assessment', 'notice'],
    response: 'Appeals & Scrutiny: If you receive a scrutiny notice from the Income Tax Department or GST authorities, we represent you, prepare replies, file appeals, and handle assessments. Our experts ensure your case is presented effectively to minimize tax liability and penalties.',
  },
  {
    keywords: ['mca', 'ministry of company', 'roc', 'company affairs'],
    response: 'Ministry of Company Affairs (MCA) Matters: We handle all MCA compliances including annual filings (AOC-4, MGT-7), Director appointments/resignations, share transfers, charge creation, and other ROC filings to keep your company compliant with the Companies Act.',
  },
  {
    keywords: ['price', 'cost', 'fee', 'charges', 'how much'],
    response: 'Our service fees vary depending on the complexity and scope of work. We offer competitive and transparent pricing. Please contact us at 8106130227 or through the contact form for a customized quote based on your specific requirements.',
  },
  {
    keywords: ['contact', 'reach', 'phone', 'email', 'address'],
    response: 'You can reach MMR Associates at:\n\n📍 Head Office:\nH.No. 11-13-1383, Margadarshi Colony, Road No. 1, R.K. Puram, Saroor Nagar, Hyderabad\nPhone: 8106130227\n\n📍 Branch Office:\n#16-116/145/B, Mallareddy Nagar Colony, Bheeram Guda, R.C.Puram, Patancheru, Hyderabad\nPhone: 7893930931\n\nEmail: mmrassocieteshyd@gmail.com\nHours: Monday to Saturday, 9 AM to 7 PM\n\nFeel free to call or visit us!',
  },
  {
    keywords: ['hello', 'hi', 'hey', 'namaste', 'greetings'],
    response: "Hello! Welcome to MMR Associates. I'm your virtual assistant. I can help you understand our services like Income Tax Filing, GST, PF/ESI, MSME, Trademark, and more. What would you like to know about?",
  },
  {
    keywords: ['services', 'what do you', 'offer', 'help'],
    response: 'We offer 15+ services including:\n• Income Tax Return Filing\n• GST Registration & Returns\n• LEI Registration\n• PF & ESI Registrations\n• PT Registrations\n• Labour & Food Licence\n• Trade License & IE Code\n• MSME & Halal Certificate\n• Accounting & Bookkeeping\n• DSC (Digital Signature)\n• LLP/PVT/Firm/Society Registrations\n• Barcode & Trademark\n• Appeals & Scrutiny\n• MCA Matters\n\nWhich one would you like to know more about?',
  },
  {
    keywords: ['thank', 'thanks'],
    response: "You're welcome! If you have any more questions about our services, feel free to ask. You can also call us at 8106130227 for direct assistance.",
  },
];

const defaultResponse = "I'm not sure about that specific query, but I can help you understand any of our services like Income Tax Filing, GST, PF/ESI, MSME, Trademark, Accounting, and more. Try asking about a specific service, or call us at 8106130227 for personalized assistance!";

const quickQuestions = [
  'What services do you offer?',
  'Tell me about GST',
  'How does ITR filing work?',
  'What is MSME registration?',
];

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const item of knowledgeBase) {
    if (item.keywords.some((kw) => lower.includes(kw))) {
      return item.response;
    }
  }
  return defaultResponse;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: "Hi there! I'm the MMR Associates virtual assistant. I can explain our tax and compliance services. How can I help you today?" },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setTyping(true);

    setTimeout(() => {
      const botMsg: Message = { role: 'bot', text: getResponse(text) };
      setMessages((prev) => [...prev, botMsg]);
      setTyping(false);
    }, 800);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-green-600 shadow-2xl shadow-blue-500/40 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          open ? 'rotate-90' : ''
        }`}
        aria-label="Chat with us"
      >
        {open ? <X size={26} className="text-white" /> : <MessageCircle size={26} className="text-white" />}
        {!open && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-green-500 border-2 border-white flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
          </span>
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] sm:w-96 max-h-[70vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${
          open ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 px-5 py-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <Bot size={22} className="text-white" />
          </div>
          <div>
            <div className="text-white font-bold text-sm">MMR Assistant</div>
            <div className="text-blue-100 text-xs flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse"></span>
              Online now
            </div>
          </div>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.role === 'bot'
                    ? 'bg-gradient-to-br from-blue-600 to-green-600'
                    : 'bg-slate-700'
                }`}
              >
                {msg.role === 'bot' ? <Bot size={16} className="text-white" /> : <User size={16} className="text-white" />}
              </div>
              <div
                className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                  msg.role === 'bot'
                    ? 'bg-white text-slate-700 rounded-tl-sm shadow-sm border border-slate-100'
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-tr-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {typing && (
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center flex-shrink-0">
                <Bot size={16} className="text-white" />
              </div>
              <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm border border-slate-100 flex gap-1">
                <span className="w-2 h-2 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: '0s' }}></span>
                <span className="w-2 h-2 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: '0.15s' }}></span>
                <span className="w-2 h-2 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: '0.3s' }}></span>
              </div>
            </div>
          )}
        </div>

        {/* Quick Questions */}
        {messages.length <= 2 && (
          <div className="px-4 pb-2 flex flex-wrap gap-2 bg-slate-50">
            {quickQuestions.map((q) => (
              <button
                key={q}
                onClick={() => sendMessage(q)}
                className="text-xs px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors border border-blue-200"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage(input);
          }}
          className="p-3 bg-white border-t border-slate-100 flex gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question..."
            className="flex-1 px-4 py-2.5 rounded-full bg-slate-100 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
          />
          <button
            type="submit"
            className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center hover:scale-105 transition-transform flex-shrink-0"
            aria-label="Send message"
          >
            <Send size={16} className="text-white" />
          </button>
        </form>
      </div>
    </>
  );
}
