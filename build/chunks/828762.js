/** Chunk was on 73628 **/
/** chunk id: 828762, original params: e,A,t (module,exports,require) **/
require.d(exports, {
  Z: () => P
}), require("./415506.js"), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk399606 = require("./399606.js"),
  Chunk544891 = require("./544891.js"),
  Chunk780384 = require("./780384.js"),
  Chunk570140 = require("./570140.js"),
  Chunk881052 = require("./881052.js"),
  Chunk141795 = require("./141795.js"),
  Chunk476326 = require("./476326.js"),
  Chunk983544 = require("./983544.js"),
  Chunk9874 = require("./9874.js"),
  Chunk710845 = require("./710845.js"),
  Chunk430824 = require("./430824.js"),
  Chunk861990 = require("./861990.js"),
  Chunk277985 = require("./277985.js"),
  Chunk240864 = require("./240864.js"),
  Chunk863663 = require("./863663.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function v(e, A, t) {
  return A in e ? Object.defineProperty(e, A, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[A] = t, e
}

function j(e) {
  for (var A = 1; A < arguments.length; A++) {
    var t = null != arguments[A] ? arguments[A] : {},
      r = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), r.forEach(function(A) {
      v(e, A, t[A])
    })
  }
  return e
}

function x(e, A) {
  return A = null != A ? A : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(A)) : (function(e, A) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t.push.apply(t, r)
    }
    return t
  })(Object(A)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(A, t))
  }), e
}
let U = new Chunk710845.Z("ProductAttachmentManager");
class V {
  addAttachment(e, A) {
    let t = this.target.getMaxAttachmentsCount();
    if (this.uploads.length >= t) throw a.uv.announce(C.intl.formatToPlainString(C.t["0QDZ4O"], {
      maxAttachmentsCount: t
    })), Error("Too many attachments");
    e.target = c.e.GUILD_PRODUCT_ATTACHMENT;
    let r = new s.nH(e, this.guildId);
    r.upload(), r.on("error", t => {
      var n;
      t === h.evJ.ENTITY_TOO_LARGE && this.onFileSizeError();
      let l = "number" == typeof t && t > 0 ? -t : false,
        o = (0, q.kg)(l),
        i = null == (n = e.file) ? true : n.name;
      null != i ? a.uv.announce(C.intl.formatToPlainString(C.t["+YVkfX"], {
        filename: i,
        reason: o
      })) : a.uv.announce(C.intl.formatToPlainString(C.t.mBkf6e, {
        reason: o
      })), A(e => x(j({}, e), {
        [r.id]: l
      }))
    }), r.on("progress", (e, t) => {
      A(A => x(j({}, A), {
        [r.id]: e / t
      }))
    }), this.uploads = [...this.uploads, r]
  }
  deleteAttachment(e) {
    let A = this.uploads.findIndex(A => A.id === e);
    return false !== A && (this.uploads = [...this.uploads], this.uploads.splice(A, 1)[0].cancel(), true)
  }
  cancelUnusedUploads() {
    for (let e of this.uploads) module.cancel();
    this.uploads = []
  }
  async saveProductWithAttachments(e) {
    let A;
    var {
      priceTier: t,
      createNewRole: r,
      imageName: n
    } = e, a = function(e, A) {
      if (null == e) return {};
      var t, r, n = function(e, A) {
        if (null == e) return {};
        var t, r, n = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++) t = l[r], A.indexOf(t) >= 0 || (n[t] = e[t]);
        return n
      }(e, A);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) t = l[r], !(A.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t])
      }
      return n
    }(e, ["priceTier", "createNewRole", "imageName"]);
    if (this.uploads.some(e => e.status === s.mw.ERROR)) throw Error("Cannot create product with failed attachments");
    "unlinkRole" in a && (A = a.unlinkRole);
    let i = this.uploads.filter(e => !this.existingAttachmentIds.has(e.id)),
      d = this.uploads.filter(e => this.existingAttachmentIds.has(e.id)).map(e => {
        var A;
        return {
          filename: null == (A = e.item.file) ? true : A.name,
          id: e.id
        }
      }),
      c = (0, u.F)(),
      f = (await c.uploadFiles(i)).map((e, A) => (0, p.B)(e, A)),
      g = null != this.editSkuId ? l.tn.patch : l.tn.post,
      m = null != this.editSkuId ? h.ANM.GUILD_PRODUCT_LISTINGS(this.guildId, this.editSkuId) : h.ANM.GUILD_PRODUCTS(this.guildId),
      b = (await g({
        url: m,
        rejectWithError: false,
        body: x(j({}, a), {
          price_tier: t,
          create_new_role: r,
          image_name: n,
          unlink_role: A,
          attachments: d.length > 0 ? [...d, ...f] : f
        })
      })).body;
    return U.log("Created/updated product:", b), null != b && (null != this.editSkuId ? await o.Z.dispatch({
      type: "GUILD_PRODUCT_UPDATE",
      product: b
    }) : await o.Z.dispatch({
      type: "GUILD_PRODUCT_CREATE",
      product: b
    })), b
  }
  constructor({
    guildId: e,
    editSkuId: A,
    onFileSizeError: t
  }) {
    var r;
    v(this, "guildId", true), v(this, "editSkuId", true), v(this, "target", new m.Z), v(this, "onFileSizeError", true), v(this, "existingAttachmentIds", new Set), v(this, "uploads", []), v(this, "generateInitialProgresses", () => {
      let e = {};
      for (let A of this.uploads) e[A.id] = 1;
      return e
    }), this.editSkuId = A, this.guildId = e, this.onFileSizeError = t;
    let n = null == (r = b.Z.getGuildProduct(null != A ? A : "")) ? true : r.attachments;
    null != n && (this.uploads = n.map(A => {
      var t;
      this.existingAttachmentIds.add(A.id);
      let r = new s.nH({
        id: A.id,
        platform: d.ow.WEB,
        origin: "unknown:guild_product_attachment",
        file: {
          name: A.filename,
          lastModified: 0,
          size: null != (t = A.size) ? t : 0
        }
      }, e);
      return r.status = s.mw.COMPLETED, r
    }))
  }
}

