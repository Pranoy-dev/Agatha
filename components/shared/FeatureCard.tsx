import Link from "next/link";
import { FileText, PenTool, Search, Globe, Building2, Database, Star } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: "review" | "draft" | "research";
  href: string;
}

const iconMap = {
  review: FileText,
  draft: PenTool,
  research: Search,
};

export function FeatureCard({ title, description, icon, href }: FeatureCardProps) {
  const Icon = iconMap[icon];

  const renderVisual = () => {
    if (icon === "review") {
      // Document list visual
      const documents = [
        { name: "Beta_Solutions_Client_Contract_2022.docx", type: "word" },
        { name: "Acme_Corp_Agreement_2023.pdf", type: "pdf" },
        { name: "Gamma_Tech_Partnership_Agreement_2...", type: "pdf" },
        { name: "Delta_Industries_Service_Agreement_20...", type: "word" },
        { name: "Epsilon_Enterprises_NDA_2020.pdf", type: "pdf" },
        { name: "Zeta_Consulting_Engagement_Letter_20...", type: "word" },
        { name: "Theta_Healthcare_Patient_Agreement_20...", type: "word" },
      ];

      return (
        <div 
          className="mb-8 w-full overflow-hidden rounded-lg"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.03)',
            backdropFilter: 'blur(8px)',
            padding: '24px',
            borderRadius: '12px',
            height: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div 
            className="rounded-lg w-full"
            style={{
              backgroundColor: '#ffffff',
              padding: '16px',
              borderRadius: '8px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)'
            }}
          >
            <div 
              style={{
                fontSize: '13px',
                fontWeight: 500,
                color: 'var(--legora-text-primary)',
                marginBottom: '12px',
                fontFamily: 'var(--legora-font-body)'
              }}
            >
              Document
            </div>
            <div className="space-y-2">
              {documents.map((doc, idx) => (
                <div key={idx} className="flex items-center gap-2" style={{ fontSize: '11px', color: 'rgba(10, 10, 10, 0.7)', fontFamily: 'var(--legora-font-body)' }}>
                  <div 
                    style={{
                      width: '16px',
                      height: '16px',
                      backgroundColor: doc.type === 'word' ? '#2B579A' : '#DC143C',
                      borderRadius: '2px',
                      flexShrink: 0
                    }}
                  />
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{doc.name}</span>
                </div>
              ))}
              <div style={{ fontSize: '11px', color: 'rgba(10, 10, 10, 0.5)', marginTop: '8px', fontFamily: 'var(--legora-font-body)' }}>
                + 480 more
              </div>
            </div>
          </div>
        </div>
      );
    } else if (icon === "draft") {
      // Legora logo and Word icon
      return (
        <div 
          className="mb-8 w-full overflow-hidden rounded-lg flex items-center justify-center"
          style={{
            backgroundColor: 'rgba(59, 130, 246, 0.08)',
            backdropFilter: 'blur(8px)',
            padding: '40px 20px',
            height: '300px',
            borderRadius: '12px'
          }}
        >
          <div className="flex items-center gap-8">
            {/* Legora logo placeholder - star/gear icon */}
            <div 
              style={{
                width: '64px',
                height: '64px',
                backgroundColor: '#0a0a0a',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
              }}
            >
              <Star className="w-8 h-8" style={{ color: '#ffffff', fill: '#ffffff' }} />
            </div>
            {/* Word icon */}
            <div 
              style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                fontSize: '48px',
                fontWeight: 'bold',
                color: '#2B579A',
                fontFamily: 'Arial, sans-serif'
              }}
            >
              W
            </div>
          </div>
        </div>
      );
    } else {
      // Research deeper - dialog box
      return (
        <div 
          className="mb-8 w-full overflow-hidden rounded-lg flex items-end justify-end"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.02)',
            backdropFilter: 'blur(8px)',
            padding: '24px',
            height: '300px',
            borderRadius: '12px'
          }}
        >
          <div 
            className="rounded-lg"
            style={{
              backgroundColor: '#ffffff',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
              maxWidth: '300px',
              width: '100%'
            }}
          >
            <div 
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--legora-text-primary)',
                marginBottom: '16px',
                fontFamily: 'var(--legora-font-body)'
              }}
            >
              What would you like to do?
            </div>
            <div className="flex gap-1 mb-4" style={{ borderBottom: '1px solid rgba(10, 10, 10, 0.08)', paddingBottom: '12px' }}>
              <button 
                style={{
                  fontSize: '12px',
                  padding: '6px 10px',
                  backgroundColor: 'rgba(10, 10, 10, 0.08)',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontFamily: 'var(--legora-font-body)',
                  color: 'var(--legora-text-primary)',
                  fontWeight: 500
                }}
              >
                + Add sources
              </button>
              <button 
                style={{
                  fontSize: '12px',
                  padding: '6px 10px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontFamily: 'var(--legora-font-body)',
                  color: 'rgba(10, 10, 10, 0.6)'
                }}
              >
                ✨ Create
              </button>
              <button 
                style={{
                  fontSize: '12px',
                  padding: '6px 10px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontFamily: 'var(--legora-font-body)',
                  color: 'rgba(10, 10, 10, 0.6)'
                }}
              >
                ⇆ Workflows
              </button>
            </div>
            <div 
              style={{
                fontSize: '12px',
                fontWeight: 500,
                color: 'var(--legora-text-primary)',
                marginBottom: '8px',
                fontFamily: 'var(--legora-font-body)'
              }}
            >
              Sources
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2" style={{ fontSize: '12px', color: 'rgba(10, 10, 10, 0.7)', fontFamily: 'var(--legora-font-body)' }}>
                <Globe className="w-4 h-4" /> Web search
              </div>
              <div className="flex items-center gap-2" style={{ fontSize: '12px', color: 'rgba(10, 10, 10, 0.7)', fontFamily: 'var(--legora-font-body)' }}>
                <Building2 className="w-4 h-4" /> Legal search
              </div>
              <div className="flex items-center gap-2" style={{ fontSize: '12px', color: 'rgba(10, 10, 10, 0.7)', fontFamily: 'var(--legora-font-body)' }}>
                <Database className="w-4 h-4" /> Database search
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <Link href={href} className="group block" style={{ textAlign: 'left' }}>
      <div className="h-full transition-all hover:opacity-80">
        {renderVisual()}
        
        {/* Title - Large, bold, serif */}
        <h3 
          className="mb-4"
          style={{
            fontSize: '24px',
            fontWeight: 700,
            lineHeight: '26.4px',
            letterSpacing: '-0.24px',
            fontFamily: 'var(--legora-font-display)',
            color: 'var(--legora-text-primary)'
          }}
        >
          {title}
        </h3>
        
        {/* Description - Smaller, regular weight, sans-serif */}
        <p 
          className="leading-relaxed"
          style={{
            fontSize: '13px',
            fontWeight: 400,
            lineHeight: '20px',
            fontFamily: 'var(--legora-font-body)',
            color: 'rgba(10, 10, 10, 0.7)'
          }}
        >
          {description}
        </p>
      </div>
    </Link>
  );
}
