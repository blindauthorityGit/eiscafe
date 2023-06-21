import React from "react";
import { Menu1 } from "../components/menues";

import { BiArrowBack } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { menuItems, socialMedia } from "../components/menues/config";

//ASSETS
import LogoLight from "../assets/LogoLight.svg";
import LogoDark from "../assets/LogoDark.svg";
const Datenschutz = () => {
    return (
        <>
            <Menu1
                logoLight={LogoLight.src}
                logoDark={LogoDark.src}
                menuItems={menuItems}
                socialMedia={socialMedia}
                burgerIcon={<RxHamburgerMenu />}
                onBurgerClick={(e) => {}}
                onClick={() => {
                    setIsOpen(true);
                }}
            ></Menu1>
            <div className="p-4 container mx-auto mt-24">
                <h1 className="text-2xl font-bold mb-4">DATENSCHUTZERKLÄRUNG</h1>
                <p className="mb-4">
                    Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von
                    personenbezogenen Daten (nachfolgend kurz „Daten“) im Rahmen der Erbringung unserer Leistungen sowie
                    innerhalb unseres Onlineangebotes und der mit ihm verbundenen Webseiten, Funktionen und Inhalte
                    sowie externen Onlinepräsenzen, wie z.B. unser Social Media Profile auf (nachfolgend gemeinsam
                    bezeichnet als „Onlineangebot“). Im Hinblick auf die verwendeten Begrifflichkeiten, wie z.B.
                    „Verarbeitung“ oder „Verantwortlicher“ verweisen wir auf die Definitionen im Art. 4 der
                    Datenschutzgrundverordnung (DSGVO).
                </p>

                <h2 className="text-lg font-bold mb-2">VERANTWORTLICHER</h2>
                <p className="mb-4">
                    Eiscafe Altstadt Gelateria
                    <br />
                    Alte Bogengasse 37
                    <br />
                    63303 Dreieich
                    <br />
                    +49 6103 733 95 33
                </p>

                <h2 className="text-lg font-bold mb-2">ARTEN DER VERARBEITETEN DATEN</h2>
                <ul className="list-disc pl-6 mb-4">
                    <li>Bestandsdaten (z.B., Personen-Stammdaten, Namen oder Adressen)</li>
                    <li>Kontaktdaten (z.B., E-Mail, Telefonnummern)</li>
                    <li>Inhaltsdaten (z.B., Texteingaben, Fotografien, Videos)</li>
                    <li>Nutzungsdaten (z.B., besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten)</li>
                    <li>Meta-/Kommunikationsdaten (z.B., Geräte-Informationen, IP-Adressen)</li>
                </ul>

                <h2 className="text-lg font-bold mb-2">KATEGORIEN BETROFFENER PERSONEN</h2>
                <p className="mb-4">
                    Besucher und Nutzer des Onlineangebotes (Nachfolgend bezeichnen wir die betroffenen Personen
                    zusammenfassend auch als „Nutzer“).
                </p>

                <h2 className="text-lg font-bold mb-2">ZWECK DER VERARBEITUNG</h2>
                <ul className="list-disc pl-6 mb-4">
                    <li>Zurverfügungstellung des Onlineangebotes, seiner Funktionen und Inhalte</li>
                    <li>Beantwortung von Kontaktanfragen und Kommunikation mit Nutzern</li>
                    <li>Sicherheitsmaßnahmen</li>
                    <li>Reichweitenmessung/Marketing</li>
                </ul>

                <h2 className="text-lg font-bold mb-2">SICHERHEITSMAßNAHMEN</h2>
                <p className="mb-4">
                    Wir treffen organisatorische, vertragliche und technische Sicherheitsmaßnahmen entsprechend dem
                    Stand der Technik, um sicherzustellen, dass die Vorschriften der Datenschutzgesetze eingehalten
                    werden und um damit die durch uns verarbeiteten Daten gegen zufällige oder vorsätzliche
                    Manipulationen, Verlust, Zerstörung oder gegen den Zugriff unberechtigter Personen zu schützen.
                </p>

                <p className="mb-4">Weitergabe und Offenbarung von personenbezogenen Daten</p>

                <h2 className="text-lg font-bold mb-2">ÜBERMITTLUNG VON DATEN AN DRITTE</h2>
                <p className="mb-4">
                    Eine Übermittlung von Daten an Dritte findet grundsätzlich nur statt, wenn dies zur
                    Vertragserfüllung erforderlich ist, wir ein berechtigtes Interesse an der Weitergabe haben oder Ihre
                    Einwilligung hierfür vorliegt. Dabei können Dritte auch externe Dienstleister oder verbundene
                    Unternehmen sein.
                </p>

                <h2 className="text-lg font-bold mb-2">COOKIES</h2>
                <p className="mb-4">
                    Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser
                    speichert. Sie dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.{" "}
                    <a href="/datenschutz#cookies">Weitere Informationen zu Cookies</a>.
                </p>

                <h2 className="text-lg font-bold mb-2">
                    RECHTSGRUNDLAGEN FÜR DIE VERARBEITUNG PERSONENBEZOGENER DATEN
                </h2>
                <p className="mb-4">
                    Im Folgenden teilen wir die Rechtsgrundlagen der Datenschutzgrundverordnung (DSGVO), auf deren Basis
                    wir die personenbezogenen Daten verarbeiten, mit. Bitte beachten Sie, dass zusätzlich zu den
                    Regelungen der DSGVO die nationalen Datenschutzvorgaben in Ihrem bzw. unserem Wohn- und Sitzland
                    gelten können. Sollten ferner im Einzelfall speziellere Rechtsgrundlagen maßgeblich sein, teilen wir
                    Ihnen diese in der Datenschutzerklärung mit.
                </p>

                <ul className="list-disc pl-6 mb-4">
                    <li>
                        <strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO)</strong> - Die betroffene Person hat ihre
                        Einwilligung in die Verarbeitung der sie betreffenden personenbezogenen Daten für einen
                        spezifischen Zweck oder mehrere bestimmte Zwecke gegeben.
                    </li>
                    <li>
                        <strong>
                            Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO)
                        </strong>{" "}
                        - Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene
                        Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der
                        betroffenen Person erfolgen.
                    </li>
                    <li>
                        <strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO)</strong> - Die Verarbeitung
                        ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten
                        erforderlich, sofern nicht die Interessen oder Grundrechte und Grundfreiheiten der betroffenen
                        Person, die den Schutz personenbezogener Daten erfordern, überwiegen.
                    </li>
                </ul>

                <h2 className="text-lg font-bold mb-2">IHRE RECHTE ALS BETROFFENE PERSON</h2>
                <p className="mb-4">
                    Ihnen stehen als betroffene Person nach der DSGVO verschiedene Rechte zu, die sich insbesondere aus
                    Art. 15 bis 21 DSGVO ergeben:
                </p>

                <ul className="list-disc pl-6 mb-4">
                    <li>
                        <strong>Widerspruchsrecht: </strong>
                        Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit
                        gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten, die aufgrund von Art. 6
                        Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese
                        Bestimmungen gestütztes Profiling. Werden die Sie betreffenden personenbezogenen Daten
                        verarbeitet, um Direktwerbung zu betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die
                        Verarbeitung der Sie betreffenden personenbezogenen Daten zum Zwecke derartiger Werbung
                        einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung
                        steht.
                    </li>
                    <li>
                        <strong>Auskunftsrecht: </strong>
                        Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet
                        werden, und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten
                        entsprechend den gesetzlichen Vorgaben.
                    </li>
                    <li>
                        <strong>Recht auf Berichtigung: </strong>
                        Sie haben entsprechend den gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie
                        betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.
                    </li>
                    <li>
                        <strong>Recht auf Löschung und Einschränkung der Verarbeitung: </strong>
                        Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu verlangen, dass Sie betreffende
                        Daten unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben eine
                        Einschränkung der Verarbeitung der Daten zu verlangen.
                    </li>
                    <li>
                        <strong>Recht auf Datenübertragbarkeit: </strong>
                        Sie haben das Recht, Sie betreffende Daten, die Sie uns bereitgestellt haben, nach Maßgabe der
                        gesetzlichen Vorgaben in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten
                        oder deren Übermittlung an einen anderen Verantwortlichen zu fordern.
                    </li>
                    <li>
                        <strong>Beschwerde bei Aufsichtsbehörde: </strong>
                        Sie haben unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen
                        Rechtsbehelfs das Recht auf Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem
                        Mitgliedstaat ihres gewöhnlichen Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des
                        mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden
                        personenbezogenen Daten gegen die Vorgaben der DSGVO verstößt.
                    </li>
                </ul>

                <h2 className="text-lg font-bold mb-2">LÖSCHUNG VON DATEN</h2>
                <p className="mb-4">
                    Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen Vorgaben gelöscht oder in ihrer
                    Verarbeitung eingeschränkt. Sofern nicht im Rahmen dieser Datenschutzerklärung ausdrücklich
                    angegeben, werden die bei uns gespeicherten Daten gelöscht, sobald sie für ihre Zweckbestimmung
                    nicht mehr erforderlich sind und der Löschung keine gesetzlichen Aufbewahrungspflichten
                    entgegenstehen. <a href="/datenschutz#loeschung">Weitere Informationen zur Löschung von Daten</a>.
                </p>

                <h2 className="text-lg font-bold mb-2">ÄNDERUNG UND AKTUALISIERUNG DER DATENSCHUTZERKLÄRUNG</h2>
                <p className="mb-4">
                    Wir bitten Sie, sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu informieren. Wir
                    passen die Datenschutzerklärung an, sobald die Änderungen der von uns durchgeführten
                    Datenverarbeitungen dies erforderlich machen. Wir informieren Sie, sobald durch die Änderungen eine
                    Mitwirkungshandlung Ihrerseits (z.B. Einwilligung) oder eine sonstige individuelle Benachrichtigung
                    erforderlich wird.
                </p>

                <p>
                    Quelle:{" "}
                    <a
                        href="https://www.e-recht24.de/muster-datenschutzerklaerung.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Muster-Datenschutzerklärung von eRecht24
                    </a>
                </p>
            </div>
        </>
    );
};

export default Datenschutz;
