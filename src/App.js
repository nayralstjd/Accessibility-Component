import React, { useState, useEffect } from "react";
import "./App.css";

const data = [
  {
    title: "Spotify",
    images: ["/spotify.png", "/hoverspotify.png", "/activespotify.png", "/last.png"],
    descriptions: [
      "Default State",
      "Hover Effect: Notice whiter hue and shortcut appearance",
      "Active State: White Border indicating where user is at",
    ],
    keyboardVideo: "/trim1.mp4",
    keyboardText: {
      title: "Spotify Keyboard/Shortcut Interactions",
      input: [
        "Tabbing: Starts with Home, then Search, followed by Clear Recent Searches (at the end of the dropdown), and then Browse. This sequence is intuitive.",
        "Command + K: Opens a new, separate search bar for searching."
      ],
      limitations: [
        "Clicking Outside the Search Bar: You can't reliably click outside the search bar to close it; there’s a threshold where clicking outside doesn't always work.",
        "Esc Key: While clicking outside doesn't always work, pressing the Escape (Esc) key is the most reliable way to close the search bar."
      ]
    }
  },
  {
    title: "YouTube",
    images: ["/youtube1.png", "/youtube2.png", "/youtube3.png", "/youtube4.png"],
    descriptions: ["Default State", "Active State: Blue border, longer search bar, search icons"],
    keyboardVideo: "/youtube_keyboard.mp4",
    keyboardText: {
      title: "YouTube Keyboard/Shortcut Interactions",
      input: [
        "Pressing '/': Automatically focuses on the search bar, ready for input.",
        "Arrow Keys: Navigate through search suggestions.",
        "Tabbing In: Intuitive. Search Bar 2nd in cycle"
      ],
      limitations: [
        "Esc Key: Does not clear the search bar but clears dropdown",
        "Autocomplete: Suggestions are not selectable using only the keyboard.",
        "Shortcut: Not easily discoverable."
      ]
    }
  },
  {
    title: "Photos App",
    images: ["/photos1.png", "/photos3.png", "/photos2.png", "/photos4.png"],
    descriptions: [
      "Default State: hard for first-time users to look for search bar",
      "Hover State: indicates where to look",
      "Active State: blue border indication",
    ],
    keyboardVideo: "/photos_keyboard.mov",
    keyboardText: {
      title: "Photos App Keyboard/Shortcut Interactions",
      input: [
        "Cmd + F: Activates the search function, allowing quick filtering.",
        "Image: Dragging an image to the search bar copies in as pathfile",
        "Tabbing In: Only works if your application is long enough to not be an icon."
      ],
      limitations: [
        "Enter Key: Inconsistencies: Does not always confirm a search.",
        "No Clear Shortcut: No shortcut to directly clear the search input field.",
        "Shortcut: Hard to discover."
      ]
    }
  }
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPhotosModalOpen, setIsPhotosModalOpen] = useState(false);
  const [isSpotifyModalOpen, setIsSpotifyModalOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    setIsFlipped(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    setIsFlipped(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setIsPhotosModalOpen(false);
      setIsSpotifyModalOpen(false);
    }
  };

  useEffect(() => {
    if (isPhotosModalOpen || isSpotifyModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isPhotosModalOpen, isSpotifyModalOpen]);

  return (
    <div className="carousel-container">
      <button className="arrow left" onClick={prevSlide}>
        &#9665;
      </button>
      <div className="carousel-box">
        <h2 className="light-blue">{data[currentIndex].title}</h2>
        <button 
          className="flip-btn-interactive" 
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {isFlipped ? "Click to View Mouse User" : "Click to View Keyboard User"}
        </button>
        <div className={`carousel-content ${isFlipped ? "flipped" : ""}`}>
          {!isFlipped ? (
            data[currentIndex].images.map((image, idx) => (
              <div key={idx} className="image-container">
                <img src={image} alt={data[currentIndex].descriptions[idx]} />
                <p className="left-aligned">{data[currentIndex].descriptions[idx]}</p>
                {/* View More Observations button for Spotify (Mouse User) */}
                {currentIndex === 0 && idx === data[currentIndex].images.length - 1 && (
                  <button className="view-more-btn" onClick={() => setIsSpotifyModalOpen(true)}>
                    View More Observations
                  </button>
                )}
                {/* View More Observations button for Photos App (Mouse User) */}
                {currentIndex === 2 && idx === data[currentIndex].images.length - 1 && (
                  <button className="view-more-btn2" onClick={() => setIsPhotosModalOpen(true)}>
                    View More Observations
                  </button>
                )}
              </div>
            ))
          ) : (
            <div className="flipped-content">
              <div className="keyboard-interactions">
                <video 
                  src={data[currentIndex].keyboardVideo} 
                  autoPlay 
                  loop 
                  muted 
                  className="keyboard-video" 
                />
                <div className="keyboard-text-box">
                  <h3>{data[currentIndex].keyboardText.title}</h3>
                  <h4>Input (What it can do):</h4>
                  <ul>
                    {data[currentIndex].keyboardText.input.map((item, index) => (
                      <li key={index}><strong>{item.split(":")[0]}:</strong> {item.split(":")[1]}</li>
                    ))}
                  </ul>
                  <h4>What it can't do:</h4>
                  <ul>
                    {data[currentIndex].keyboardText.limitations.map((item, index) => (
                      <li key={index}><strong>{item.split(":")[0]}:</strong> {item.split(":")[1]}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <button className="arrow right" onClick={nextSlide}>
        &#9655;
      </button>

      {/* Modal for Spotify Mouse User */}
{isSpotifyModalOpen && (
  <div className="modal-overlay" onClick={() => setIsSpotifyModalOpen(false)}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-btn" onClick={() => setIsSpotifyModalOpen(false)}>✖</button>
      <h2 className="light-blue">Spotify - Mouse User Observations</h2>
      <p>The search bar displays a friendly prompt ("What do you want to play?"), making it feel approachable.</p>
      <p>Hovering over the bar changes its appearance, reinforcing where the user is focused. The interaction feels intuitive for mouse users, enhancing the browsing experience.</p>
      <h3>Functions & Inputs Available</h3>
      <ul>
      <p><strong>Hover Input:</strong></p>
      </ul>
      <ul>
        <li>Hovering over the magnifying glass icon reveals a tooltip that says "Search," helping new or unfamiliar users understand its function.</li>
        <li>Hovering over the drawer-like icon on the right side of the search bar reveals a "Browse" tooltip, clarifying its purpose.</li>
      </ul>
      <ul>
      <p><strong>Click Input:</strong></p>
      </ul>
      <ul>
        <li>Clicking on the search bar lets users type their query.</li>
        <li>Clicking on the search icon or pressing Enter executes the search.</li>
        <li>Clicking the "Browse" icon navigates to a broader music discovery section.</li>
      </ul>
      <ul>
      <h3>What It Can’t Do</h3>
      </ul>
      <ul>
        <li>Users cannot delete or highlight the placeholder text ("What do you want to play?") or the shortcut icons.</li>
        <li>The search bar only accepts text input—no images, videos, or drag-and-drop elements can be added.</li>
        <li>Standard keyboard shortcuts (e.g., Ctrl+C) won’t work on non-editable UI elements like the placeholder text.</li>
      </ul>
    </div>
  </div>
)}


      {/* Modal for Photos App Mouse User */}
{isPhotosModalOpen && (
  <div className="modal-overlay" onClick={() => setIsPhotosModalOpen(false)}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-btn" onClick={() => setIsPhotosModalOpen(false)}>✖</button>
      <h2 className="light-blue">Photos App - Mouse User Observations</h2>
      <h3>Functions & Inputs Available</h3>
      <ul>
        <p><strong>Hover Input:</strong></p>
        <li>Hovering over the search icon does not display a tooltip like "Search," which reduces accessibility.</li>
      </ul>
      <ul>
        <p><strong>Click & Drag Input:</strong></p>
        <li>Users can drag a picture into the search bar, which converts the image into a filepath for searching.</li>
        <li>Typing words or numbers in the search bar functions as expected.</li>
      </ul>
      <ul>
        <p><strong>Clear Input Option:</strong></p>
        <li>When users type in the search bar, an "X" button appears on the right side.</li>
        <li>Clicking the "X" clears all input instantly, as does pressing the Escape key.</li>
      </ul>
      <h3>What It Can’t Do</h3>
      <ul>
        <li>Users cannot copy and paste any of the suggested search terms that appear below the search bar.</li>
        <li>The search bar does not support inserting images directly—only their file paths.</li>
        <li>There is no hover text or tooltip for the search bar or icon, making it less intuitive for new users.</li>
      </ul>
    </div>
  </div>
)}
    </div>
  );
}
function RedesignedLayout() {
  return (
    <div className="redesign-container">
      {/* First Row: Mouse Interaction Images */}
      <div className="image-row">
        <h3 style={{ color: "#66fcf1" }}>Mouse User State Model & Revisions</h3>
        <img src="/mouse.png" alt="Mouse Interaction 1" className="small-image-left-image" />
        <span className="fancy-arrow">➜</span>
        <img src="/mouse2.png" alt="Mouse Interaction 2" className="small-image-right-image" />
      </div>
      <div className="red1">
        <ul>
      <p style = {{ color:"#c5c6c7"}}>One of the first things I noticed with Spotify's UI was that the shortcut appeared only when you hover over the search bar with the mouse. And I thought that was counterintuitive. For non-mouse users, this simply wouldn't be a shortcut you would ever discover. So, that was the first fix I wanted to address.</p>
      </ul>
      </div>
      {/* Second Row: Keyboard Interaction Image and Text Box */}
      <div className="image-row">
  <h3 style={{ color: "#66fcf1" }}>Keyboard User State Model</h3>
  <div className="keyboard-and-textbox">
    <img src="/keyboard.png" alt="Keyboard Interaction" className="small-image-left-image3" />
    <div className="text-box">
      <ul>
        <li>When pressing <strong>Enter</strong> on the search bar, it directly transitions to the <strong>focused state</strong> of the main menu.</li>
        <li>The search bar <strong>does not go from active to focused space bar</strong> because:
          <ul>
            <li>After being taken to the main menu, the search bar returns to its <strong>default state</strong>.</li>
          </ul>
        </li>
        <li>This behavior is <strong>intuitive</strong> as it aligns with expected user interactions.</li>
      </ul>
    </div>
  </div>
</div>



      {/* Third Row: Shortcut Images */}
      <div className="image-row">
        <h3 style={{ color: "#66fcf1" }}>Shortcut User State Model & Revisions</h3>
        <img src="/shortcut.png" alt="Shortcut Interaction 1" className="small-image-left-image2" />
        <span className="fancy-arrow2">➜</span>
        <img src="/shortcut2.png" alt="Shortcut Interaction 2" className="small-image-right-image2" />
      </div>
      <div className="red1">
        <ul>
      <p style = {{ color:"#c5c6c7"}}>Another fix was changing how the shortcut worked. This change introduces an intentional tradeoff: while directing users to the main search bar improves consistency and avoids the need for an extra Escape action, it also means they lose the ability to start a separate, more focused search session. However, this approach prioritizes a more seamless and predictable experience, reducing cognitive load and making navigation more intuitive.</p>
      </ul>
      </div>
    </div>
  );
}


const outputData = [
  {
    category: "Focus Indication",
    spotify: [
      "Hover: White hue, 3D effect, shortcut appears (Command K)",
      "Clicking: Expands search bar, search icon appears on the left"
    ],
    youtube: [
      "Hover: Expands search bar slightly",
      "Clicking: Blue border appears, search icon appears inside the bar"
    ],
    photos: [
      "Hover: Cursor changes to text input indicator",
      "Clicking: Expands search bar from an icon"
    ]
  },
  {
    category: "Visual Feedback on Input",
    spotify: [
      "Border: Thick white border appears when focused",
      "Expansion: Expands the search bar, revealing suggestions"
    ],
    youtube: [
      "Border: Blue border highlights focus state",
      "Expansion: Search bar expands, icon appears on the left"
    ],
    photos: [
      "Border: White border outline",
      "Expansion: Shows recommendations relevant to input"
    ]
  },
  {
    category: "Recommendation Display",
    spotify: ["Appears below the search bar", "Navigable with arrow keys"],
    youtube: ["Shows icons and colors for past searches and new suggestions"],
    photos: ["Standard list format under the search bar"]
  },
  {
    category: "State Representation",
    spotify: ["Text remains in the search bar", "Real-time suggestions appear"],
    youtube: ["Text input is displayed", "Past searches are visually differentiated by icons and color"],
    photos: ["White border outline on the search bar"]
  },
  {
    category: "Focus Order (Tab Navigation)",
    spotify: ["Home → What’s New → Friend Activity → Profile → Your Library → …"],
    youtube: ["YouTube Logo → Search Bar → + Create → Notifications → Profile → …"],
    photos: ["Library ⇄ Search (back and forth navigation)"]
  },
  {
    category: "MacOS Screen Reader (VoiceOver)",
    spotify: ["'What do you want to play?' List box pop-up, Menu pop-up combo box, search"],
    youtube: ["'Chrome, YouTube - Google Chrome - Ryan Search, window, list box pop-up, Menu pop-up combo box'"],
    photos: ["'Search text field, blank' (Concise but lacks detailed context)"]
  }
];

function OutputTable() {
  return (
    <section className="comparison-table">
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Spotify</th>
            <th>YouTube</th>
            <th>Photos App</th>
          </tr>
        </thead>
        <tbody>
          {outputData.map((row, index) => (
            <tr key={index}>
              <td>{row.category}</td>
              <td>
                <ul>
                  {row.spotify.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </td>
              <td>
                <ul>
                  {row.youtube.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </td>
              <td>
                <ul>
                  {row.photos.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
function App() {
  return (
    <div className="app-container" style={{ backgroundColor: "#1f2833", color: "#c5c6c7" }}>
      <header className="project-header">
        <h1 style={{ color: "#66fcf1" }}>Accessible Components & Redesign</h1>
      </header>
      <section className="project-intro">
        <p className="left-aligned">
          This project focuses on improving accessibility in search bar design by analyzing how users interact with search bars across different input methods and devices.
        </p>
        <p className="left-aligned">
          Specifically, I studied the search bars of Spotify, YouTube, and the Photos app to understand their behavior from three perspectives:
        </p>
      </section>
      <section className="analysis">
        <ul>
          <li><strong className="highlighted">Mouse or Touchpad:</strong> Interactions like clicking, typing, and selecting elements.</li>
          <li><strong className="highlighted">Keyboard-Only Navigation:</strong> How users navigate and edit the search bar using keyboard shortcuts.</li>
          <li><strong className="highlighted">Mobile/Touchscreen:</strong> How touch gestures such as tapping and swiping affect usability on mobile devices.</li>
        </ul>
        <p className="left-aligned">
          By evaluating these interactions, I aim to identify areas for improvement in accessibility, ensuring a more inclusive and seamless experience for users.
        </p>
        <p className="Observations">
          Input Observations Across Platforms (Mouse Users and Keyboard/Shortcut Users)
        </p>
      </section>
      
      <Carousel />

      {/* Separator and Title for the Table */}
      <section className="comparison-title">
        <h3 style={{ color: "#66fcf1" }}>Let's Visualize This!</h3>
      </section>

      {/* The Comparison Table */}
      <section className="comparison-table">
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Spotify</th>
              <th>YouTube</th>
              <th>Photos App</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hover Effect</td>
              <td>• Hovering over the search bar changes appearance<br />• Whiter hue and adds shortcuts (Mouse)</td>
              <td>• Hovering over search bar enlarges it<br />• Adds blue border and highlights search icons (Mouse)</td>
              <td>• Hovering over the search bar indicates where to click (Mouse)</td>
            </tr>
            {/* <tr>
              <td>Tabbing</td>
              <td>- Tab sequence: Home → Search → Clear Recent Searches → Browse (Intuitive)</td>
              <td>- Tabbing goes from search bar to suggestions and controls (Keyboard-only)</td>
              <td>- Tabbing works if the app is large enough (Keyboard-only)</td>
            </tr> */}
            <tr>
              <td>Keyboard Shortcuts</td>
              <td>• Command + K: Opens a new search bar</td>
              <td>• Pressing '/': Focuses on the search bar<br />• Arrow keys: Navigate search suggestions</td>
              <td>• Cmd + F: Activates the search bar<br />• Dragging an image into the search bar copies the image path (Keyboard-only)</td>
            </tr>
            <tr>
              <td>Escape Key Functionality</td>
              <td>• Escape reliably closes the search bar</td>
              <td>• Escape clears dropdown but not search input (Keyboard-only)</td>
              <td>• Escape clears input or dropdown (Keyboard-only)</td>
            </tr>
            <tr>
              <td>Clear Input (Mouse User)</td>
              <td>• Clicking the "X" on the search bar clears input</td>
              <td>• Clicking the "X" clears search bar</td>
              <td>• Clicking "X" clears the input</td>
            </tr>
            <tr>
              <td>Clear Input (Keyboard User)</td>
              <td>• Pressing Escape clears input</td>
              <td>• Escape clears dropdown but not input (Keyboard-only)</td>
              <td>• Escape clears input (Keyboard-only)</td>
            </tr>
            <tr>
              <td>Click Input</td>
              <td>• Clicking on search bar allows typing<br />• Clicking magnifying glass or "Browse" icon performs different functions</td>
              <td>• Clicking on search bar allows typing<br />• Clicking search icon or Enter executes search<br />- Clicking "Browse" navigates to discovery section</td>
              <td>• Clicking on the search bar allows typing<br />• Clicking on "X" clears the input field (Mouse)</td>
            </tr>
            <tr>
              <td>Drag-and-Drop (Mouse User)</td>
              <td>• Not supported for search bar</td>
              <td>• Not supported for search bar</td>
              <td>• Users can drag and drop images into the search bar, converting them into filepath (Mouse)</td>
            </tr>
          </tbody>
        </table>
      </section>
{/* Comparison Summary */}
<section className="comparison-summary">
        <h3 style={{ color: "#66fcf1" }}>Takeaways!</h3>
        <ul>
        <p>
        One aspect I liked about YouTube was the structured UI—when clicking the search bar, the newly appearing icon matches the one in the search dropdown, reinforcing usability. Spotify, in contrast, makes searching feel more interactive and dynamic, though its Command + K function's new search bar seems redundant and out of place. The Photos App, while uninspired, aligns with its primary use case—most users will browse by scrolling rather than typing in a search bar, making its minimal search functionality more acceptable.
        </p>
        </ul>
        <ul>
          <p>
          Accessibility wise, YouTube offers the most structured and intuitive search experience, with clear visual feedback, an expanding search bar, and the / shortcut for quick access, though its autocomplete navigation is limited. Spotify provides a dynamic and engaging interaction with hover effects and shortcut appearances, but its Command + K function feels redundant. The Photos App, while the least intuitive, uniquely allows image drag-and-drop into the search bar, making it useful for its specific use case despite lacking strong visual cues.
          </p>
        </ul>
      </section>
      <p className="outputobs">
          Output Observations Across Platforms (Mouse Users and Keyboard/Shortcut Users)
        </p>
      <p className="Ouput-intro">
        Now, that we looked at what input is available, let's take a look at the outputs that it generates.
      </p>
      <OutputTable />
      <section className="comparison-summary">
  <h3 style={{ color: "#66fcf1" }}>Takeaways!</h3>
  <ul>
  <p>
    In terms of accessibility, YouTube excels with a well-structured interface, offering clear visual feedback and intuitive keyboard navigation. The expanding search bar and the / shortcut make it easy to interact, although the autocomplete feature could be improved for better keyboard-only users. Spotify, while offering a dynamic experience, can be overwhelming with its multiple shortcuts. The Photos app, though simple, lacks strong visual cues and accessibility features. However, its drag-and-drop image search functionality is a unique benefit for users looking for a more specific use case.
  </p>
  </ul>
</section>
<section className="redesign-title">
        <p style={{ color: "#66fcf1" }}>State Models & Component Redesign</p>
      </section>
      <ul>
        <p className="statemodelinfo1">
    Building on the insights from the input and output analysis, we now turn our focus to redesigning Spotify’s search bar component. Before diving into the redesign, we’ll first visualize how the component behaves in different states for both <strong>mouse</strong> and <strong>keyboard</strong> users. This way, we can understand the nuances of the interactions and identify areas to improve accessibility and user flow.
  </p>
  </ul>
  <RedesignedLayout></RedesignedLayout>
  <h3 style={{ color: "#66fcf1" }}>Redesign</h3>
  <p className="redesigninfo">So let's visualize what this would look like!</p>
    </div>
  );
}



export default App;