/** Chunk was on 83051 (7c4fd639e635ed2a.js) **/
r.d(t, {
  D: () => i
});

function i(e) {
  return e.map((e, t) => {
    var r, i;
    return {
      file: e.file,
      name: null !== (i = e.id) && void 0 !== i ? i : "attachment_".concat(t),
      filename: null === (r = e.file) || void 0 === r ? void 0 : r.name
    }
  })
}