function P(e, A) {
  var t;
  let {
    editSkuId: l,
    onFileSizeError: a
  } = A, o = (0, n.e7)([g.Z], () => g.Z.getGuild(e)), [s, d] = r.useState({
    editSkuId: l,
    onFileSizeError: a
  }), c = r.useMemo(() => new V(j({
    guildId: e
  }, s)), [e, s]), [u, f] = r.useState(c.generateInitialProgresses), [, p] = r.useState(null);
  r.useLayoutEffect(() => {
    f(c.generateInitialProgresses())
  }, [c]);
  let [m, b] = r.useState(), [q, C] = r.useState(), v = r.useCallback(e => {
    c.deleteAttachment(e) && p({})
  }, [c]), x = r.useCallback(e => {
    c.addAttachment(e, f), p({})
  }, [c]), U = r.useCallback(async e => {
    try {
      b(e), C(true);
      let A = await c.saveProductWithAttachments(e);
      return null != A && d({
        editSkuId: A.id,
        onFileSizeError: a
      }), p({}), A
    } catch (e) {
      C(e instanceof i.Hx ? e : new i.Hx({
        status: 400,
        body: {
          attachments: [e.message]
        }
      }))
    } finally {
      b(true)
    }
  }, [c, a]), P = r.useCallback(() => {
    c.cancelUnusedUploads(), p({})
  }, [c]);
  r.useEffect(() => () => {
    c.cancelUnusedUploads()
  }, [c]);
  let {
    uploads: O
  } = c, F = !O.every(e => c.existingAttachmentIds.has(e.id)) || O.length !== c.existingAttachmentIds.size;
  return {
    addAttachment: x,
    cancelUnusedUploads: P,
    deleteAttachment: v,
    fileUploadProgresses: u,
    uploads: O,
    saveProductWithAttachments: U,
    isSaving: null != m,
    changesSaving: m,
    saveError: q,
    hasUnsavedAttachmentChanges: F,
    canAttachFiles: O.length < c.target.getMaxAttachmentsCount(),
    canAttachArchives: null != (t = null == o ? true : o.features.has(h.oNc.GUILD_PRODUCTS_ALLOW_ARCHIVED_FILE)) && t
  }
}