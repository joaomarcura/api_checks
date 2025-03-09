import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      {/* Header */}
      <header>LLM API Benchmark</header>

      {/* Main Content */}
      <div className="container">
        <h1>Comparação de APIs de Modelos de Linguagem</h1>
        <p>Avaliação em tempo real das APIs Maritaca AI, OpenAI e DeepSeek.</p>

        {/* API Cards */}
        <div className="api-cards">
          <ApiCard 
            name="Maritaca AI" 
            color="#3498db" 
            latency="180 ms" 
            cost="R$ 5,00 / milhão tokens"
            accuracy="Alta"
            uptime="99.9%"
            limit="10.000 req/min"
          />
          <ApiCard 
            name="OpenAI" 
            color="#2ecc71" 
            latency="120 ms" 
            cost="US$ 1,10 / milhão tokens"
            accuracy="Muito Alta"
            uptime="99.5%"
            limit="100 req/min"
          />
          <ApiCard 
            name="DeepSeek" 
            color="#9b59b6" 
            latency="240 ms" 
            cost="US$ 0,50 / milhão tokens"
            accuracy="Média"
            uptime="97%"
            limit="500 req/min"
          />
        </div>
      </div>

      {/* Footer */}
      <footer>Desenvolvido com ❤️ usando React</footer>
    </div>
  );
}

// Componente para cada API
const ApiCard = ({ name, color, latency, cost, accuracy, uptime, limit }) => {
  return (
    <div className="api-card" style={{ borderTop: `4px solid ${color}` }}>
      <h2>{name}</h2>
      <p><strong>Tempo de Resposta:</strong> {latency}</p>
      <p><strong>Custo:</strong> {cost}</p>
      <p><strong>Precisão:</strong> {accuracy}</p>
      <p><strong>Uptime:</strong> {uptime}</p>
      <p><strong>Limite:</strong> {limit}</p>
    </div>
  );
};

export default App;
