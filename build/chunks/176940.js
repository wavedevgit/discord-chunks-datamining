/** Chunk was on 79477 **/
n.d(t, {
  Z: () => r
}), n(47120);
var l = n(131951);

function r() {
  return Object.entries(l.Z.getVideoDevices()).map(e => {
    let [t, n] = e;
    return {
      id: "camera:" + n.id,
      name: n.name,
      url: ""
    }
  })
}