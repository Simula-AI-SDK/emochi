export function StatusBar() {
  return (
    <div className="flex items-center justify-between px-6 py-2">
      {/* Time */}
      <span className="text-base font-semibold">3:51</span>

      {/* Logo */}
      <div className="bg-[#C5A84D] px-4 py-1 rounded-full">
        <span className="text-black font-bold text-sm tracking-wide">talkie</span>
      </div>

      {/* Status Icons */}
      <div className="flex items-center gap-1">
        {/* Signal Bars */}
        <div className="flex items-end gap-0.5 h-3">
          <div className="w-1 h-1 bg-white rounded-sm" />
          <div className="w-1 h-1.5 bg-white rounded-sm" />
          <div className="w-1 h-2 bg-white rounded-sm" />
          <div className="w-1 h-3 bg-white rounded-sm" />
        </div>
        
        {/* WiFi Icon */}
        <svg className="w-4 h-4 ml-1" fill="white" viewBox="0 0 24 24">
          <path d="M12 18c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-5.4-4.4l1.4 1.4C9.1 14.1 10.5 13.5 12 13.5s2.9.6 4 1.5l1.4-1.4C15.8 12.3 14 11.5 12 11.5s-3.8.8-5.4 2.1zM3.8 10.8l1.4 1.4c1.8-1.8 4.2-2.7 6.8-2.7s5 1 6.8 2.7l1.4-1.4C17.9 8.5 15.1 7.5 12 7.5s-5.9 1-8.2 3.3z" />
        </svg>

        {/* Battery */}
        <div className="flex items-center ml-1">
          <div className="relative w-6 h-3 border border-white rounded-sm">
            <div className="absolute inset-0.5 right-1 bg-yellow-500 rounded-sm" style={{ width: '31%' }} />
          </div>
          <div className="w-0.5 h-1.5 bg-white rounded-r-sm -ml-px" />
          <span className="text-xs ml-0.5">31</span>
        </div>
      </div>
    </div>
  )
}
