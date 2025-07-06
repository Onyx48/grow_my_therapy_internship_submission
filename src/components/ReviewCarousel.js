// src/components/ReviewCarousel.js
"use client";

import ReviewCard from "./ReviewCard";

export default function ReviewCarousel() {
  const reviews = [
    {
      name: "Happy Client",
      content:
        "Ellie's compassionate approach truly made a difference in my life. I felt heard, understood, and finally found the peace I was searching for. Highly recommended for anyone seeking genuine guidance.",
    },
    {
      name: "Grateful Individual",
      content:
        "Through Ellie's wisdom and faith-based techniques, I was able to overcome long-standing anxieties. Her insights helped me reconnect with my true self and God's purpose for my life. A truly transformative experience!",
    },
    {
      name: "Satisfied Client",
      content:
        "I appreciate the safe and non-judgmental space Ellie provides. She helped me navigate through difficult emotions and past wounds, leading to significant personal growth. I feel much stronger and more hopeful.",
    },
    {
      name: "Another Happy Client",
      content:
        "Finding a therapist who integrates faith was important to me, and Ellie exceeded my expectations. Her Christ-centered framework brought so much clarity and healing to my relationships and overall well-being. Thank you!",
    },
    {
      name: "Transformed Life",
      content:
        "Ellie's guidance was invaluable in helping me understand spiritual confusion and find clarity. Her patient and empathetic style allowed me to explore deeply and discover truths that led to profound inner healing.",
    },
    {
      name: "Stronger Relationship",
      content:
        "As a couple, we found tremendous value in working with Ellie. She provided practical tools and spiritual insights that strengthened our bond and helped us communicate more effectively, rooted in faith.",
    },
  ];

  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex whitespace-nowrap space-x-8 animate-infinite-scroll py-4">
        {duplicatedReviews.map((review, index) => (
          <ReviewCard
            key={review.name + index}
            name={review.name}
            content={review.content}
          />
        ))}
      </div>
    </div>
  );
}
