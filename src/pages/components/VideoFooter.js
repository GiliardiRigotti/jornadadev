import React from "react";
import "./videoFooter.css";

export default function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@Giliardi Ebac</h3>
        <p>Descrição do Video</p>
        <div className="videoFooter_music">
          <p>Icone</p>
          <p>Titulo da musica</p>
        </div>
      </div>
      <img
        className="videoFooter__record"
        alt="Imagem de um vinil girando"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
      />
    </div>
  );
}
