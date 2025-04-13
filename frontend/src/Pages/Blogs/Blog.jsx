import React from 'react';

const BlogPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      {/* Page Title */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900">Mental Health Awareness Blog</h1>
        <p className="text-lg text-gray-600 mt-2">Insights, Tips, and Stories for a Healthier Mind</p>
      </header>

      {/* Blog Posts */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Blog Post 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            className="w-full h-64 object-cover"
            src="/src/assets/Top-5-Tips-To-Improve-Your-Mental-Health-In-Busy-Lifestyles-7-1024x536-1.jpg"
            alt="Blog 1"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-blue-900">How to Manage Anxiety in Daily Life</h2>
            <p className="text-gray-600 mt-2">
              Anxiety is a common issue that many people struggle with. Learn practical tips and techniques to manage anxiety and feel more grounded...
            </p>
            <a
              href="#"
              className="text-blue-500 mt-4 inline-block hover:underline"
            >
              Read More
            </a>
          </div>
        </div>

        {/* Blog Post 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            className="w-full h-64 object-cover"
            src="/src/assets/The-Impact-of-Social-Media-on-Mental-Health.webp"
            alt="Blog 2"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-blue-900">Self-Care Tips for Mental Well-being</h2>
            <p className="text-gray-600 mt-2">
              Taking care of yourself isn't selfish—it's necessary! Here are some simple and effective self-care tips to improve your mental health...
            </p>
            <a
              href="#"
              className="text-blue-500 mt-4 inline-block hover:underline"
            >
              Read More
            </a>
          </div>
        </div>

        {/* Blog Post 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            className="w-full h-64 object-cover"
            src="/src/assets/7059db5e341b0b904db142e9b6222573d8721efd-1600x900.jpg"
            alt="Blog 3"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-blue-900">Mindfulness Practices to Improve Mental Health</h2>
            <p className="text-gray-600 mt-2">
              Mindfulness can significantly reduce stress and improve mental clarity. Discover different mindfulness practices and how to integrate them into your life...
            </p>
            <a
              href="#"
              className="text-blue-500 mt-4 inline-block hover:underline"
            >
              Read More
            </a>
          </div>
        </div>

        {/* Blog Post 4 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            className="w-full h-64 object-cover"
            src="/src/assets/Blog-2-Image-Understanding-the-Deep-Connection-Between-HIV-and-Mental-Health.jpeg"
            alt="Blog 4"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-blue-900">Overcoming Depression: Steps to Recovery</h2>
            <p className="text-gray-600 mt-2">
              Depression can feel overwhelming, but there are steps you can take to begin your journey toward recovery. Learn actionable steps to overcome depression...
            </p>
            <a
              href="#"
              className="text-blue-500 mt-4 inline-block hover:underline"
            >
              Read More
            </a>
          </div>
        </div>

        {/* Blog Post 5 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            className="w-full h-64 object-cover"
            src="/src/assets/training.jpg.webp"
            alt="Blog 5"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-blue-900">Building Healthy Relationships for Better Mental Health</h2>
            <p className="text-gray-600 mt-2">
              Healthy relationships are key to emotional well-being. Learn tips to build strong, supportive relationships and maintain mental health...
            </p>
            <a
              href="#"
              className="text-blue-500 mt-4 inline-block hover:underline"
            >
              Read More
            </a>
          </div>
        </div>

        {/* Blog Post 6 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            className="w-full h-64 object-cover"
            src="https://via.placeholder.com/600x400/0c96f9/ffffff?text=Stress+Management"
            alt="Blog 6"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-blue-900">Effective Stress Management Techniques</h2>
            <p className="text-gray-600 mt-2">
              Stress is a part of life, but it doesn’t have to control you. Learn how to manage stress effectively with these proven techniques...
            </p>
            <a
              href="#"
              className="text-blue-500 mt-4 inline-block hover:underline"
            >
              Read More
            </a>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-12 text-center">
        <button className="bg-blue-900 text-white py-2 px-6 rounded-lg hover:bg-blue-800 transition-all">
          Load More Articles
        </button>
      </div>
    </div>
  );
};

export default BlogPage;
