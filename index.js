let pos = Player.getPlayer().getPos();
let e = event.entity;
let eP = e.getPos();
if (e.getType() == "securitycraft:securitycamera") {
    if (!FS.exists("./test.txt")) {
        FS.createFile("./", "test.txt");
    }
    let found = FS.open("./test.txt").read();
    const current = eP.x + ":" + eP.y + ":" + eP.z + ",";
    if (found.indexOf(current) == -1) {
        found += current;
        FS.open("./test.txt").write(found);
        Chat.log(
            Chat.createTextBuilder()
                .append("*new*")
                .withColor(64, 255, 64)
                .build()
        );
    }
    // d is for delta (change)
    // unrelated to my ops being on delta team
    const dx = Math.abs(eP.x - pos.x);
    const dy = Math.abs(eP.y - pos.y);
    const dz = Math.abs(eP.z - pos.z);
    const d = Math.sqrt(dx ** 2 + dy ** 2 + dz ** 2);
    if (dx > 200 || dz > 200) {
        Chat.log(e.getType());
        Chat.log(eP);
        Chat.log(d.toFixed(1) + " blocks away");
        Chat.log("--------");
    }
}
