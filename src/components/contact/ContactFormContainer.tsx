
import { useAnimateOnScroll } from '@/lib/animations';
import ContactForm from './ContactForm';
import ContactSidebar from './ContactSidebar';

const ContactFormContainer = () => {
  const { elementRef, isVisible } = useAnimateOnScroll(0.1);

  return (
    <section className="py-20 bg-genium-black-light" id="contact">
      <div 
        ref={elementRef}
        className={`container mx-auto px-4 sm:px-6 transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-5xl mx-auto">
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Column - Form */}
              <ContactForm />
              
              {/* Right Column - Decoration */}
              <ContactSidebar />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormContainer;
