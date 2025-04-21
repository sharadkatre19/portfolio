export default function Testimonials() {
    const testimonials = [
      {
        id: 1,
        name: "Jane Doe",
        position: "CTO at TechCorp",
        content: "Exceptional full-stack development skills and great attention to detail."
      },
      // Add more testimonials or fetch from Firestore
    ];
  
    return (
      <section className="my-16">
        <h2 className="text-3xl font-bold mb-8">What People Say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="p-6 border rounded-lg">
              <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  