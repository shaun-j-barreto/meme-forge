import MemeCard from "@/components/meme_card/memecard";
import React from "react";
import { ImagesIcon } from "lucide-react";
import { BackgroundGradient } from "@/styles";

const mockMemePosts = [
  {
    postId: 1,
    upperText: "When you fix a bug at 3 AM",
    bottomText: "But break everything else 😂",
    imageUrl: "https://picsum.photos/600/400?random=1",
    author: {
      userId: 101,
      username: "john_doe",
      profilePicUrl: "https://i.pravatar.cc/100?img=12",
    },
    createdAt: "2025-08-18T10:30:00Z",
    description: "This meme perfectly describes my life as a dev.",
    tags: ["coding", "debugging", "relatable", "devlife"],
    reactions: {
      likeCount: 124,
      dislikeCount: 5,
      laughCount: 87,
      heartCount: 45,
    },
    comments: [
      {
        commentId: 1001,
        userId: 201,
        username: "jane_dev",
        profilePicUrl: "https://i.pravatar.cc/100?img=22",
        text: "Haha this is too real 😆",
        createdAt: "2025-08-18T11:00:00Z",
      },
      {
        commentId: 1002,
        userId: 202,
        username: "meme_master",
        profilePicUrl: "https://i.pravatar.cc/100?img=33",
        text: "Bro this happened to me yesterday!",
        createdAt: "2025-08-18T11:15:00Z",
      },
    ],
  },
  {
    postId: 2,
    upperText: "Frontend devs be like",
    bottomText: "It works on my machine 🚀",
    imageUrl: "https://picsum.photos/600/400?random=2",
    author: {
      userId: 102,
      username: "alice_codes",
      profilePicUrl: "https://i.pravatar.cc/100?img=45",
    },
    createdAt: "2025-08-17T18:45:00Z",
    description: "Classic frontend struggles 😂",
    tags: ["frontend", "bugs", "devlife"],
    reactions: {
      likeCount: 89,
      dislikeCount: 2,
      laughCount: 65,
      heartCount: 32,
    },
    comments: [
      {
        commentId: 1003,
        userId: 203,
        username: "mark42",
        profilePicUrl: "https://i.pravatar.cc/100?img=19",
        text: "Happens every time lol",
        createdAt: "2025-08-17T19:00:00Z",
      },
    ],
  },
  {
    postId: 3,
    upperText: "Backend devs after fixing API",
    bottomText: "Now it’s the frontend’s problem 🤷‍♂️",
    imageUrl: "https://picsum.photos/600/400?random=3",
    author: {
      userId: 103,
      username: "mike_backend",
      profilePicUrl: "https://i.pravatar.cc/100?img=29",
    },
    createdAt: "2025-08-16T14:20:00Z",
    description: "API done, not my issue anymore 😂",
    tags: ["backend", "api", "bugs"],
    reactions: {
      likeCount: 150,
      dislikeCount: 5,
      laughCount: 100,
      heartCount: 60,
    },
    comments: [],
  },
  {
    postId: 4,
    upperText: "Me writing regex",
    bottomText: "I have no idea what I’m doing 🐒",
    imageUrl: "https://picsum.photos/600/400?random=4",
    author: {
      userId: 104,
      username: "regex_wizard",
      profilePicUrl: "https://i.pravatar.cc/100?img=13",
    },
    createdAt: "2025-08-15T09:10:00Z",
    description: "Regex = black magic ✨",
    tags: ["regex", "coding", "struggles"],
    reactions: {
      likeCount: 200,
      dislikeCount: 5,
      laughCount: 180,
      heartCount: 75,
    },
    comments: [
      {
        commentId: 1004,
        userId: 204,
        username: "susan",
        profilePicUrl: "https://i.pravatar.cc/100?img=7",
        text: "Story of my life 😂",
        createdAt: "2025-08-15T09:30:00Z",
      },
    ],
  },
  {
    postId: 5,
    upperText: "When you deploy to production",
    bottomText: "And it actually works 🎉",
    imageUrl: "https://picsum.photos/600/400?random=5",
    author: {
      userId: 105,
      username: "deploy_god",
      profilePicUrl: "https://i.pravatar.cc/100?img=25",
    },
    createdAt: "2025-08-14T22:00:00Z",
    description: "Miracles do happen sometimes 🙏",
    tags: ["deployment", "success", "devlife"],
    reactions: {
      likeCount: 300,
      dislikeCount: 5,
      laughCount: 150,
      heartCount: 220,
    },
    comments: [],
  },
  {
    postId: 6,
    upperText: "When Git merge conflicts hit",
    bottomText: "I’m out 💀",
    imageUrl: "https://picsum.photos/600/400?random=6",
    author: {
      userId: 106,
      username: "git_sufferer",
      profilePicUrl: "https://i.pravatar.cc/100?img=39",
    },
    createdAt: "2025-08-13T16:50:00Z",
    description: "Why is this my daily struggle 😭",
    tags: ["git", "mergeconflict", "struggles"],
    reactions: {
      likeCount: 110,
      dislikeCount: 5,
      laughCount: 70,
      heartCount: 55,
    },
    comments: [],
  },
  {
    postId: 7,
    upperText: "When you see a junior write 100 lines",
    bottomText: "For something that takes 5 😂",
    imageUrl: "https://picsum.photos/600/400?random=7",
    author: {
      userId: 107,
      username: "senior_dev",
      profilePicUrl: "https://i.pravatar.cc/100?img=8",
    },
    createdAt: "2025-08-12T08:15:00Z",
    description: "We’ve all been there 😅",
    tags: ["junior", "senior", "code"],
    reactions: {
      likeCount: 95,
      dislikeCount: 5,
      laughCount: 80,
      heartCount: 40,
    },
    comments: [],
  },
  {
    postId: 8,
    upperText: "StackOverflow down",
    bottomText: "Now we’re doomed 😭",
    imageUrl: "https://picsum.photos/600/400?random=8",
    author: {
      userId: 108,
      username: "stackoverflow_addict",
      profilePicUrl: "https://i.pravatar.cc/100?img=10",
    },
    createdAt: "2025-08-11T20:00:00Z",
    description: "How will I survive without it 😱",
    tags: ["stackoverflow", "coding", "panic"],
    reactions: {
      likeCount: 400,
      dislikeCount: 5,
      laughCount: 300,
      heartCount: 150,
    },
    comments: [],
  },
  {
    postId: 9,
    upperText: "Dark mode ON",
    bottomText: "Now I’m 200% more productive 🌙",
    imageUrl: "https://picsum.photos/600/400?random=9",
    author: {
      userId: 109,
      username: "night_coder",
      profilePicUrl: "https://i.pravatar.cc/100?img=56",
    },
    createdAt: "2025-08-10T12:45:00Z",
    description: "Dark mode supremacy! 🖤",
    tags: ["darkmode", "coding", "theme"],
    reactions: {
      likeCount: 210,
      dislikeCount: 5,
      laughCount: 90,
      heartCount: 180,
    },
    comments: [],
  },
  {
    postId: 10,
    upperText: "When interviewer asks DSA",
    bottomText: "And you’ve only been using ChatGPT 🤖",
    imageUrl: "https://picsum.photos/600/400?random=10",
    author: {
      userId: 110,
      username: "interview_panic",
      profilePicUrl: "https://i.pravatar.cc/100?img=61",
    },
    createdAt: "2025-08-09T15:10:00Z",
    description: "Bro just ask about React pls 🥲",
    tags: ["interview", "dsa", "struggles"],
    reactions: {
      likeCount: 180,
      dislikeCount: 5,
      laughCount: 120,
      heartCount: 90,
    },
    comments: [],
  },
];
const UserMemeSection = () => {
  return (
    <>
      <section className="user-memes-section bg-background-two/50 mt-4 col-span-2 border-1 border-background-border">
        <div className="flex flex-row items-center gap-3 p-4">
          <div className={`p-2 rounded-full w-fit ${BackgroundGradient}`}>
            <ImagesIcon className="text-text-color-one" />
          </div>
          <h1 className="text-2xl font-bold text-text-color-one">All Posts</h1>
        </div>
        <MemeCard memedata={mockMemePosts} page="Profile" />
      </section>
    </>
  );
};

export default UserMemeSection;
