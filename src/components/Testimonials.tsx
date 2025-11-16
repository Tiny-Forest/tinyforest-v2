import { Card } from "@/components/ui/card";

const testimonials = [
  {
    quote: "The main reason is my desire to move away from city life and come to this kind of lifestyle. I have lived in many cities and many countries. Even though I have lived in big cities around the world, I wanted a life like this, and that is the reason I bought land here",
    name: "Ravichandran K",
    image: "https://framerusercontent.com/images/NE7cyrEYykLrdoNXikJHN2wA9E.jpeg?width=295&height=413"
  },
  {
    quote: "I've been with Tiny Forest Archampatti since 2021, and the growth here is unbelievable. My land has nearly 60 varieties of fruit and medicinal trees, mango, jamun, sapota, jackfruit, guava, and many more. The farm uses modern drip irrigation fully controlled through a mobile app. Truly, Tiny Forest is one of the best farmland projects in Tamil Nadu, and I am proud to own a land here.",
    name: "Arul Mohan",
    image: "https://framerusercontent.com/images/D2ZZz9vIQzECt1ucg0Tvmauww.jpg?width=2237&height=2610"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Testimonials
          </h2>
          <p className="text-xl text-muted-foreground">Hear from our clients</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 bg-card border-border space-y-6 hover:shadow-xl transition-shadow">
              <p className="text-foreground/80 leading-relaxed text-lg italic">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <p className="font-semibold text-foreground text-lg">{testimonial.name}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
