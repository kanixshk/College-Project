import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      title: "The Journey of Spice Fusion",
      date: "March 15, 2025",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1174&q=80",
      content: `As the founder of Spice Fusion, my culinary journey began in my grandmother's kitchen in Mumbai. 
      Growing up watching her blend spices and create magic with simple ingredients inspired me to pursue my 
      passion for cooking. After graduating from the Culinary Institute of America and working in 
      Michelin-starred restaurants across Europe and Asia, I returned to India with a dream to create 
      something unique.

      Spice Fusion was born from the idea of bringing together the best of Indian, Chinese, and Continental 
      cuisines while maintaining the authenticity of each. Our first restaurant opened in Mumbai in 2010, 
      and the overwhelming response from our guests encouraged us to expand to other major cities.

      Today, we have successful branches in Mumbai, Delhi, and Bangalore, each maintaining our high 
      standards of quality while adapting to local tastes and preferences. Our team of talented chefs 
      comes from diverse culinary backgrounds, bringing their expertise and creativity to our kitchens.`
    },
    {
      title: "Our Culinary Philosophy",
      date: "March 10, 2025",
      image: "https://images.unsplash.com/photo-1547573854-74d2a71d0826?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      content: `At Spice Fusion, we believe that great food comes from great ingredients and passionate 
      people. We source our ingredients from local farmers and suppliers who share our commitment to 
      quality and sustainability. Our spices are carefully selected and blended in-house to create our 
      signature flavors.

      Innovation is at the heart of what we do. While we respect traditional recipes, we're not afraid 
      to experiment and create new fusion dishes that surprise and delight our guests. Our menu is a 
      testament to this philosophy, featuring both classic dishes and innovative creations.

      We're also committed to giving back to the community. Through our culinary training program, 
      we provide opportunities for aspiring chefs to learn and grow in the industry. Many of our 
      successful graduates now work in our restaurants or have started their own culinary ventures.`
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-10 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Story</h1>

        {blogPosts.map((post, index) => (
          <article key={index} className="mb-16 bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-8">
              <h2 className="text-3xl font-semibold mb-4">{post.title}</h2>
              <p className="text-gray-500 mb-6">{post.date}</p>
              <div className="prose max-w-none">
                {post.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-gray-600 mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;