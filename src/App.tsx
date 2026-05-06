import { useState } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  ChevronUp, 
  ChevronDown,
  Trees, 
  Waves, 
  Home, 
  Shield, 
  Maximize,
  ArrowRight,
  ArrowLeft,
  Check,
  Compass,
  Layers,
  Cpu,
  X,
  List,
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  ExternalLink
} from 'lucide-react';

const App = () => {
  // App Navigation States
  const [view, setView] = useState('presentation'); // 'presentation' | 'details'
  
  // Modal State for Images
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Presentation States
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeVilla, setActiveVilla] = useState('oasis');
  const [activePlan, setActivePlan] = useState(0);
  const [propertyValue, setPropertyValue] = useState(4300000); // Calculator state
  const [isAnimating, setIsAnimating] = useState(false);
  const [showTable, setShowTable] = useState(false); // Toggle Detailed Schedule

  // Personal Branding Constant
  const PERSONAL_TAG = "LEONID MOISSIDI";
  const WA_LINK = "https://wa.me/leonid.moissidi";
  const PROFILE_PIC = "https://i.ibb.co/fVrJfrC9/Profile.jpg";

  // Summary data extracted from all provided PDFs and images
  const slides = [
    {
      id: 'vision',
      eyebrow: 'A Historic Milestone',
      title: 'Tilal Binghatti',
      subtitle: 'Our Legacy Reimagined on the Horizon',
      content: 'For the first time, Binghatti\'s architectural signature unfolds across a 10-million-square-foot masterplan. Our design DNA, once reserved for the sky, takes root in the soil.',
    },
    {
      id: 'masterplan',
      eyebrow: 'The Masterplan',
      title: 'A World of 50+ Amenities',
      subtitle: 'Destination-Scale Living',
      stats: [
        { icon: <Maximize size={24} />, value: '621,815+', label: 'SQM Phase 1' },
        { icon: <Waves size={24} />, value: '12,000 SQM', label: 'Sunken Pearl Shore' },
        { icon: <Trees size={24} />, value: '20,000+', label: 'Trees Planted' },
        { icon: <Shield size={24} />, value: '1.6 KM', label: 'Jogging Track' },
      ]
    },
    {
      id: 'proximity',
      eyebrow: 'Prime Location',
      title: 'Proximity',
      subtitle: 'Seamlessly Connected to the City',
      locations: [
        { name: 'DESS COLLEGE', time: '4 MIN' },
        { name: 'GEMS WELLINGTON ACADEMY', time: '8 MIN' },
        { name: 'FAKEEH HOSPITAL', time: '10 MIN' },
        { name: 'OUTLET MALL', time: '15 MIN' },
        { name: 'DUBAI MALL', time: '18 MIN' },
        { name: 'DXB AIRPORT', time: '18 MIN' },
        { name: 'AL MAKTOUM AIRPORT', time: '30 MIN' }
      ]
    },
    {
      id: 'collections',
      eyebrow: 'The Residence Collections',
      title: 'Oasis || Dunes',
      subtitle: 'Curated 4-Bedroom Environments',
      content: 'Choose your ideal lifestyle setting within the community.'
    },
    {
      id: 'superiority',
      eyebrow: 'Architectural Superiority',
      title: 'Mansion-Grade Luxury',
      subtitle: 'Why Tilal Binghatti Outperforms',
      stats: [
        { icon: <Home size={24} />, value: '8 Meters', label: 'Double-Height Living' },
        { icon: <Maximize size={24} />, value: '4 Meters', label: 'Ceiling Heights' },
        { icon: <Waves size={24} />, value: '4.5 x 10m', label: 'Resort-Scale Pools' },
        { icon: <Shield size={24} />, value: '10 Meters', label: 'Rear Privacy Setback' },
      ]
    },
    {
      id: 'pricing',
      eyebrow: 'Interactive Calculator',
      title: '60/40 Payment Plans',
      subtitle: 'Flexible Villa Ownership',
      pricingInfo: {
        plans: [
          {
            name: "Option 1: Monthly",
            description: "Structured with 0.5% monthly installments and 10% annual balloon payments.",
            breakdown: [
              { percentage: 20, label: 'Upfront', milestone: '10% Booking + 10% in 30 Days' },
              { percentage: 40, label: 'During Construction', milestone: 'Annual Balloons + Monthly:', recurring: { label: 'Monthly (0.5%)', pct: 0.5 } },
              { percentage: 40, label: 'On Handover', milestone: 'Completion' }
            ],
            schedule: [
              { d: '31-May-2026', p: 10 }, { d: '30-Jun-2026', p: 10 },
              { d: '31-Jul-2026', p: 0.5 }, { d: '31-Aug-2026', p: 0.5 }, { d: '30-Sext-2026', p: 0.5 }, { d: '31-Oct-2026', p: 0.5 }, { d: '30-Nov-2026', p: 0.5 },
              { d: '31-Dec-2026', p: 10 },
              { d: '31-Jan-2027', p: 0.5 }, { d: '28-Feb-2027', p: 0.5 }, { d: '31-Mar-2027', p: 0.5 }, { d: '30-Apr-2027', p: 0.5, yearMarker: 'End of Year 1' }, { d: '31-May-2027', p: 0.5 },
              { d: '30-Jun-2027', p: 0.5 }, { d: '31-Jul-2027', p: 0.5 }, { d: '31-Aug-2027', p: 0.5 }, { d: '30-Sext-2027', p: 0.5 }, { d: '31-Oct-2027', p: 0.5 }, { d: '30-Nov-2027', p: 0.5 },
              { d: '31-Dec-2027', p: 10 },
              { d: '31-Jan-2028', p: 0.5 }, { d: '29-Feb-2028', p: 0.5 }, { d: '31-Mar-2028', p: 0.5 }, { d: '30-Apr-2028', p: 0.5, yearMarker: 'End of Year 2' }, { d: '31-May-2028', p: 0.5 },
              { d: '30-Jun-2028', p: 5 },
              { d: '31-Jul-2028', p: 0.5 }, { d: '31-Aug-2028', p: 0.5 }, { d: '30-Sext-2028', p: 0.5 }, { d: '31-Oct-2028', p: 0.5 }, { d: '30-Nov-2028', p: 0.5 },
              { d: '31-Dec-2028', p: 2 },
              { d: 'Completion', p: 40, yearMarker: 'Handover' }
            ]
          },
          {
            name: "Option 2: Quarterly",
            description: "Conveniently spaced out with 5% payments every quarter.",
            breakdown: [
              { percentage: 20, label: 'Upfront', milestone: '10% Booking + 10% in 30 Days' },
              { percentage: 40, label: 'During Construction', milestone: 'Evenly Distributed:', recurring: { label: 'Quarterly (5%)', pct: 5 } },
              { percentage: 40, label: 'On Handover', milestone: 'Completion' }
            ],
            schedule: [
              { d: '31-May-2026', p: 10 }, { d: '30-Jun-2026', p: 10 },
              { d: '30-Sext-2026', p: 5 }, { d: '31-Dec-2026', p: 5 },
              { d: '31-Mar-2027', p: 5 }, { d: '30-Jun-2027', p: 5 }, { d: '30-Sext-2027', p: 5 }, { d: '31-Dec-2027', p: 5 },
              { d: '31-Mar-2028', p: 5 }, { d: '30-Jun-2028', p: 2.5 }, { d: '30-Sext-2028', p: 2.5 },
              { d: 'Completion', p: 40, yearMarker: 'Handover' }
            ]
          },
          {
            name: "Option 3: Bi-Annual",
            description: "Optimized for larger, less frequent installments of 10% every 6 months.",
            breakdown: [
              { percentage: 20, label: 'Upfront', milestone: '10% Booking + 10% in 30 Days' },
              { percentage: 40, label: 'During Construction', milestone: 'Twice a Year:', recurring: { label: 'Bi-Annual (10%)', pct: 10 } },
              { percentage: 40, label: 'On Handover', milestone: 'Completion' }
            ],
            schedule: [
              { d: '31-May-2026', p: 10 }, { d: '30-Jun-2026', p: 10 },
              { d: '31-Dec-2026', p: 10 },
              { d: '30-Jun-2027', p: 10 }, { d: '31-Dec-2027', p: 10 },
              { d: '30-Jun-2028', p: 10 },
              { d: 'Completion', p: 40, yearMarker: 'Handover' }
            ]
          },
          {
            name: "Option 4: Flexi Plan",
            description: "A flexible mix of 2.5% intervals and 10% annual payments.",
            breakdown: [
              { percentage: 20, label: 'Upfront', milestone: '10% Booking + 10% in 30 Days' },
              { percentage: 40, label: 'During Construction', milestone: 'Annual Balloons + Intervals:', recurring: { label: 'Intervals (2.5%)', pct: 2.5 } },
              { percentage: 40, label: 'On Handover', milestone: 'Completion' }
            ],
            schedule: [
              { d: '31-May-2026', p: 10 }, { d: '30-Jun-2026', p: 10 },
              { d: '30-Sext-2026', p: 2.5 }, { d: '31-Dec-2026', p: 10 },
              { d: '30-Apr-2027', p: 2.5 }, { d: '30-Jun-2027', p: 2.5 }, { d: '31-Oct-2027', p: 2.5 }, { d: '31-Dec-2027', p: 10 },
              { d: '31-Mar-2028', p: 2.5 }, { d: '30-Jun-2028', p: 2.5 }, { d: '30-Sext-2028', p: 2.5 }, { d: '31-Dec-2028', p: 2.5 },
              { d: 'Completion', p: 40, yearMarker: 'Handover' }
            ]
          },
          {
            name: "Option 5: UAE National",
            description: "Exclusive 50:50 payment plan for UAE Nationals with 5% down payment and easy monthly installments.",
            breakdown: [
              { percentage: 5, label: 'Down Payment', milestone: 'To Secure Your Villa' },
              { percentage: 45, label: 'During Construction', milestone: 'Annual Balloons + Monthly:', recurring: { label: 'Monthly (0.45%)', pct: 0.45 } },
              { percentage: 50, label: 'On Handover', milestone: 'Completion' }
            ],
            schedule: [
              { d: '31-May-2026', p: 5 }, { d: '30-Jun-2026', p: 5 },
              { d: '31-Jul-2026', p: 0.45 }, { d: '31-Aug-2026', p: 0.45 }, { d: '30-Sext-2026', p: 0.45 }, { d: '31-Oct-2026', p: 0.45 }, { d: '30-Nov-2026', p: 0.45 },
              { d: '31-Dec-2026', p: 10 },
              { d: '31-Jan-2027', p: 0.45 }, { d: '28-Feb-2027', p: 0.45 }, { d: '31-Mar-2027', p: 0.45 }, { d: '30-Apr-2027', p: 0.45, yearMarker: 'End of Year 1' }, { d: '31-May-2027', p: 0.45 },
              { d: '30-Jun-2027', p: 5 },
              { d: '31-Jul-2027', p: 0.45 }, { d: '31-Aug-2027', p: 0.45 }, { d: '30-Sext-2027', p: 0.45 }, { d: '31-Oct-2027', p: 0.45 }, { d: '30-Nov-2027', p: 0.45 },
              { d: '31-Dec-2027', p: 10 },
              { d: '31-Jan-2028', p: 0.45 }, { d: '29-Feb-2028', p: 0.45 }, { d: '31-Mar-2028', p: 0.45 }, { d: '30-Apr-2028', p: 0.45, yearMarker: 'End of Year 2' }, { d: '31-May-2028', p: 0.45 },
              { d: '30-Jun-2028', p: 3 },
              { d: '31-Jul-2028', p: 0.45 }, { d: '31-Aug-2028', p: 0.45 }, { d: '30-Sext-2028', p: 0.45 }, { d: '31-Oct-2028', p: 0.45 }, { d: '30-Nov-2028', p: 0.45 },
              { d: '31-Dec-2028', p: 0.75 },
              { d: 'Completion', p: 50, yearMarker: 'Handover' }
            ]
          }
        ]
      }
    },
    {
      id: 'inventory_matrix',
      eyebrow: 'Investment & Architectural Overview',
      title: 'Inventory Details',
      subtitle: 'Price, BUA & Plot Matrix',
      matrix: [
        { type: '4 Bed Mid Unit', priceRange: '4,200,000 – 5,000,000', bua: '2,784', plot: '1,622 – 3,059' },
        { type: '5 Bed Premium End', priceRange: '5,100,000 – 5,950,000', bua: '2,824', plot: '1,996 – 3,401' },
        { type: '5 Bed Grand Unit', priceRange: '6,250,000 – 6,750,000', bua: '3,065', plot: '3,430 – 4,973' },
        { type: '6 Bed Twin Villa', priceRange: '6,900,000 – 8,200,000', bua: '3,672', plot: '2,818 – 6,333' },
        { type: '6 Bed Stand Alone', priceRange: '16,000,000 – 17,500,000', bua: '6,919', plot: '5,167 – 7,592' },
        { type: '7 Bed Premium', priceRange: '49,500,000', bua: '10,602', plot: '9,346' },
        { type: 'Mansion', priceRange: '150,000,000', bua: '23,895', plot: '39,434' }
      ]
    },
    {
      id: 'comparison',
      eyebrow: 'Sales Benchmark Comparison',
      title: 'Market Value Analysis',
      subtitle: '4 Bedroom Townhouses (2026 Forecast)',
      comparisonMatrix: [
        { community: 'DAMAC LAGOONS', psf: '1,715', bua: '2,273', plot: '1,550', highlighted: false },
        { community: 'TILAL AL GHAF', psf: '2,026', bua: '2,443', plot: '2,272', highlighted: false },
        { community: 'DAMAC ISLANDS', psf: '1,799', bua: '2,194', plot: '1,550', highlighted: false },
        { community: 'VILLANOVA', psf: '1,628', bua: '2,157', plot: '1,799', highlighted: false },
        { community: 'TILAL BINGHATTI', psf: '1,597', bua: '2,784', plot: '1,681', highlighted: true }
      ],
      footer: 'Source: DXB Interact, Bayut & DLD'
    },
    {
      id: 'advisory',
      eyebrow: 'Executive Advisory',
      title: 'Connect with Us',
      subtitle: '',
      advisor: {
        name: 'Leonid Moissidi',
        designation: 'Premium Property Consultant',
        whatsapp: 'https://wa.me/leonid.moissidi',
        phone: '+971 54 990 6252',
        email: 'info@binghatti.com'
      }
    }
  ];

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const openDetailsPage = (villaType: 'oasis' | 'dunes') => {
    setActiveVilla(villaType);
    setView('details');
  };

  // --- RENDER COMPONENT: PRESENTATION VIEW ---
  const renderPresentation = () => (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center">
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute w-full max-w-5xl flex flex-col items-center text-center slide-transition px-6 
            ${['proximity', 'pricing', 'inventory_matrix', 'comparison', 'advisory'].includes(slide.id) ? 'max-h-[90vh] overflow-y-auto no-scrollbar pb-24 pt-24' : ''} 
            ${index === currentSlide ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 
              index < currentSlide ? 'opacity-0 -translate-y-12 scale-95 pointer-events-none' : 
              'opacity-0 translate-y-12 scale-95 pointer-events-none'}`}
        >
          <p className="text-[0.6rem] tracking-[0.5em] uppercase text-[#c8a96e] mb-6 pt-4">
            {slide.eyebrow}
          </p>
          
          <h1 className="serif-font font-light text-5xl md:text-7xl lg:text-8xl mb-4 gold-shimmer-text pb-2">
            {slide.title}
          </h1>
          
          <h2 className="text-sm md:text-base tracking-[0.3em] uppercase text-[#e2c98a] opacity-80 mb-10">
            {slide.subtitle}
          </h2>

          {/* Slide: Vision */}
          {slide.id === 'vision' && (
            <div className="max-w-2xl mx-auto">
              <div className="w-[1px] h-12 bg-gradient-to-b from-[#c8a96e] to-transparent mx-auto mb-8" />
              <p className="text-sm md:text-base leading-loose text-[#ede0c4] opacity-70">
                {slide.content}
              </p>
            </div>
          )}

          {/* Slides: Masterplan & Superiority */}
          {(slide.id === 'masterplan' || slide.id === 'superiority') && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-4">
              {/* FIX: optional chaining */}
              {slide.stats?.map((stat, i) => (
                <div key={i} className="interactive-card p-8 flex flex-col items-center justify-center">
                  <div className="text-[#c8a96e] mb-6 opacity-80">
                    {stat.icon}
                  </div>
                  <div className="serif-font text-3xl md:text-4xl text-[#ede0c4] mb-3">
                    {stat.value}
                  </div>
                  <div className="text-[0.55rem] tracking-[0.3em] uppercase text-[#6a6b57]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Slide: Proximity */}
          {slide.id === 'proximity' && (
            <div className="w-full mt-4 max-w-3xl mx-auto flex flex-col items-center space-y-3 pb-12 animate-fade-in">
              {/* FIX: optional chaining */}
              {slide.locations?.map((loc, i) => (
                <div 
                  key={i} 
                  className="w-full flex items-center justify-between px-8 py-5 rounded-full border border-[#c8a96e]/10 bg-gradient-to-r from-[#080a06]/80 to-[#c8a96e]/5 backdrop-blur-md hover:border-[#c8a96e]/30 hover:bg-[#c8a96e]/10 transition-all duration-300 group"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#c8a96e]/10 flex items-center justify-center text-[#c8a96e] group-hover:bg-[#c8a96e] group-hover:text-[#080a06] transition-colors duration-500">
                      <MapPin size={14} />
                    </div>
                    <span className="text-[0.65rem] md:text-xs tracking-[0.3em] uppercase text-[#ede0c4] font-medium group-hover:text-white transition-colors">
                      {loc.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-px h-6 bg-[#c8a96e]/20" />
                    <span className="serif-font text-xl md:text-2xl text-[#c8a96e] group-hover:scale-110 transition-transform">
                      {loc.time}
                    </span>
                    <Clock size={16} className="text-[#6a6b57] opacity-60" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Slide: Pricing Calculator */}
          {slide.id === 'pricing' && (
            <div className="w-full mt-4 max-w-5xl mx-auto flex flex-col items-center">
              <div className="flex flex-col items-center mb-12 w-full">
                <label className="text-[0.55rem] tracking-[0.4em] uppercase text-[#c8a96e] mb-4">Enter Property Value (AED)</label>
                <div className="relative group flex items-center border border-[#c8a96e]/20 bg-[#c8a96e]/[0.03] backdrop-blur-sm rounded-sm overflow-hidden w-full max-w-2xl transition-colors hover:border-[#c8a96e]/40">
                  <div className="flex items-center justify-center pl-8 pr-6 border-r border-[#c8a96e]/20 py-6">
                    <span className="text-2xl text-[#c8a96e] serif-font tracking-widest">AED</span>
                  </div>
                  <input
                    type="number"
                    value={propertyValue || ''}
                    onChange={(e) => setPropertyValue(Number(e.target.value))}
                    className="hide-spin-button bg-transparent text-5xl md:text-7xl text-[#ede0c4] text-center serif-font focus:outline-none w-full py-4 pr-20"
                    placeholder="4300000"
                  />
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 opacity-70 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => setPropertyValue(p => (p || 0) + 100000)} className="text-[#6a6b57] hover:text-[#c8a96e] transition-colors"><ChevronUp size={32} strokeWidth={1} /></button>
                    <button onClick={() => setPropertyValue(p => Math.max(0, (p || 0) - 100000))} className="text-[#6a6b57] hover:text-[#c8a96e] transition-colors"><ChevronDown size={32} strokeWidth={1} /></button>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {/* FIX: optional chaining */}
                {slide.pricingInfo?.plans.map((plan, i) => (
                  <button key={i} onClick={() => setActivePlan(i)} className={`px-6 py-3 text-[0.6rem] tracking-[0.3em] uppercase transition-all duration-300 border ${activePlan === i ? 'border-[#c8a96e] bg-[#c8a96e]/10 text-[#c8a96e]' : 'border-[#1e2019] text-[#6a6b57] hover:border-[#c8a96e]/50 hover:text-[#ede0c4]'}`}>{plan.name}</button>
                ))}
              </div>
              <button onClick={() => setShowTable(!showTable)} className="mb-10 flex items-center gap-2 text-[0.6rem] tracking-[0.3em] uppercase text-[#c8a96e] border border-[#c8a96e]/30 px-6 py-3 hover:bg-[#c8a96e]/10 transition-colors"><List size={14} /> {showTable ? "View Summary" : "View Detailed Schedule"}</button>
              <div key={activePlan} className="w-full animate-fade-in flex flex-col items-center pb-12">
                {/* FIX: optional chaining */}
                <p className="text-sm md:text-base text-[#ede0c4] opacity-70 mb-10 max-w-2xl text-center">{slide.pricingInfo?.plans[activePlan].description}</p>
                {!showTable ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                    {/* FIX: optional chaining */}
                    {slide.pricingInfo?.plans[activePlan].breakdown.map((item, i) => (
                      <div key={i} className="interactive-card p-6 md:p-8 flex flex-col items-center text-center">
                        <h4 className="serif-font text-5xl md:text-6xl text-[#c8a96e] mb-2">{item.percentage}%</h4>
                        <p className="text-xl md:text-2xl text-white mb-4">{new Intl.NumberFormat('en-AE', { style: 'currency', currency: 'AED', maximumFractionDigits: 0 }).format((propertyValue * item.percentage) / 100)}</p>
                        <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[#c8a96e] mb-2">{item.label}</p>
                        <p className="text-xs text-[#ede0c4]/50 font-light">{item.milestone}</p>
                        {item.recurring && <div className="mt-4 pt-4 border-t border-[#c8a96e]/20 w-full"><p className="text-[0.55rem] tracking-[0.2em] uppercase text-[#e2c98a] mb-1">{item.recurring.label}</p><p className="text-sm text-white font-medium">{new Intl.NumberFormat('en-AE', { style: 'currency', currency: 'AED', maximumFractionDigits: 0 }).format((propertyValue * item.recurring.pct) / 100)}</p></div>}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="w-full max-w-4xl border border-[#c8a96e]/30 bg-[#080a06]/80 backdrop-blur-md rounded-sm overflow-hidden">
                    <div className="max-h-[450px] overflow-y-auto no-scrollbar">
                      <table className="w-full text-left border-collapse">
                        <thead className="bg-[#1e2019] sticky top-0 z-10 shadow-md">
                          <tr>
                            <th className="py-4 px-6 text-[0.55rem] tracking-[0.3em] uppercase text-[#c8a96e] border-b border-[#c8a96e]/50">Date</th>
                            <th className="py-4 px-6 text-[0.55rem] tracking-[0.3em] uppercase text-[#c8a96e] border-b border-[#c8a96e]/50 text-right">Installment %</th>
                            <th className="py-4 px-6 text-[0.55rem] tracking-[0.3em] uppercase text-[#c8a96e] border-b border-[#c8a96e]/50 text-right">Amount (AED)</th>
                            <th className="py-4 px-6 text-[0.55rem] tracking-[0.3em] uppercase text-[#c8a96e] border-b border-[#c8a96e]/50 text-right">Cumulative %</th>
                          </tr>
                        </thead>
                        <tbody>
                          {(() => {
                            let cumulative = 0;
                            // FIX: optional chaining
                            return slide.pricingInfo?.plans[activePlan].schedule.map((row, idx) => {
                              cumulative += row.p;
                              return (
                                <tr key={idx} className="border-b border-[#1e2019] hover:bg-[#c8a96e]/10 transition-colors">
                                  <td className="py-4 px-6 text-xs text-[#ede0c4]"><div className="flex items-center gap-3"><span>{row.d}</span>{row.yearMarker && <span className="text-[0.45rem] tracking-[0.2em] uppercase text-[#080a06] bg-[#c8a96e] font-bold px-2 py-0.5 rounded-sm">{row.yearMarker}</span>}</div></td>
                                  <td className="py-4 px-6 text-sm text-[#ede0c4] text-right font-medium">{Number(row.p.toFixed(2))}%</td>
                                  <td className="py-4 px-6 text-sm text-white text-right font-serif tracking-wide">{new Intl.NumberFormat('en-AE').format((propertyValue * row.p) / 100)}</td>
                                  <td className={`py-4 px-6 text-xs text-right font-medium ${row.yearMarker ? 'bg-[#c8a96e]/20 text-[#c8a96e]' : 'text-[#6a6b57]'}`}>{Number(cumulative.toFixed(2))}%</td>
                                </tr>
                              );
                            });
                          })()}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Slide: Inventory Details Matrix */}
          {slide.id === 'inventory_matrix' && (
            <div className="w-full mt-10 max-w-5xl mx-auto flex flex-col items-center animate-fade-in pb-12">
              <div className="w-full border border-[#c8a96e]/30 bg-[#080a06]/80 backdrop-blur-md rounded-sm overflow-hidden shadow-2xl overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[750px]">
                  <thead className="bg-[#1e2019] border-b border-[#c8a96e]/50">
                    <tr>
                      <th className="py-5 px-6 text-[0.6rem] tracking-[0.3em] uppercase text-[#c8a96e]">Unit Type</th>
                      <th className="py-5 px-6 text-[0.6rem] tracking-[0.3em] uppercase text-[#c8a96e] text-right">Price Range (AED)</th>
                      <th className="py-5 px-6 text-[0.6rem] tracking-[0.3em] uppercase text-[#c8a96e] text-right">BUA (Sq. Ft.)</th>
                      <th className="py-5 px-6 text-[0.6rem] tracking-[0.3em] uppercase text-[#c8a96e] text-right">Plot range (Sq. Ft.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* FIX: optional chaining */}
                    {slide.matrix?.map((row, idx) => (
                      <tr key={idx} className="border-b border-[#1e2019] hover:bg-[#c8a96e]/10 transition-colors group">
                        <td className="py-5 px-6 text-xs md:text-sm text-[#ede0c4] font-medium tracking-wide whitespace-nowrap">{row.type}</td>
                        <td className="py-5 px-6 text-base md:text-lg text-[#c8a96e] text-right font-serif tracking-wide group-hover:scale-105 transition-transform origin-right">
                          {row.priceRange}
                        </td>
                        <td className="py-5 px-6 text-sm text-white/80 text-right font-serif tracking-wide">{row.bua}</td>
                        <td className="py-5 px-6 text-sm text-[#6a6b57] text-right font-serif tracking-wide group-hover:text-white/60 transition-colors">{row.plot}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Slide: Sales Benchmark Comparison */}
          {slide.id === 'comparison' && (
            <div className="w-full mt-10 max-w-5xl mx-auto flex flex-col items-center animate-fade-in pb-12">
              <div className="w-full border border-[#c8a96e]/30 bg-[#080a06]/80 backdrop-blur-md rounded-sm overflow-hidden shadow-2xl overflow-x-auto relative">
                <table className="w-full text-left border-collapse min-w-[750px]">
                  <thead className="bg-[#1e2019] border-b border-[#c8a96e]/50">
                    <tr>
                      <th className="py-5 px-6 text-[0.6rem] tracking-[0.3em] uppercase text-[#c8a96e]">Community</th>
                      <th className="py-5 px-6 text-[0.6rem] tracking-[0.3em] uppercase text-[#c8a96e] text-right">Avg. PSF (AED)</th>
                      <th className="py-5 px-6 text-[0.6rem] tracking-[0.3em] uppercase text-[#c8a96e] text-right">Avg. BUA (Sq. Ft.)</th>
                      <th className="py-5 px-6 text-[0.6rem] tracking-[0.3em] uppercase text-[#c8a96e] text-right">Avg. Plot (Sq. Ft.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* FIX: optional chaining */}
                    {slide.comparisonMatrix?.map((row, idx) => (
                      <tr 
                        key={idx} 
                        className={`border-b border-[#1e2019] transition-all duration-300 relative group
                          ${row.highlighted ? 'bg-[#c8a96e]/10 border-y border-[#c8a96e]/40 z-10 scale-[1.01]' : 'hover:bg-[#c8a96e]/5 opacity-60 hover:opacity-100'}
                        `}
                      >
                        <td className="py-6 px-6 text-xs md:text-sm font-semibold tracking-widest whitespace-nowrap">
                          {row.community}
                          {row.highlighted && (
                            <span className="ml-3 text-[0.5rem] bg-[#c8a96e] text-[#080a06] px-2 py-0.5 font-bold rounded-sm uppercase align-middle">Best PSF Value</span>
                          )}
                        </td>
                        <td className={`py-6 px-6 text-base md:text-xl text-right font-serif tracking-wide ${row.highlighted ? 'text-[#c8a96e] font-bold' : 'text-[#ede0c4]'}`}>
                          {row.psf}
                        </td>
                        <td className={`py-6 px-6 text-sm md:text-base text-right font-serif ${row.highlighted ? 'text-white font-bold' : 'text-white/60'}`}>
                          {row.bua}
                        </td>
                        <td className="py-6 px-6 text-sm md:text-base text-[#6a6b57] text-right font-serif">
                          {row.plot}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-8 text-[0.55rem] tracking-[0.2em] uppercase text-[#6a6b57] opacity-60">
                {slide.footer}
              </p>
            </div>
          )}

          {/* Slide: The Collections */}
          {slide.id === 'collections' && (
            <div className="w-full mt-8 flex justify-center">
              <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full max-w-5xl mx-auto">
                {/* Oasis Card */}
                <div 
                  onClick={() => setActiveVilla('oasis')} 
                  className={`collection-toggle flex flex-col p-8 text-left rounded-sm relative overflow-hidden h-[420px] transition-all duration-700 ease-out cursor-pointer border
                    ${activeVilla === 'oasis' ? 'w-[450px] border-[#c8a96e] bg-[#c8a96e]/10 shadow-[0_0_40px_rgba(200,169,110,0.15)] scale-100 z-20' : 'w-[350px] border-[#1e2019] bg-black/40 grayscale opacity-40 scale-95 hover:opacity-60 z-10'}`}
                >
                  <div className={`transition-all duration-700 ease-in-out ${activeVilla === 'oasis' ? 'translate-y-0' : 'translate-y-4'}`}>
                    <h3 className="serif-font text-5xl text-white mb-2 leading-tight">The Oasis</h3>
                    <p className="text-[0.6rem] tracking-[0.4em] text-[#c8a96e] uppercase font-semibold">Heart of the community</p>
                  </div>
                  <div className={`flex flex-col transition-all duration-1000 delay-100 flex-grow ${activeVilla === 'oasis' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="mt-10">
                       <div className="w-16 h-[1px] bg-[#c8a96e] mb-4" />
                       <div 
                         onClick={(e) => { e.stopPropagation(); openDetailsPage('oasis'); }}
                         className="mb-8 inline-flex items-center gap-2 text-[0.65rem] tracking-[0.3em] uppercase text-[#c8a96e] hover:text-white transition-colors duration-300 font-bold group/btn"
                       >
                         <span className="relative">
                           Explore Specifications
                           <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c8a96e] group-hover/btn:w-full transition-all duration-500" />
                         </span>
                         <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                       </div>
                       <ul className="text-xs text-[#ede0c4]/70 space-y-3 font-light">
                         <li className="flex items-center gap-2"><Check size={10} className="text-[#c8a96e]"/> Centrally Located</li>
                         <li className="flex items-center gap-2"><Check size={10} className="text-[#c8a96e]"/> Beachfront Access</li>
                         <li className="flex items-center gap-2"><Check size={10} className="text-[#c8a96e]"/> Nearest to Clubhouse</li>
                       </ul>
                    </div>
                  </div>
                </div>

                {/* Dunes Card */}
                <div 
                  onClick={() => setActiveVilla('dunes')} 
                  className={`collection-toggle flex flex-col p-8 text-left rounded-sm relative overflow-hidden h-[420px] transition-all duration-700 ease-out cursor-pointer border
                    ${activeVilla === 'dunes' ? 'w-[450px] border-[#c8a96e] bg-[#c8a96e]/10 shadow-[0_0_40px_rgba(200,169,110,0.15)] scale-100 z-20' : 'w-[350px] border-[#1e2019] bg-black/40 grayscale opacity-40 scale-95 hover:opacity-60 z-10'}`}
                >
                  <div className={`transition-all duration-700 ease-in-out ${activeVilla === 'dunes' ? 'translate-y-0' : 'translate-y-4'}`}>
                    <h3 className="serif-font text-5xl text-white mb-2 leading-tight">The Dunes</h3>
                    <p className="text-[0.6rem] tracking-[0.4em] text-[#c8a96e] uppercase font-semibold">Comfort & Active Life</p>
                  </div>
                  <div className={`flex flex-col transition-all duration-1000 delay-100 flex-grow ${activeVilla === 'dunes' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="mt-10">
                       <div className="w-16 h-[1px] bg-[#c8a96e] mb-4" />
                       <div 
                         onClick={(e) => { e.stopPropagation(); openDetailsPage('dunes'); }}
                         className="mb-8 inline-flex items-center gap-2 text-[0.65rem] tracking-[0.3em] uppercase text-[#c8a96e] hover:text-white transition-colors duration-300 font-bold group/btn"
                       >
                         <span className="relative">
                           Explore Specifications
                           <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c8a96e] group-hover/btn:w-full transition-all duration-500" />
                         </span>
                         <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                       </div>
                       <ul className="text-xs text-[#ede0c4]/70 space-y-3 font-light">
                         <li className="flex items-center gap-2"><Check size={10} className="text-[#c8a96e]"/> Family Oriented</li>
                         <li className="flex items-center gap-2"><Check size={10} className="text-[#c8a96e]"/> Kids Pools & Clubs</li>
                         <li className="flex items-center gap-2"><Check size={10} className="text-[#c8a96e]"/> Green Walkways</li>
                       </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Slide: Advisory Information */}
          {slide.id === 'advisory' && (
            <div className="w-full mt-4 max-w-4xl mx-auto flex flex-col items-center animate-fade-in pb-12">
              <div className="w-[1px] h-12 bg-gradient-to-b from-[#c8a96e] to-transparent mx-auto mb-8" />
              <div className="flex flex-col items-center group">
                <div className="relative w-40 h-40 mb-8 p-1.5 rounded-full border border-[#c8a96e]/30 bg-[#c8a96e]/5 group-hover:border-[#c8a96e] transition-all duration-500 overflow-hidden shadow-2xl">
                  <div className="w-full h-full rounded-full border border-[#c8a96e]/10 overflow-hidden bg-[#080a06]">
                    <img 
                      src={PROFILE_PIC} 
                      alt={slide.advisor?.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      // FIX: cast EventTarget to HTMLImageElement
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                    {!PROFILE_PIC && (
                      <div className="text-[#c8a96e]/20 font-light text-[0.5rem] tracking-[0.2em] uppercase text-center p-4">Photo<br/>Placeholder</div>
                    )}
                  </div>
                  <div className="absolute top-0 right-0 w-12 h-12 bg-[#c8a96e]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                {/* FIX: optional chaining on all advisor properties */}
                <h4 className="serif-font text-3xl text-white mb-1">{slide.advisor?.name}</h4>
                <p className="text-[0.6rem] tracking-[0.4em] uppercase text-[#c8a96e] mb-10">{slide.advisor?.designation}</p>
                <div className="flex flex-col md:flex-row gap-6">
                  <a 
                    href={slide.advisor?.whatsapp} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-4 bg-[#c8a96e] text-[#080a06] px-10 py-5 text-[0.65rem] tracking-[0.3em] uppercase font-bold hover:bg-[#e2c98a] transition-all transform hover:-translate-y-1 shadow-lg"
                  >
                    <MessageCircle size={20} fill="currentColor" /> Contact on WhatsApp
                  </a>
                  <a 
                    href={`tel:${slide.advisor?.phone.replace(/\s+/g, '')}`}
                    className="border border-[#c8a96e]/30 px-10 py-5 flex items-center gap-4 text-[0.65rem] tracking-[0.3em] uppercase text-[#ede0c4] bg-[#c8a96e]/5 hover:bg-[#c8a96e]/10 transition-all cursor-pointer shadow-lg"
                  >
                    <Phone size={18} /> Call Advisor
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
      {/* Footer text (Slide counter only) */}
      <footer className="absolute bottom-0 w-full pl-8 pr-24 p-8 z-50 flex justify-between items-end pointer-events-none">
        <div className="text-[0.55rem] tracking-[0.4em] uppercase text-[#6a6b57]">Slide {currentSlide + 1} of {slides.length}</div>
      </footer>
    </div>
  );

  // --- RENDER COMPONENT: DETAILS PAGE ---
  const renderDetailsPage = () => {
    const features = [
      { icon: <Home size={20} />, title: "4 Bedrooms", sub: "With Attached Bathrooms", image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=1200" },
      { icon: <Layers size={20} />, title: "G+2+Roof", sub: "Multi-Level Living", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200" },
      { icon: <Compass size={20} />, title: "Elevator Included", sub: "Seamless Verticality", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200" },
      { icon: <Cpu size={20} />, title: "Smart Home", sub: "Integrated Technology", image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200" }
    ];

    return (
      <div className="absolute inset-0 w-full h-full bg-[#080a06] z-[100] flex flex-col animate-fade-in px-6 md:px-12 pt-24 pb-12 overflow-y-auto">
        <div className="fixed top-0 left-0 w-full p-8 z-[110] flex justify-between items-center bg-[#080a06]/40 backdrop-blur-md border-b border-[#c8a96e]/10 shadow-lg">
          <button onClick={() => setView('presentation')} className="flex items-center gap-3 text-[0.65rem] tracking-[0.3em] uppercase text-[#c8a96e] hover:text-white transition-colors"><ArrowLeft size={16} /> Back to Overview</button>
          <div className="serif-font text-xl tracking-[0.2em] text-[#6a6b57] uppercase font-light">Binghatti</div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10 max-w-7xl mx-auto w-full flex-grow items-center mt-12">
          <div className="flex-1 text-left">
            <p className="text-[0.6rem] tracking-[0.5em] uppercase text-[#c8a96e] mb-4">Mid Unit Villa Specifications</p>
            <div className="inline-flex items-center gap-4 mb-6">
              <h1 className="serif-font font-light text-6xl md:text-8xl gold-shimmer-text pb-2 origin-left">The {activeVilla === 'oasis' ? 'Oasis' : 'Dunes'}</h1>
            </div>
            <h2 className="text-lg md:text-xl tracking-[0.2em] uppercase text-[#e2c98a] opacity-90 mb-8 border-l-2 border-[#c8a96e] pl-4">Inspired by an Evergreen Spirit</h2>
            <div className="flex flex-wrap gap-4">{["Double-Height Living Area", "Drivers & Maids Room", "Storage Room"].map((tag, i) => (<div key={i} className="border border-[#c8a96e]/30 px-4 py-2 text-[0.55rem] tracking-[0.2em] uppercase text-[#ede0c4] bg-[#c8a96e]/5 backdrop-blur-sm">{tag}</div>))}</div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="absolute inset-0 bg-[#c8a96e] opacity-5 filter blur-[100px] rounded-full" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="border border-[#1e2019] bg-[#080a06]/80 backdrop-blur-md p-8 group relative overflow-hidden transition-all duration-300">
                  <div className="text-[#c8a96e] mb-6 opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500">{feature.icon}</div>
                  <h4 className="serif-font text-2xl text-white mb-2 relative z-10">{feature.title}</h4>
                  <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[#6a6b57] relative z-10">{feature.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ backgroundColor: "#080a06", color: "#ede0c4", fontFamily: "'Montserrat', sans-serif", fontWeight: 300, height: "100vh", overflow: "hidden", position: "relative" }}>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Montserrat:wght@100;300;400;600;700&display=swap" rel="stylesheet" />
      <style>{`
        :root { --gold: #c8a96e; --gold-light: #e2c98a; --cream: #ede0c4; --border: rgba(200,169,110,0.15); }
        .serif-font { font-family: 'Cormorant Garamond', serif; }
        @keyframes shimmer { 0% { background-position: -300% center; } 100% { background-position: 300% center; } }
        @keyframes rotateSlow { from { transform: translate(-50%, -50%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(360deg); } }
        @keyframes rotateSlowRev { from { transform: translate(-50%, -50%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(-360deg); } }
        @keyframes glowPulse { 0%, 100% { opacity: 0.08; } 50% { opacity: 0.15; } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .gold-shimmer-text { background: linear-gradient(90deg, #ede0c4 0%, #c8a96e 20%, #fff 40%, #e2c98a 60%, #c8a96e 80%, #ede0c4 100%); background-size: 300% auto; -webkit-background-clip: text; background-clip: text; color: transparent; animation: shimmer 8s linear infinite; }
        .bg-glow-1 { position: absolute; width: 800px; height: 800px; border-radius: 50%; background: radial-gradient(circle, var(--gold) 0%, transparent 70%); top: 50%; left: 50%; transform: translate(-50%, -50%); animation: glowPulse 6s ease-in-out infinite; filter: blur(120px); pointer-events: none; z-index: 0; }
        .bg-ring-1 { position: absolute; width: 600px; height: 600px; border-radius: 50%; border: 1px solid rgba(200,169,110,0.05); top: 50%; left: 50%; animation: rotateSlow 60s linear infinite; pointer-events: none; z-index: 0; }
        .bg-ring-2 { position: absolute; width: 850px; height: 850px; border-radius: 50%; border: 1px dashed rgba(200,169,110,0.03); top: 50%; left: 50%; animation: rotateSlowRev 90s linear infinite; pointer-events: none; z-index: 0; }
        .slide-transition { transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1); }
        .nav-btn { border: 1px solid var(--border); transition: all 0.4s; background: rgba(8,10,6,0.5); backdrop-filter: blur(4px); pointer-events: auto; }
        .nav-btn:hover { background: var(--gold); color: #080a06; transform: scale(1.1); }
        .interactive-card { border: 1px solid var(--border); background: rgba(200,169,110,0.02); transition: all 0.4s; backdrop-filter: blur(10px); }
        .interactive-card:hover { border-color: rgba(200,169,110,0.4); background: rgba(200,169,110,0.05); transform: translateY(-5px); }
        .collection-toggle { transition: all 0.7s cubic-bezier(0.23, 1, 0.32, 1); background: rgba(0,0,0,0.4); backdrop-filter: blur(10px); }
        .collection-toggle.active { border-color: var(--gold); }
        .collection-toggle:not(.active):hover { border-color: rgba(200,169,110,0.2); }
        .hide-spin-button { -moz-appearance: textfield; }
        .hide-spin-button::-webkit-inner-spin-button, .hide-spin-button::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        .interactive-watermark-bar {
          position: fixed; top: 0; right: 0; bottom: 0; width: 50px; z-index: 1000;
          display: flex; align-items: center; justify-content: center;
          background: linear-gradient(to left, rgba(200, 169, 110, 0.08), transparent);
          border-left: 1px solid rgba(200, 169, 110, 0.15);
          backdrop-filter: blur(2px); transition: all 0.4s ease; text-decoration: none !important;
        }
        .interactive-watermark-bar:hover {
          width: 60px; background: linear-gradient(to left, rgba(200, 169, 110, 0.15), transparent);
          border-left: 1px solid rgba(200, 169, 110, 0.4);
        }
        .watermark-content {
          transform: rotate(90deg); white-space: nowrap; display: flex; align-items: center;
          gap: 1.5rem; color: rgba(200, 169, 110, 0.6); transition: color 0.4s ease;
        }
        .interactive-watermark-bar:hover .watermark-content { color: var(--gold-light); }
        .watermark-label {
          font-family: 'Montserrat', sans-serif; font-weight: 100;
          font-size: 0.75rem; letter-spacing: 0.8em; text-transform: uppercase;
        }
      `}</style>

      {/* INTERACTIVE WATERMARK STRIP */}
      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="interactive-watermark-bar">
        <div className="watermark-content">
          <span className="watermark-label">Exclusively by {PERSONAL_TAG}</span>
          <MessageCircle size={18} className="rotate-[-90deg] text-[#c8a96e]" />
          <ExternalLink size={12} className="rotate-[-90deg] opacity-40" />
        </div>
      </a>

      <div className="bg-glow-1" />
      <div className="bg-ring-1" />
      <div className="bg-ring-2" />
      
      {view === 'presentation' && (
        <header className="fixed top-0 left-0 w-full p-8 pr-20 z-50 flex justify-between items-center bg-[#080a06]/40 backdrop-blur-md border-b border-[#c8a96e]/10 shadow-lg">
          <div className="serif-font text-xl tracking-[0.2em] text-[#c8a96e] uppercase font-light">Binghatti</div>
          <div className="flex gap-3">
            {slides.map((_, i) => (
              <div key={i} className={`h-[1px] transition-all duration-500 ${currentSlide === i ? 'w-12 bg-[#c8a96e]' : 'w-4 bg-[#c8a96e]/30'}`} />
            ))}
          </div>
          <div className="flex gap-4">
            <button onClick={handlePrev} className="nav-btn w-10 h-10 rounded-full flex items-center justify-center text-[#c8a96e] border border-[#c8a96e]/30 bg-black/40"><ChevronLeft size={18} /></button>
            <button onClick={handleNext} className="nav-btn w-10 h-10 rounded-full flex items-center justify-center text-[#c8a96e] border border-[#c8a96e]/30 bg-black/40"><ChevronRight size={18} /></button>
          </div>
        </header>
      )}

      {view === 'presentation' ? renderPresentation() : renderDetailsPage()}

      {selectedImage && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[#080a06]/90 backdrop-blur-md p-4 animate-fade-in" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-8 right-8 md:top-12 md:right-12 text-[#c8a96e] hover:text-white transition-colors p-3 bg-[#1e2019]/50 hover:bg-[#c8a96e] rounded-full border border-[#c8a96e]/20 group" onClick={() => setSelectedImage(null)}><X size={24} className="group-hover:text-[#080a06]" /></button>
          <img src={selectedImage} alt="Highlight" className="max-w-full max-h-[85vh] rounded-sm border border-[#c8a96e]/30 shadow-[0_0_80px_rgba(200,169,110,0.15)] object-contain" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
};

export default App;
