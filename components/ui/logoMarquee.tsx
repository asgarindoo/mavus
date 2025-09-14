import Image from "next/image";

const logos = [
  "/mavus_logo.png",
  "/mavus_logo.png",
  "/mavus_logo.png",
  "/mavus_logo.png",
  "/mavus_logo.png",
  "/mavus_logo.png",
  "/mavus_logo.png",
];

export default function LogoMarquee() {
  return (
    <div className="w-full overflow-hidden py-8 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <div className="flex animate-marquee whitespace-nowrap">
        {logos.map((logo, i) => (
          <div key={i} className="mx-12 flex-shrink-0">
            <Image
              src={logo}
              alt={`Logo ${i + 1}`}
              width={120}
              height={60}
              className="h-20 w-auto object-contain transition"
              draggable="false"
            />
          </div>
        ))}
        {/* duplikat biar looping mulus */}
        {logos.map((logo, i) => (
          <div key={`dup-${i}`} className="mx-12 flex-shrink-0">
            <Image
              src={logo}
              alt={`Logo duplicate ${i + 1}`}
              width={120}
              height={60}
              className="h-20 w-auto object-contain transition"
              draggable="false"
            />
          </div>
        ))}
      </div>
    </div>
  );
}