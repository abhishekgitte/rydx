# RydX - Reading Speed & Comprehension Platform

A modern SaaS platform designed to help students improve their reading speed while maintaining comprehension, specifically tailored for competitive exam preparation (CAT, GMAT, IELTS, etc.).

## Features

- **Reading Speed Test**: Measure your current reading speed and comprehension with timed tests
- **Two Reading Modes**:
  - **Run Mode**: Whole article visible with word-by-word highlighting
  - **Flash Mode**: Bionic reading - one word at a time with bolded first syllables
- **Customizable Controls**: Adjust reading speed (50-500 WPM) and font size (12-32px)
- **Beautiful UI**: Modern, responsive design with smooth animations
- **Progress Tracking**: Visual progress indicators and performance metrics

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React Hooks** - Modern React patterns

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── about/          # About page
│   ├── practice/       # Reading practice page with both modes
│   ├── test/           # Reading speed test page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/
│   ├── Header.tsx      # Global navigation header
│   └── Footer.tsx      # Global footer
└── public/             # Static assets
```

## Usage

1. **Test Your Speed**: Visit `/test` to take a reading speed test with comprehension questions
2. **Practice Reading**: Visit `/practice` to use either Run mode or Flash mode
3. **Adjust Settings**: Use the sidebar controls to customize speed and font size
4. **Track Progress**: Monitor your reading progress with the progress bar

## Reading Modes Explained

### Run Mode
The entire article is displayed, and words are highlighted one by one at your selected speed. This mode helps you:
- Maintain context while reading
- Train your eyes to follow along
- Build reading rhythm

### Flash Mode
Words appear one at a time using bionic reading, where the first part of each word is bolded. This mode helps you:
- Process words faster
- Focus on key visual cues
- Improve word recognition speed

## Future Enhancements

- User accounts and progress tracking
- More practice articles and passages
- Exam-specific content (CAT, GMAT, IELTS)
- Analytics dashboard
- Social features and leaderboards
- Mobile app version

## License

MIT License - feel free to use this project for your own purposes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
