const SideBar = ({ sideBar }) => {
    return(
        <aside>
            <form>
                <div className="form-group">
                    <input type="date" name="add-item-date" id="add-item-date" className="form-control form-control-sm" placeholder="Data" required />
                </div>
                <div className="form-group">
                    <select name="add-item-type" id="add-item-type" className="form-control form-control-sm" required>
                        <option value="">Typ</option>
                        <option value="Praca">Praca</option>
                        <option value="Podróż">Podróż</option>
                        <option value="Nieobecność">Nieobecność</option>
                    </select>
                </div>
                <div className="form-group work travel absence hide">
                    <select name="add-item-superior" id="add-item-superior" className="form-control form-control-sm" required>
                        <option value="">Przełożony</option>
                        <option value="JP">JP</option>
                        <option value="DR">DR</option>
                        <option value="TR">TR</option>
                    </select>
                </div>
                <div className="form-group absence hide">
                    <select name="add-item-absence" id="add-item-absence" className="form-control form-control-sm">
                        <option value="">Typ nieobecności</option>
                        <option value="Urlop wypoczynkowy">Urlop wypoczynkowy</option>
                        <option value="Wolne za nadgodziny">Wolne za nadgodziny</option>
                        <option value="Wolne za sobotę">Wolne za sobotę</option>
                    </select>
                </div>
                <div className="d-flex">
                    <div className="form-group work travel absence hide" style={{marginRight: '10px'}}>
                        <input type="time" name="add-item-work-from" id="add-item-work-from" className="form-control form-control-sm" />
                    </div>
                    <div className="form-group work travel absence hide">
                        <input type="time" name="add-item-work-to" id="add-item-work-to" className="form-control form-control-sm" />
                    </div>
                </div>
                <div className="form-group work travel hide">
                    <input type="text" name="add-item-description" id="add-item-description" className="form-control form-control-sm" placeholder="Opis" />
                </div>
                <div className="form-group work travel hide">
                    <select name="add-item-place-start" id="add-item-place-start" className="form-control form-control-sm">
                        <option value="">Miejsce początkowe / pracy</option>
                        <option value="Miejsce oddelegowania">Miejsce oddelegowania</option>
                        <option value="Biuro Gliwice">Biuro Gliwice</option>
                        <option value="Miejsce zamieszkania">Miejsce zamieszkania</option>
                    </select>
                </div>
                <div className="form-group work travel hide">
                    <input type="text" name="add-item-city-start" id="add-item-city-start" className="form-control form-control-sm" placeholder="Miasto / inne" />
                </div>
                <div className="form-group work travel hide">
                    <select name="add-item-country-start" id="add-item-country-start" className="form-control form-control-sm">
                        <option value="">Kraj</option>
                        <option value="Polska">Polska</option>
                        <option value="Niemcy">Niemcy</option>
                        <option value="Hiszpania">Hiszpania</option>
                    </select>
                </div>
                <div className="form-group work travel hide">
                    <select name="add-item-proj-code" id="add-item-proj-code" className="form-control form-control-sm">
                        <option value="">Kod projektu</option>
                        <option value="VW Poznań Procon">VW Poznań Procon</option>
                        <option value="Projekt VR">Projekt VR</option>
                        <option value="Inne">Inne</option>
                    </select>
                </div>
                <div className="d-flex">
                    <div className="form-group work hide" style={{marginRight: '10px'}}>
                        <input type="time" name="add-item-break-from" id="add-item-break-from" className="form-control form-control-sm" />
                    </div>
                    <div className="form-group work hide">
                        <input type="time" name="add-item-break-to" id="add-item-break-to" className="form-control form-control-sm" />
                    </div>
                </div>
                <div className="form-group travel hide">
                    <select name="add-item-place-stop" id="add-item-place-stop" className="form-control form-control-sm">
                        <option value="">Miejsce końcowe</option>
                        <option value="Miejsce oddelegowania">Miejsce oddelegowania</option>
                        <option value="Biuro Gliwice">Biuro Gliwice</option>
                        <option value="Miejsce zamieszkania">Miejsce zamieszkania</option>
                    </select>
                </div>
                <div className="form-group travel hide">
                    <input type="text" name="add-item-city-stop" id="add-item-city-stop" className="form-control form-control-sm" placeholder="Miasto / inne" />
                </div>
                <div className="form-group travel hide">
                    <select name="add-item-country-stop" id="add-item-country-stop" className="form-control form-control-sm">
                        <option value="">Kraj</option>
                        <option value="Polska">Polska</option>
                        <option value="Niemcy">Niemcy</option>
                        <option value="Hiszpania">Hiszpania</option>
                    </select>
                </div>
                <div className="form-group travel hide">
                    <select name="add-item-transport" id="add-item-transport" className="form-control form-control-sm">
                        <option value="">Środek transportu</option>
                        <option value="company-car">Samochód służbowy</option>
                        <option value="private-car">Samochód prywatny</option>
                        <option value="taxi">Taksówka</option>
                        <option value="other">Inny</option>
                    </select>
                </div>
                <div className="form-group travel car-travel hide">
                    <select name="add-item-reg-plate" id="add-item-reg-plate" className="form-control form-control-sm">
                        <option value="">Nr rejestracyjny</option>
                        <option value="SL2113F">SL2113F</option>
                        <option value="SL2118F">SL2118F</option>
                        <option value="SG0750N">SG0750N</option>
                    </select>
                </div>
                <div className="form-group travel car-travel hide">
                    <select name="add-item-person-num" id="add-item-person-num" className="form-control form-control-sm">
                        <option value="">Ilość osób w samochodzie</option>
                        <option value="Tylko ja">Tylko ja</option>
                        <option value="Ja + 1">Ja + 1</option>
                        <option value="Ja + 2">Ja + 2</option>
                        <option value="Ja + 3">Ja + 3</option>
                        <option value="Ja + 3">Ja + 4</option>
                    </select>
                </div>
                <div className="form-check form-check-inline travel car-travel hide" style={{marginBottom: '10px'}}>
                    <input type="checkbox" name="add-item-driver" id="add-item-driver" className="form-check-input" />
                    <label htmlFor="add-item-driver" className="form-check-label">Kierowca?</label>
                </div>
                <div className="d-flex">
                    <div className="form-group travel car-travel driver hide" style={{marginRight: '10px'}}>
                        <input type="time" name="add-item-driver-from" id="add-item-driver-from" className="form-control form-control-sm" />
                    </div>
                    <div className="form-group travel car-travel driver hide">
                        <input type="time" name="add-item-driver-to" id="add-item-driver-to" className="form-control form-control-sm" />
                    </div>
                </div>
                <div className="d-flex">
                    <button className="btn btn-primary flex-fill m-1" id="add-btn">Zapisz</button>
                    <button className="btn btn-secondary flex-fill m-1" id="cancel-btn" onClick={sideBar} type="button">Anuluj</button>
                </div>
            </form>
        </aside>
    );  
};

export default SideBar;
