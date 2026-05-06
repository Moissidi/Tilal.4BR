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
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Presentation States
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeVilla, setActiveVilla] = useState('oasis');
  const [activePlan, setActivePlan] = useState(0);
  const [propertyValue, setPropertyValue] = useState(4300000); // Calculator state
  const [isAnimating, setIsAnimating] = useState(false);
  const [showTable, setShowTable] = useState(false); // Toggle Detailed Schedule

  // Personal Branding Constant
  const PERSONAL_TAG = "LEONID MOISSIDI";
  const WA_LINK = "https://wa.me/971549906252";
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
        { icon: <Maximize size={24} />, value: '621,815+', label: 'SQM PHASE 1' },
        { icon: <Waves size={24} />, value: '12,000 SQM', label: 'SUNKEN PEARL SHORE' },
        { icon: <Trees size={24} />, value: '20,000+', label: 'TREES PLANTED' },
        { icon: <Shield size={24} />, value: '1.6 KM', label: 'JOGGING TRACK' },
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
        { icon: <Home size={24} />, value: '8 Meters', label: 'DOUBLE-HEIGHT LIVING' },
        { icon: <Maximize size={24} />, value: '4 Meters', label: 'CEILING HEIGHTS' },
        { icon: <Waves size={24} />, value: '4.5 x 10m', label: 'RESORT-SCALE POOLS' },
        { icon: <Shield size={24} />, value: '10 Meters', label: 'REAR PRIVACY SETBACK' },
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
              { d: '31-Jul-2026', p: 0.5 }, { d: '31-Aug-2026', p: 0.5 }, { d: '30-Sep-2026', p: 0.5 }, { d: '31-Oct-2026', p: 0.5 }, { d: '30-Nov-2026', p: 0.5 },
              { d: '31-Dec-2026', p: 10 },
              { d: '31-Jan-2027', p: 0.5 }, { d: '28-Feb-2027', p: 0.5 }, { d: '31-Mar-2027', p: 0.5 }, { d: '30-Apr-2027', p: 0.5, yearMarker: 'End of Year 1' }, { d: '31-May-2027', p: 0.5 },
              { d: '30-Jun-2027', p: 0.5 }, { d: '31-Jul-2027', p: 0.5 }, { d: '31-Aug-2027', p: 0.5 }, { d: '30-Sep-2027', p: 0.5 }, { d: '31-Oct-2027', p: 0.5 }, { d: '30-Nov-2027', p: 0.5 },
              { d: '31-Dec-2027', p: 10 },
              { d: '31-Jan-2028', p: 0.5 }, { d: '29-Feb-2028', p: 0.5 }, { d: '31-Mar-2028', p: 0.5 }, { d: '30-Apr-2028', p: 0.5, yearMarker: 'End of Year 2' }, { d: '31-May-2028', p: 0.5 },
              { d: '30-Jun-2028', p: 5 },
              { d: '31-Jul-2028', p: 0.5 }, { d: '31-Aug-2028', p: 0.5 }, { d: '30-Sep-2028', p: 0.5 }, { d: '31-Oct-2028', p: 0.5 }, { d: '30-Nov-2028', p: 0.5 },
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
              { d: '30-Sep-2026', p: 5 }, { d: '31-Dec-2026', p: 5 },
              { d: '31-Mar-2027', p: 5 }, { d: '30-Jun-2027', p: 5 }, { d: '30-Sep-2027', p: 5 }, { d: '31-Dec-2027', p: 5 },
              { d: '31-Mar-2028', p: 5 }, { d: '30-Jun-2028', p: 2.5 }, { d: '30-Sep-2028', p: 2.5 },
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
            name: "Option 4: Flexi",
            description: "A flexible mix of 2.5% intervals and 10% annual payments.",
            breakdown: [
              { percentage: 20, label: 'Upfront', milestone: '10% Booking + 10% in 30 Days' },
              { percentage: 40, label: 'During Construction', milestone: 'Annual Balloons + Intervals:', recurring: { label: 'Intervals (2.5%)', pct: 2.5 } },
              { percentage: 40, label: 'On Handover', milestone: 'Completion' }
            ],
            schedule: [
              { d: '31-May-2026', p: 10 }, { d: '30-Jun-2026', p: 10 },
              { d: '30-Sep-2026', p: 2.5 }, { d: '31-Dec-2026', p: 10 },
              { d: '30-Apr-2027', p: 2.5 }, { d: '30-Jun-2027', p: 2.5 }, { d: '31-Oct-2027', p: 2.5 }, { d: '31-Dec-2027', p: 10 },
              { d: '31-Mar-2028', p: 2.5 }, { d: '30-Jun-2028', p: 2.5 }, { d: '30-Sep-2028', p: 2.5 }, { d: '31-Dec-2028', p: 2.5 },
              { d: 'Completion', p: 40, yearMarker: 'Handover' }
            ]
          },
          {
            name: "Option 5: UAE",
            description: "Exclusive 50:50 payment plan for UAE Nationals with 5% down payment.",
            breakdown: [
              { percentage: 5, label: 'Down Payment', milestone: 'To Secure Your Villa' },
              { percentage: 45, label: 'During Construction', milestone: 'Annual Balloons + Monthly:', recurring: { label: 'Monthly (0.45%)', pct: 0.45 } },
              { percentage: 50, label: 'On Handover', milestone: 'Completion' }
            ],
            schedule: [
              { d: '31-May-2026', p: 5 }, { d: '30-Jun-2026', p: 5 },
              { d: '31-Jul-2026', p: 0.45 }, { d: '31-Aug-2026', p: 0.45 }, { d: '30-Sep-2026', p: 0.45 }, { d: '31-Oct-2026', p: 0.45 }, { d: '30-Nov-2026', p: 0.45 },
              { d: '31-Dec-2026', p: 10 },
              { d: '31-Jan-2027', p: 0.45 }, { d: '28-Feb-2027', p: 0.45 }, { d: '31-Mar-2027', p: 0.45 }, { d: '30-Apr-2027', p: 0.45, yearMarker: 'End of Year 1' }, { d: '31-May-2027', p: 0.45 },
              { d: '30-Jun-2027', p: 5 },
              { d: '31-Jul-2027', p: 0.45 }, { d: '31-Aug-2027', p: 0.45 }, { d: '30-Sep-2027', p: 0.45 }, { d: '31-Oct-2027', p: 0.45 }, { d: '30-Nov-2027', p: 0.45 },
              { d: '31-Dec-2027', p: 10 },
              { d: '31-Jan-2028', p: 0.45 }, { d: '29-Feb-2028', p: 0.45 }, { d: '31-Mar-2028', p: 0.45 }, { d: '30-Apr-2028', p: 0.45, yearMarker: 'End of Year 2' }, { d: '31-May-2028', p: 0.45 },
              { d: '30-Jun-2028', p: 3 },
              { d: '31-Jul-2028', p: 0.45 }, { d: '31-Aug-2028', p: 0.45 }, { d: '30-Sep-2028', p: 0.45 }, { d: '31-Oct-2028', p: 0.45 }, { d: '30-Nov-2028', p: 0.45 },
              { d: '31-Dec-2028', p: 0.75 },
              { d: 'Completion', p: 50, yearMarker: 'Handover' }
            ]
          }
        ]
      }
    },
    {
      id: 'inventory_matrix',
      eyebrow: 'Investment Overview',
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
      eyebrow: 'Sales Benchmark',
      title: 'Market Value',
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
        whatsapp: WA_LINK,
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

  const openDetailsPage = (villaType) => {
    setActiveVilla(villaType);
    setView('details');
  };

  // --- RENDER COMPONENT: PRESENTATION VIEW ---
  const renderPresentation = () => (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute w-full h-full flex flex-col items-center slide-transition px-4 sm:px-6 pt-20 sm:pt-24 pb-28 sm:pb-32 overflow-y-auto no-scrollbar
            ${index === currentSlide ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 
              index < currentSlide ? 'opacity-0 -translate-y-12 scale-95 pointer-events-none' : 
              'opacity-0 translate-y-12 scale-95 pointer-events-none'}`}
        >
          <div className="w-full max-w-7xl flex flex-col items-center text-center">
            <p className="text-[0.55rem] sm:text-[0.6rem] tracking-[0.4em] sm:tracking-[0.5em] uppercase text-[#c8a96e] mb-4 sm:mb-6">
              {slide.eyebrow}
            </p>
            
            <h1 className="serif-font font-light text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-3 sm:mb-4 gold-shimmer-text leading-tight px-2">
              {slide.title}
            </h1>
            
            <h2 className="text-[0.65rem] sm:text-xs md:text-base tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[#e2c98a] opacity-80 mb-6 sm:mb-10 px-4">
              {slide.subtitle}
            </h2>

            {/* Vision Slide */}
            {slide.id === 'vision' && (
              <div className="max-w-2xl mx-auto px-4">
                <div className="w-[1px] h-10 sm:h-12 bg-gradient-to-b from-[#c8a96e] to-transparent mx-auto mb-6 sm:mb-8" />
                <p className="text-sm sm:text-base leading-relaxed sm:leading-loose text-[#ede0c4] opacity-70">
                  {slide.content}
                </p>
              </div>
            )}

            {/* Statistics Slides (Standardized for Luxury One-Line Alignment with Warm Cream/Yellow Numbers) */}
            {(slide.id === 'masterplan' || slide.id === 'superiority') && (
              <div className="w-full overflow-x-auto no-scrollbar pb-6 sm:pb-0">
                <div className="flex flex-nowrap lg:grid lg:grid-cols-4 gap-4 sm:gap-6 w-full mt-4 sm:mt-8 px-4 min-w-max lg:min-w-0 items-stretch">
                  {slide.stats?.map((stat, i) => (
                    <div 
                      key={i} 
                      className={`interactive-card px-8 py-12 sm:py-16 flex flex-col items-center justify-between min-h-[240px] sm:min-h-[340px] w-[260px] lg:w-full transition-opacity duration-1000 ease-out
                        ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                      style={{ transitionDelay: `${i * 150}ms` }}
                    >
                      {/* Standardized axis for Icons, Numbers, and Labels */}
                      <div className="flex flex-col items-center w-full max-w-full">
                        {/* 1. Icon (Brightened Gold) */}
                        <div className="text-[#c8a96e] mb-6 sm:mb-10 opacity-100 brightness-125 flex items-center justify-center scale-125">
                          {stat.icon}
                        </div>
                        
                        {/* 2. Primary Number/Metric (Warm Yellow/Cream) */}
                        <div className="flex flex-col items-center w-full">
                          <div className="serif-font text-2xl sm:text-3xl md:text-4xl text-[#ede0c4] mb-6 tracking-widest leading-none font-medium whitespace-nowrap text-center">
                            {stat.value}
                          </div>
                          
                          {/* Luxury Divider */}
                          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#c8a96e]/50 to-transparent mb-6" />
                          
                          {/* 3. Brighter Yellow Sub-Label (High Contrast) */}
                          <div className="text-[0.55rem] sm:text-[0.65rem] tracking-[0.5em] uppercase text-[#e2c98a] font-bold text-center leading-relaxed brightness-150 px-2 opacity-95">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Proximity Slide */}
            {slide.id === 'proximity' && (
              <div className="w-full mt-4 max-w-2xl mx-auto flex flex-col items-center space-y-2 sm:space-y-3 pb-4">
                {slide.locations?.map((loc, i) => (
                  <div 
                    key={i} 
                    className="w-full flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5 rounded-full border border-[#c8a96e]/10 bg-[#080a06]/80 backdrop-blur-md hover:border-[#c8a96e]/30 transition-all group"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 truncate">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#c8a96e]/10 flex items-center justify-center text-[#c8a96e] flex-shrink-0">
                        <MapPin size={12} />
                      </div>
                      <span className="text-[0.55rem] sm:text-[0.65rem] tracking-[0.2em] uppercase text-[#ede0c4] truncate">
                        {loc.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                      <span className="serif-font text-base sm:text-xl text-[#c8a96e]">
                        {loc.time}
                      </span>
                      <Clock size={14} className="text-[#6a6b57] opacity-60" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pricing Slide */}
            {slide.id === 'pricing' && (
              <div className="w-full mt-4 max-w-5xl mx-auto flex flex-col items-center">
                <div className="flex flex-col items-center mb-8 sm:mb-12 w-full">
                  <label className="text-[0.45rem] sm:text-[0.55rem] tracking-[0.3em] uppercase text-[#c8a96e] mb-3 sm:mb-4">Property Value (AED)</label>
                  <div className="relative group flex items-center border border-[#c8a96e]/20 bg-[#c8a96e]/[0.03] rounded-sm overflow-hidden w-full max-lg transition-colors">
                    <div className="hidden sm:flex items-center justify-center px-6 border-r border-[#c8a96e]/20 py-4 sm:py-6">
                      <span className="text-lg sm:text-xl text-[#c8a96e] serif-font tracking-widest">AED</span>
                    </div>
                    <input
                      type="number"
                      value={propertyValue || ''}
                      onChange={(e) => setPropertyValue(Number(e.target.value))}
                      className="hide-spin-button bg-transparent text-3xl sm:text-5xl md:text-6xl text-[#ede0c4] text-center serif-font focus:outline-none w-full py-4 px-2"
                      placeholder="4300000"
                    />
                    <div className="absolute right-2 sm:right-4 flex flex-col gap-1 sm:gap-2">
                      <button onClick={() => setPropertyValue(p => (p || 0) + 100000)} className="text-[#6a6b57] hover:text-[#c8a96e]"><ChevronUp size={24} /></button>
                      <button onClick={() => setPropertyValue(p => Math.max(0, (p || 0) - 100000))} className="text-[#6a6b57] hover:text-[#c8a96e]"><ChevronDown size={24} /></button>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
                  {slide.pricingInfo?.plans.map((plan, i) => (
                    <button key={i} onClick={() => setActivePlan(i)} className={`px-3 sm:px-5 py-2 sm:py-3 text-[0.45rem] sm:text-[0.55rem] tracking-[0.2em] uppercase transition-all border ${activePlan === i ? 'border-[#c8a96e] bg-[#c8a96e]/10 text-[#c8a96e]' : 'border-[#1e2019] text-[#6a6b57] hover:text-[#ede0c4]'}`}>{plan.name}</button>
                  ))}
                </div>

                <button onClick={() => setShowTable(!showTable)} className="mb-6 sm:mb-10 flex items-center gap-2 text-[0.5rem] sm:text-[0.6rem] tracking-[0.2em] uppercase text-[#c8a96e] border border-[#c8a96e]/30 px-5 py-2 sm:py-3 hover:bg-[#c8a96e]/10">
                  <List size={12} /> {showTable ? "Summary" : "Schedule"}
                </button>

                <div key={activePlan} className="w-full flex flex-col items-center">
                  {!showTable ? (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full px-4">
                      {slide.pricingInfo?.plans[activePlan].breakdown.map((item, i) => (
                        <div key={i} className="interactive-card p-4 sm:p-6 flex flex-col items-center text-center">
                          <h4 className="serif-font text-3xl sm:text-4xl md:text-5xl text-[#c8a96e] mb-1">{item.percentage}%</h4>
                          <p className="text-sm sm:text-lg text-[#ede0c4] mb-2 font-medium">{new Intl.NumberFormat('en-AE').format((propertyValue * item.percentage) / 100)}</p>
                          <p className="text-[0.45rem] sm:text-[0.55rem] tracking-[0.15em] uppercase text-[#c8a96e] mb-1">{item.label}</p>
                          <p className="text-[0.55rem] text-[#ede0c4]/50 font-light">{item.milestone}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="w-full border border-[#c8a96e]/20 bg-[#080a06]/80 rounded-sm overflow-hidden">
                      <div className="max-h-[300px] overflow-y-auto no-scrollbar overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[500px]">
                          <thead className="bg-[#1e2019] sticky top-0 z-10">
                            <tr>
                              <th className="py-3 px-4 text-[0.45rem] sm:text-[0.55rem] tracking-[0.2em] uppercase text-[#c8a96e] border-b border-[#c8a96e]/20">Date</th>
                              <th className="py-3 px-4 text-[0.45rem] sm:text-[0.55rem] tracking-[0.2em] uppercase text-[#c8a96e] border-b border-[#c8a96e]/20 text-right">%</th>
                              <th className="py-3 px-4 text-[0.45rem] sm:text-[0.55rem] tracking-[0.2em] uppercase text-[#c8a96e] border-b border-[#c8a96e]/20 text-right">AED</th>
                            </tr>
                          </thead>
                          <tbody>
                            {slide.pricingInfo?.plans[activePlan].schedule.map((row, idx) => (
                              <tr key={idx} className="border-b border-[#1e2019] hover:bg-[#c8a96e]/5">
                                <td className="py-3 px-4 text-[0.6rem] text-[#ede0c4]">
                                  <div className="flex items-center gap-2">
                                    {row.d} {row.yearMarker && <span className="text-[0.4rem] bg-[#c8a96e] text-[#080a06] px-1 rounded-sm uppercase font-bold">{row.yearMarker}</span>}
                                  </div>
                                </td>
                                <td className="py-3 px-4 text-[0.7rem] text-[#ede0c4] text-right">{row.p}%</td>
                                <td className="py-3 px-4 text-[0.7rem] text-[#ede0c4] text-right font-medium">{new Intl.NumberFormat('en-AE').format((propertyValue * row.p) / 100)}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Inventory Slide */}
            {slide.id === 'inventory_matrix' && (
              <div className="w-full mt-6 px-2 overflow-x-auto no-scrollbar">
                <div className="min-w-[600px] border border-[#c8a96e]/30 bg-[#080a06]/80 rounded-sm">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-[#1e2019] border-b border-[#c8a96e]/50">
                      <tr>
                        <th className="py-4 px-5 text-[0.5rem] tracking-[0.2em] uppercase text-[#c8a96e]">Type</th>
                        <th className="py-4 px-5 text-[0.5rem] tracking-[0.2em] uppercase text-[#c8a96e] text-right">Price (AED)</th>
                        <th className="py-4 px-5 text-[0.5rem] tracking-[0.2em] uppercase text-[#c8a96e] text-right">BUA</th>
                      </tr>
                    </thead>
                    <tbody>
                      {slide.matrix?.map((row, idx) => (
                        <tr key={idx} className="border-b border-[#1e2019] group">
                          <td className="py-4 px-5 text-[0.65rem] sm:text-xs text-[#ede0c4] whitespace-nowrap">{row.type}</td>
                          <td className="py-4 px-5 text-sm sm:text-base text-[#c8a96e] text-right serif-font">{row.priceRange}</td>
                          <td className="py-4 px-5 text-[0.6rem] sm:text-[0.7rem] text-[#ede0c4]/60 text-right">{row.bua}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Comparison Slide */}
            {slide.id === 'comparison' && (
              <div className="w-full mt-6 flex flex-col items-center">
                <div className="w-full border border-[#c8a96e]/30 bg-[#080a06]/80 rounded-sm overflow-x-auto no-scrollbar">
                  <table className="w-full text-left border-collapse min-w-[500px]">
                    <thead className="bg-[#1e2019] border-b border-[#c8a96e]/50">
                      <tr>
                        <th className="py-4 px-5 text-[0.5rem] tracking-[0.2em] uppercase text-[#c8a96e]">Community</th>
                        <th className="py-4 px-5 text-[0.5rem] tracking-[0.2em] uppercase text-[#c8a96e] text-right">Avg. PSF</th>
                      </tr>
                    </thead>
                    <tbody>
                      {slide.comparisonMatrix?.map((row, idx) => (
                        <tr key={idx} className={`border-b border-[#1e2019] ${row.highlighted ? 'bg-[#c8a96e]/10' : 'opacity-60'}`}>
                          <td className="py-4 px-5 text-[0.65rem] sm:text-xs font-semibold tracking-wider">{row.community}</td>
                          <td className={`py-4 px-5 text-lg sm:text-xl text-right serif-font ${row.highlighted ? 'text-[#c8a96e]' : 'text-[#ede0c4]'}`}>{row.psf}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-[0.45rem] tracking-wider uppercase text-[#6a6b57]">{slide.footer}</p>
              </div>
            )}

            {/* Collections Slide */}
            {slide.id === 'collections' && (
              <div className="w-full mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto px-4">
                {['oasis', 'dunes'].map((villa) => (
                  <div 
                    key={villa}
                    onClick={() => setActiveVilla(villa)}
                    className={`p-6 sm:p-8 text-left rounded-sm border transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[280px] sm:min-h-[350px]
                      ${activeVilla === villa ? 'border-[#c8a96e] bg-[#c8a96e]/10 scale-[1.02] shadow-xl' : 'border-[#1e2019] bg-black/40 opacity-50 grayscale'}`}
                  >
                    <div>
                      <h3 className="serif-font text-3xl sm:text-5xl text-[#ede0c4] mb-1 capitalize">The {villa}</h3>
                      <p className="text-[0.45rem] sm:text-[0.55rem] tracking-[0.3em] text-[#c8a96e] uppercase mb-4 sm:mb-8 font-semibold">{villa === 'oasis' ? 'Heart of Community' : 'Comfort & Active'}</p>
                      
                      {activeVilla === villa && (
                        <div 
                          onClick={(e) => { e.stopPropagation(); openDetailsPage(villa); }}
                          className="inline-flex items-center gap-2 text-[0.55rem] sm:text-[0.65rem] tracking-[0.2em] uppercase text-[#c8a96e] hover:text-white transition-colors font-bold mt-4"
                        >
                          Explore Specs <ArrowRight size={12} />
                        </div>
                      )}
                    </div>
                    
                    <ul className="text-[0.6rem] sm:text-[0.7rem] text-[#ede0c4]/70 space-y-2 mt-auto">
                      <li className="flex items-center gap-2"><Check size={8} className="text-[#c8a96e]"/> {villa === 'oasis' ? 'Centrally Located' : 'Family Oriented'}</li>
                      <li className="flex items-center gap-2"><Check size={8} className="text-[#c8a96e]"/> {villa === 'oasis' ? 'Beachfront Access' : 'Green Walkways'}</li>
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Advisory Slide */}
            {slide.id === 'advisory' && (
              <div className="w-full flex flex-col items-center px-4">
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 mb-6 rounded-full border border-[#c8a96e]/30 p-1 bg-[#c8a96e]/5">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#080a06]">
                    <img 
                      src={PROFILE_PIC} 
                      alt={slide.advisor?.name} 
                      className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all"
                    />
                  </div>
                </div>
                <h4 className="serif-font text-2xl sm:text-4xl text-[#ede0c4] mb-1">{slide.advisor?.name}</h4>
                <p className="text-[0.5rem] sm:text-[0.6rem] tracking-[0.3em] uppercase text-[#c8a96e] mb-8 sm:mb-12">{slide.advisor?.designation}</p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 w-full max-w-md">
                  <a 
                    href={WA_LINK} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 flex items-center justify-center gap-3 bg-[#c8a96e] text-[#080a06] py-4 text-[0.55rem] sm:text-[0.65rem] tracking-[0.2em] uppercase font-bold hover:bg-[#e2c98a] transition-all rounded-sm"
                  >
                    <MessageCircle size={16} fill="currentColor" /> WhatsApp
                  </a>
                  <a 
                    href={`tel:${slide.advisor?.phone.replace(/\s+/g, '')}`}
                    className="flex-1 flex items-center justify-center gap-3 border border-[#c8a96e]/30 px-6 py-4 text-[0.55rem] sm:text-[0.65rem] tracking-[0.2em] uppercase text-[#ede0c4] bg-[#c8a96e]/5 rounded-sm"
                  >
                    <Phone size={14} /> Call Advisor
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  // --- RENDER COMPONENT: DETAILS PAGE ---
  const renderDetailsPage = () => {
    const isOasis = activeVilla === 'oasis';
    const features = [
      { icon: <Home size={18} />, title: "4 Bedrooms", sub: "Attached Baths" },
      { icon: <Layers size={18} />, title: "G+2+Roof", sub: "Multi-Level" },
      { icon: <Compass size={18} />, title: "Elevator", sub: "Standard" },
      { icon: <Cpu size={18} />, title: "Smart Home", sub: "Integrated" }
    ];

    return (
      <div className="absolute inset-0 w-full h-full bg-[#080a06] z-[100] flex flex-col animate-fade-in px-5 sm:px-12 pt-24 sm:pt-28 pb-12 overflow-y-auto">
        <div className="fixed top-0 left-0 w-full px-5 sm:px-8 py-6 z-[110] flex justify-between items-center bg-[#080a06]/60 backdrop-blur-xl border-b border-[#c8a96e]/10">
          <button onClick={() => setView('presentation')} className="flex items-center gap-2 text-[0.55rem] sm:text-[0.65rem] tracking-[0.2em] uppercase text-[#c8a96e] hover:text-white transition-colors">
            <ArrowLeft size={14} /> Overview
          </button>
          <div className="serif-font text-lg sm:text-xl tracking-[0.1em] text-[#6a6b57] uppercase font-light">Binghatti</div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 max-w-6xl mx-auto w-full items-center mt-4">
          <div className="text-center lg:text-left w-full lg:flex-1 px-4 sm:px-0">
            <p className="text-[0.5rem] sm:text-[0.55rem] tracking-[0.4em] uppercase text-[#c8a96e] mb-3 sm:mb-4 font-semibold">Mid Unit Villa Specifications</p>
            <h1 className="serif-font text-5xl sm:text-7xl lg:text-8xl gold-shimmer-text mb-3 sm:mb-4">The {activeVilla}</h1>
            <h2 className="text-xs sm:text-sm lg:text-base tracking-[0.15em] uppercase text-[#e2c98a] opacity-90 mb-6 sm:mb-8 border-l-0 lg:border-l-[1px] border-[#c8a96e] lg:pl-6 italic font-light">Inspired by an Evergreen Spirit</h2>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
              {["Double-Height", "Drivers & Maids", "Storage Room"].map((tag, i) => (
                <div key={i} className="border border-[#c8a96e]/30 px-3 py-1.5 text-[0.4rem] sm:text-[0.45rem] tracking-[0.1em] uppercase text-[#ede0c4] bg-[#c8a96e]/5">{tag}</div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full lg:flex-1 max-w-xl">
            {features.map((feature, idx) => (
              <div key={idx} className="border border-[#1e2019] bg-white/[0.02] p-5 sm:p-8 flex flex-col items-center lg:items-start text-center lg:text-left group transition-all">
                <div className="text-[#c8a96e] mb-4 opacity-70 group-hover:opacity-100">{feature.icon}</div>
                <h4 className="serif-font text-xl sm:text-2xl text-[#ede0c4] mb-1">{feature.title}</h4>
                <p className="text-[0.45rem] sm:text-[0.55rem] tracking-[0.2em] uppercase text-[#6a6b57]">{feature.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ backgroundColor: "#080a06", color: "#ede0c4", fontFamily: "'Montserrat', sans-serif", fontWeight: 300, height: "100vh", width: "100vw", overflow: "hidden", position: "relative", touchAction: "manipulation" }}>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Montserrat:wght@100;300;400;500;600;700&display=swap" rel="stylesheet" />
      <style>{`
        :root { --gold: #c8a96e; --gold-light: #e2c98a; --cream: #ede0c4; --border: rgba(200,169,110,0.15); }
        .serif-font { font-family: 'Cormorant Garamond', serif; }
        @keyframes shimmer { 0% { background-position: -300% center; } 100% { background-position: 300% center; } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .gold-shimmer-text { background: linear-gradient(90deg, #ede0c4 0%, #c8a96e 20%, #fff 40%, #e2c98a 60%, #c8a96e 80%, #ede0c4 100%); background-size: 300% auto; -webkit-background-clip: text; background-clip: text; color: transparent; animation: shimmer 8s linear infinite; }
        .bg-glow-1 { position: absolute; width: min(800px, 150vw); height: min(800px, 150vw); border-radius: 50%; background: radial-gradient(circle, var(--gold) 0%, transparent 70%); top: 50%; left: 50%; transform: translate(-50%, -50%); opacity: 0.1; filter: blur(min(120px, 20vw)); pointer-events: none; z-index: 0; }
        .slide-transition { transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1); }
        .nav-btn { transition: all 0.3s; background: rgba(8,10,6,0.5); backdrop-filter: blur(8px); pointer-events: auto; }
        .nav-btn:active { transform: scale(0.9); background: var(--gold); color: #080a06; }
        .interactive-card { border: 1px solid var(--border); background: rgba(255,255,255,0.03); transition: all 0.5s ease-out; backdrop-filter: blur(12px); box-shadow: inset 0 0 20px rgba(200,169,110,0.05); }
        .interactive-card:hover { border-color: var(--gold); background: rgba(200, 169, 110, 0.08); box-shadow: 0 10px 40px -10px rgba(200, 169, 110, 0.2); }
        .hide-spin-button { -moz-appearance: textfield; }
        .hide-spin-button::-webkit-inner-spin-button, .hide-spin-button::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        .interactive-watermark-bar {
          position: fixed; bottom: 0; left: 0; right: 0; height: 42px; z-index: 1000;
          display: flex; align-items: center; justify-content: center;
          background: linear-gradient(to top, #080a06 80%, transparent);
          border-top: 1px solid rgba(200, 169, 110, 0.1);
          backdrop-filter: blur(6px); transition: all 0.3s ease; text-decoration: none !important;
        }
        .watermark-content {
          white-space: nowrap; display: flex; align-items: center;
          gap: 0.5rem; color: rgba(200, 169, 110, 0.8);
        }
        .watermark-label {
          font-family: 'Montserrat', sans-serif; font-weight: 300;
          font-size: 0.45rem; sm:font-size: 0.55rem; letter-spacing: 0.35em; sm:letter-spacing: 0.5em; text-transform: uppercase;
        }
      `}</style>

      {/* FIXED BACKGROUND ELEMENT */}
      <div className="bg-glow-1" />

      {/* HEADER */}
      {view === 'presentation' && (
        <header className="fixed top-0 left-0 w-full px-5 sm:px-8 py-5 sm:py-6 z-50 flex justify-between items-center bg-[#080a06]/60 backdrop-blur-xl border-b border-[#c8a96e]/10">
          <div className="serif-font text-base sm:text-xl tracking-[0.1em] text-[#c8a96e] uppercase font-light">Binghatti</div>
          
          <div className="flex gap-1 sm:gap-3 px-2">
            {slides.map((_, i) => (
              <div key={i} className={`h-[1px] transition-all duration-500 ${currentSlide === i ? 'w-4 sm:w-10 bg-[#c8a96e]' : 'w-1 sm:w-3 bg-[#c8a96e]/20'}`} />
            ))}
          </div>

          <div className="flex gap-2 sm:gap-4">
            <button onClick={handlePrev} className="nav-btn w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-[#c8a96e] border border-[#c8a96e]/20">
              <ChevronLeft size={16} />
            </button>
            <button onClick={handleNext} className="nav-btn w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-[#c8a96e] border border-[#c8a96e]/20">
              <ChevronRight size={16} />
            </button>
          </div>
        </header>
      )}

      {/* MAIN VIEW CONTROLLER */}
      {view === 'presentation' ? renderPresentation() : renderDetailsPage()}

      {/* SLIDE COUNTER (ADJUSTED FOR SMALLER WATERMARK) */}
      {view === 'presentation' && (
        <div className="fixed bottom-12 left-0 w-full flex justify-center z-40 pointer-events-none mb-1">
          <div className="text-[0.4rem] sm:text-[0.5rem] tracking-[0.4em] uppercase text-[#6a6b57] bg-[#080a06]/40 backdrop-blur-md px-3 py-0.5 rounded-full">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      )}

      {/* WATERMARK STRIP (REDUCED HEIGHT AND FONT) */}
      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="interactive-watermark-bar">
        <div className="watermark-content">
          <span className="watermark-label">Exclusively by {PERSONAL_TAG}</span>
          <MessageCircle size={12} className="text-[#c8a96e]" />
          <ExternalLink size={8} className="opacity-40" />
        </div>
      </a>

      {/* MODAL */}
      {selectedImage && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[#080a06]/95 backdrop-blur-md p-4 animate-fade-in" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-6 right-6 text-[#c8a96e] p-2 bg-[#1e2019]/50 rounded-full border border-[#c8a96e]/20" onClick={() => setSelectedImage(null)}><X size={24} /></button>
          <img src={selectedImage} alt="Highlight" className="max-w-full max-h-[80vh] rounded-sm border border-[#c8a96e]/30 shadow-2xl object-contain" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
};

export default App;
