import { useState } from 'react'
import './app.css'
import PlayerName from './components/PlayerName/PlayerName'
import Resource, { resourceProps } from './components/Resource/Resource'

const App = () => {
  const [MegaCredit, setMegaCredit] = useState<number>(0);
  const [Acel, setAcel] = useState<number>(0);
  const [Titan, setTitan] = useState<number>(0);
  const [Palantak, setPalantak] = useState<number>(0);
  const [Energia, setEnergia] = useState<number>(0);
  const [Ho, setHo] = useState<number>(0);
  const [MegaCreditProd, setMegaCreditProd] = useState<number>(0);
  const [AcelProd, setAcelProd] = useState<number>(0);
  const [TitanProd, setTitanProd] = useState<number>(0);
  const [PalantakProd, setPalantakProd] = useState<number>(0);
  const [EnergiaProd, setEnergiaProd] = useState<number>(0);
  const [HoProd, setHoProd] = useState<number>(0);

  const MegaCreditObj: resourceProps = {
    name: "Megacredit",
    amount: MegaCredit,
    onChange: (increment) => setMegaCredit(MegaCredit + increment),
    production: MegaCreditProd,
    productionChange: (increment) => setMegaCreditProd(MegaCreditProd + increment)
  }
  const AcelObj: resourceProps = {
    name: "Acél",
    amount: Acel,
    onChange: (increment) => setAcel(Acel + increment),
    production: AcelProd,
    productionChange: (increment) => setAcelProd(AcelProd + increment)
  }
  const TitanObj: resourceProps = {
    name: "Titán",
    amount: Titan,
    onChange: (increment) => setTitan(Titan + increment),
    production: TitanProd,
    productionChange: (increment) => setTitanProd(TitanProd + increment)
  }
  const PalantakObj: resourceProps = {
    name: "Palánták",
    amount: Palantak,
    onChange: (increment) => setPalantak(Palantak + increment),
    production: PalantakProd,
    productionChange: (increment) => setPalantakProd(PalantakProd + increment)
  }
  const EnergiaObj: resourceProps = {
    name: "Energia",
    amount: Energia,
    onChange: (increment) => setEnergia(Energia + increment),
    production: EnergiaProd,
    productionChange: (increment) => setEnergiaProd(EnergiaProd + increment)
  }
  const HoObj: resourceProps = {
    name: "Hő",
    amount: Ho,
    onChange: (increment) => setHo(Ho + increment),
    production: HoProd,
    productionChange: (increment) => setHoProd(HoProd + increment)
  }

  return (
    <div className="container">
      <PlayerName />

      <Resource {...MegaCreditObj} />
      <Resource {...AcelObj} />
      <Resource {...TitanObj} />
      <Resource {...PalantakObj} />
      <Resource {...EnergiaObj} />
      <Resource {...HoObj} />

      <button type="button"> Next Round</button>
    </div>
  )
}

export default App