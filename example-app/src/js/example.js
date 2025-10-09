import { VolumeButtons } from '@capgo/volume-buttons';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    VolumeButtons.echo({ value: inputValue })
}
