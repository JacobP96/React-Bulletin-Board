
import './App.css';
import ReactPost from "./components/ReactPost";
function App() {
  const BulletinBoard = [
    {
      question: "Vad är tre fördelar med att använda React?",
      answer:
        "Att använda sig av komponenter i React gör att kod kan delas upp i mindre enheter. Detta gör att koden blir lättare att återanvända utan större tekniska svårigheter. React är välanvänt av större företag så som Facebook,Microsoft och Paypal bland andra. De flesta buggar i React är lösta och det finns standader för hur man hanterar exempelvis data-hantering eller autentisering på bästa sätt.  "
    },
    {
      question:
        "Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?",
      answer:
        "Single Page Application laddar hela sidan en gång och efterföljande klick till nya 'sidor' resulterar i minimal trafik. Vilket innebär att bara den efterfrågade informationen kommer att uppdateras på hemsidan, vilket ökar webbplatsens prestanda avsevärt. På en 'vanlig' hemsida uppdateras informationen på hela sidan, oavsett vilken information du vill få fram. "
    },
    {
      question: "Nämn tre skillnader mellan React och Angular.",
      answer:
        "React fungerar som ett bibliotek medan Angular är mer ett ramverk. Data-bindnings är också en stor skillnad då React fungerar som one-way och Angylar fungerar two-way. I React jobbar man med Javascript och när man jobbar i Angular använder man sig av Microsoft's programmeringsspråk"
    }
  ];
  return (
    <div className="App">
      
      <h1>React Bulletin board</h1>
      <ReactPost question={BulletinBoard} />
    </div>
  );
}

export default App;
