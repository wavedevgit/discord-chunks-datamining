/** Chunk was on 83051 **/
i.d(t, {
  D: () => r
});

function r(e) {
  return e.map((e, t) => {
    var i, r;
    return {
      file: e.file,
      name: null !== (r = e.id) && void 0 !== r ? r : "attachment_".concat(t),
      filename: null === (i = e.file) || void 0 === i ? void 0 : i.name
    }
  })
}