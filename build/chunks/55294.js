/** Chunk was on 44669 **/
/** chunk id: 55294, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b,
  N: () => y
});
var Chunk64700 = require("./64700.js"),
  Chunk942381 = require("./942381.js"),
  Chunk465532 = require("./465532.js"),
  Chunk843472 = require("./843472.js"),
  Chunk608299 = require("./608299.js"),
  Chunk23658 = require("./23658.jsx"),
  Chunk425059 = require("./425059.js"),
  Chunk218152 = require("./218152.jsx"),
  Chunk451909 = require("./451909.js"),
  Chunk31717 = require("./31717.js"),
  Chunk522602 = require("./522602.js"),
  Chunk393309 = require("./393309.js"),
  Chunk381941 = require("./381941.js"),
  Chunk985018 = require("./985018.jsx");

function b(e) {
  let {
    parentChannel: t,
    parentMessageId: n,
    threadSettings: l,
    privateThreadMode: c,
    location: u,
    onThreadCreated: b,
    useDefaultThreadName: A
  } = e, y = r.useCallback((e, t, n, r) => {
    s.A.sendMessage(e.id, d.Ay.parse(e, n), true, {
      eagerDispatch: false,
      location: f.Hx.THREAD_CREATION,
      stickerIds: r,
      attachmentsToUpload: t,
      onAttachmentUploadError: (r, l, s, c) => {
        var u;
        (0, o.openUploadError)({
          title: m.intl.string(m.t.B3vFdU),
          help: null != (u = null == c ? true : c.message) ? u : m.intl.string(m.t.zMEjJg)
        }), "" !== n && "" === p.A.getDraft(e.id, p.C.FirstThreadMessage) && i.A.saveDraft(e.id, n, p.C.FirstThreadMessage), 0 === h.A.getUploadCount(e.id, p.C.FirstThreadMessage) && a.A.setUploads({
          channelId: e.id,
          uploads: t,
          draftType: p.C.FirstThreadMessage
        })
      }
    })
  }, []);
  return (0, g.r$)({
    parentChannel: t,
    parentMessageId: n,
    threadSettings: l,
    privateThreadMode: c,
    location: u,
    onThreadCreated: b,
    useDefaultThreadName: A,
    uploadHandler: y
  })
}
async function A(e) {
  let t = new c.A,
    n = await t.uploadFiles(e);
  return {
    uploaderFile: t._file,
    files: n
  }
}

function y(e) {
  let {
    parentChannel: t
  } = e, {
    name: n,
    appliedTags: r
  } = (0, u.kU)(e => {
    let {
      name: t,
      appliedTags: n
    } = e;
    return {
      name: t,
      appliedTags: n
    }
  }, l.x);
  return (0, g.w0)({
    parentChannel: t,
    name: n,
    appliedTags: r,
    upload: A
  })
}