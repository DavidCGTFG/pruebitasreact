import React from "react";
import { Link, Navigate } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { colors } from "@mui/material";
// import { ControlBar, Player } from "video-react";
// import "video-react/dist/video-react.css";

const VictoriaPage = () => {
  return (
    <div>
      <h1 className="titulo">HAS ACERTADO</h1>
    
      <label for="valor">Valor:</label>
      <select id="valor" name="valor">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      <br /><br />

      <label for="file1">Archivo 1:</label>
      <input type="file" id="file1" name="file1" />

      <label for="file2">Archivo 2:</label>
      <input type="file" id="file2" name="file2" />

      <label for="file3">Archivo 3:</label>
      <input type="file" id="file3" name="file3" />

      <label for="file4">Archivo 4:</label>
      <input type="file" id="file4" name="file4" />

      <label for="file5">Archivo 5:</label>
      <input type="file" id="file5" name="file5" />

      <label for="file6">Archivo 6:</label>
      <input type="file" id="file6" name="file6" />

      <label for="file7">Archivo 7:</label>
      <input type="file" id="file7" name="file7" />

      <br /><br />

      <label for="escenario1">Escenario 1:</label>
      <input type="text" id="escenario1" name="escenario1" />

      <label for="escenario2">Escenario 2:</label>
      <input type="text" id="escenario2" name="escenario2" />

      <label for="escenario3">Escenario 3:</label>
      <input type="text" id="escenario3" name="escenario3" />

      <label for="escenario4">Escenario 4:</label>
      <input type="text" id="escenario4" name="escenario4" />

      <label for="escenario5">Escenario 5:</label>
      <input type="text" id="escenario5" name="escenario5" />

      <label for="escenario6">Escenario 6:</label>
      <input type="text" id="escenario6" name="escenario6" />

      <label for="escenario7">Escenario 7:</label>
      <input type="text" id="escenario7" name="escenario7" />

      <label for="escenario8">Escenario 8:</label>
      <input type="text" id="escenario8" name="escenario8" />

      <label for="escenario9">Escenario 9:</label>
      <input type="text" id="escenario9" name="escenario9" />

      <label for="escenario10">Escenario 10:</label>
      
      </div>
  );
};


export default VictoriaPage;