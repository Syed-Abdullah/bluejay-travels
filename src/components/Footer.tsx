export default function Footer() {
  return (
    <footer className="bg-transparent pt-32 pb-12 border-t border-white/60 relative z-10 glass-panel mt-12 rounded-t-[40px]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
               <img src="/logo.png" alt="Blue Jay Travels" className="h-10 w-auto" />
            </div>
            <div className="text-xs font-bold text-deep-blue/40 uppercase tracking-widest">
              EST. 1982 &bull; INDIA
            </div>
          </div>

          <div>
            <h4 className="font-bold text-deep-blue mb-6">Solutions</h4>
            <ul className="space-y-4">
              {['Employee Transportation', 'School Transportation', 'Bus & Car Rentals', 'Airport Transfers','Tours & Excursions'].map(item => (
                <li key={item}>
                  <a href="#solutions" className="text-sm text-deep-blue/70 hover:text-brand transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-deep-blue mb-6">Company</h4>
            <ul className="space-y-4">
              {[['About Us', '#about'], ['Fleet', '#fleet'], ['Safety Standards', '#technology'], ['Contact', '#contact']].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-sm text-deep-blue/70 hover:text-brand transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-deep-blue mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="text-sm text-deep-blue/70">
                bluejaytravelshyd@gmail.com
              </li>
              <li className="text-sm text-deep-blue/70">
                +91 9848042774
              </li>
              <li className="text-sm text-deep-blue/70 pt-4">
                B1-12/MIG, Huda Colony Road, Chanda Nagar, Hyderabad - 500050 Telangana
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/60 gap-4">
          <p className="text-sm text-deep-blue/50">
            &copy; {new Date().getFullYear()} Blue Jay Travels. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-deep-blue/50 hover:text-deep-blue transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-deep-blue/50 hover:text-deep-blue transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-deep-blue/50 hover:text-deep-blue transition-colors">ISO 9001:2015 Certified</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
