# AllAble - Accessibility Browser Extension

A comprehensive browser extension that brings accessibility tools directly into any webpage, providing assistive features for users with various disabilities.

## 🌟 Features

### 🔊 Voice Reader (TTS)
- Text-to-speech on selection or hover
- Voice commands integration
- Customizable speech speed and voice
- Full page reading capability

### 🤟 Sign Language & Subtitles
- Real-time sign language overlay with avatar
- Auto-generated subtitles for videos
- Live transcription capabilities
- Customizable display options

### 🖱️ Motor Assistance
- Voice-controlled mouse actions
- Large, accessible navigation buttons
- Enhanced keyboard navigation
- Eye-tracking integration ready

### 🧠 Cognitive Accessibility (Facile Mode)
- Content simplification with shorter sentences
- Visual aids and clear language
- Glossary explanations for complex terms
- Visual information cards

### ⚡ Quick Access Tools
- Image-to-text converter (OCR ready)
- Quick contact system
- Multi-modal alerts (visual, audio, vibration)
- Reading mode for better focus

### 📚 Learning Hub
- Bite-sized accessibility lessons
- Community forum access
- Skill-building modules
- Resource library

## 🚀 Installation

### For Development/Testing:

1. **Clone or download** this project
2. **Open Chrome** and navigate to `chrome://extensions/`
3. **Enable Developer mode** (toggle in top right)
4. **Click "Load unpacked"** and select the `members/public` folder
5. **Pin the extension** to your toolbar for easy access

### For Firefox:
1. Navigate to `about:debugging`
2. Click "This Firefox"
3. Click "Load Temporary Add-on"
4. Select the `manifest.json` file from `members/public`

## 🎯 How to Use

### Getting Started
1. **Click the AllAble icon** in your browser toolbar
2. **Enable desired features** using the popup settings
3. **Use keyboard shortcuts** for quick access:
   - `Ctrl+Shift+V` - Toggle Voice Reader
   - `Ctrl+Shift+S` - Toggle Sign Language
   - `Ctrl+Shift+M` - Toggle Motor Assistance
   - `Ctrl+Shift+F` - Toggle Facile Mode

### Voice Reader
- **Select text** on any webpage to hear it read aloud
- **Hover over elements** for automatic reading (with delay)
- **Right-click** and choose "Read Selected Text" or "Read Entire Page"
- **Adjust speed and voice** in the popup settings

### Sign Language Overlay
- **Enable in popup** to show sign language avatar
- **Works with videos** to provide live subtitles
- **Customizable position** and display options

### Motor Assistance
- **Voice commands**: Say "click button", "scroll down", "go back", etc.
- **Large buttons** appear for common navigation actions
- **Enhanced focus** indicators for better visibility
- **Keyboard navigation** improvements

### Facile Mode
- **Simplifies page content** with shorter sentences
- **Adds visual aids** to headings and links
- **Provides glossary** explanations for complex terms
- **Hides distracting** elements

### Quick Tools
- **Image-to-text**: Click the camera icon, then click any image
- **Emergency contact**: Quick access to important phone numbers
- **Reading mode**: Distraction-free reading experience

## ⚙️ Settings

Access settings through the extension popup:

- **Feature toggles** for each accessibility tool
- **Voice settings** (speed, voice selection)
- **Display options** (high contrast, font size)
- **Quick actions** for immediate use

## 🔧 Technical Details

### Built With
- **Manifest V3** for modern browser compatibility
- **Web Speech API** for text-to-speech and voice recognition
- **Vanilla JavaScript** for lightweight performance
- **CSS Grid/Flexbox** for responsive design
- **WCAG 2.2 compliant** design principles

### Browser Compatibility
- ✅ Chrome 88+
- ✅ Firefox 89+
- ✅ Edge 88+
- ⚠️ Safari (limited support)

### Permissions Used
- `activeTab` - Access current webpage content
- `storage` - Save user preferences
- `scripting` - Inject accessibility features
- `tts` - Text-to-speech functionality
- `audioCapture` - Voice command recognition
- `notifications` - User feedback

## 🛠️ Development

### Project Structure
```
members/public/
├── manifest.json          # Extension manifest
├── background.js          # Service worker
├── content.js            # Main accessibility features
├── content.css           # Styling for all features
├── popup.html            # Settings popup
├── popup.js              # Popup functionality
├── learning-hub.html     # Learning resources
└── icons/               # Extension icons
```

### Key Components
- **AllAbleAccessibility** - Main controller class
- **VoiceReader** - Text-to-speech functionality
- **SignLanguageOverlay** - Sign language and subtitles
- **MotorAssistance** - Voice control and navigation
- **FacileMode** - Content simplification
- **QuickTools** - Utility functions

## 🎨 Design Philosophy

### Clean, Accessible UI
- **No colors** used for primary functionality
- **High contrast** design throughout
- **Large touch targets** (minimum 44px)
- **Clear typography** with good spacing
- **Keyboard navigation** support

### Modular Architecture
- **Individual toggles** for each feature
- **Non-intrusive** floating panels
- **Customizable positioning** and sizing
- **Graceful degradation** when features unavailable

## 🔮 Future Enhancements

### Planned Features
- **AI-powered content simplification**
- **Real OCR integration** for image text extraction
- **Advanced eye-tracking** support
- **Multi-language support**
- **Cloud sync** for settings
- **Advanced voice commands**
- **Integration with external assistive devices**

### API Integrations
- **Whisper API** for advanced speech recognition
- **GPT-4** for content simplification
- **Computer Vision APIs** for image analysis
- **Sign language recognition** services

## 🤝 Contributing

We welcome contributions! Areas where help is needed:
- **Accessibility testing** with real users
- **Voice command improvements**
- **UI/UX enhancements**
- **Additional language support**
- **Performance optimizations**

## 📄 License

This project is open source and available under the MIT License.

## 🆘 Support

For support, feature requests, or bug reports:
- **Use the Learning Hub** for tutorials and tips
- **Check the community forum** for common questions
- **Submit issues** through the project repository

---

**AllAble** - Making the web accessible for everyone, one page at a time. 🌐♿
