/** Chunk was on 73628 **/
/** chunk id: 828762, original params: e,t,A (module,exports,require) **/
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

function v(e, t, A) {
  return t in e ? Object.defineProperty(e, t, {
    value: A,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = A, e
}

function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var A = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(A);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(A).filter(function(e) {
      return Object.getOwnPropertyDescriptor(A, e).enumerable
    }))), n.forEach(function(t) {
      v(e, t, A[t])
    })
  }
  return e
}

function x(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var A = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      A.push.apply(A, n)
    }
    return A
  })(Object(t)).forEach(function(A) {
    Object.defineProperty(e, A, Object.getOwnPropertyDescriptor(t, A))
  }), e
}
let U = new Chunk710845.Z("ProductAttachmentManager");
class V {
  addAttachment(e, t) {
    let A = this.target.getMaxAttachmentsCount();
    if (this.uploads.length >= A) throw a.uv.announce(C.intl.formatToPlainString(C.t["0QDZ4O"], {
      maxAttachmentsCount: A
    })), Error("Too many attachments");
    e.target = c.e.GUILD_PRODUCT_ATTACHMENT;
    let n = new s.nH(e, this.guildId);
    n.upload(), n.on("error", A => {
      var r;
      A === q.evJ.ENTITY_TOO_LARGE && this.onFileSizeError();
      let l = "number" == typeof A && A > 0 ? -A : false,
        o = (0, b.kg)(l),
        i = null == (r = e.file) ? true : r.name;
      null != i ? a.uv.announce(C.intl.formatToPlainString(C.t["+YVkfX"], {
        filename: i,
        reason: o
      })) : a.uv.announce(C.intl.formatToPlainString(C.t.mBkf6e, {
        reason: o
      })), t(e => x(j({}, e), {
        [n.id]: l
      }))
    }), n.on("progress", (e, A) => {
      t(t => x(j({}, t), {
        [n.id]: e / A
      }))
    }), this.uploads = [...this.uploads, n]
  }
  deleteAttachment(e) {
    let t = this.uploads.findIndex(t => t.id === e);
    return false !== t && (this.uploads = [...this.uploads], this.uploads.splice(t, 1)[0].cancel(), true)
  }
  cancelUnusedUploads() {
    for (let e of this.uploads) module.cancel();
    this.uploads = []
  }
  async saveProductWithAttachments(e) {
    let t;
    var {
      priceTier: A,
      createNewRole: n,
      imageName: r
    } = e, a = function(e, t) {
      if (null == e) return {};
      var A, n, r = function(e, t) {
        if (null == e) return {};
        var A, n, r = {},
          l = Object.keys(e);
        for (n = 0; n < l.length; n++) A = l[n], t.indexOf(A) >= 0 || (r[A] = e[A]);
        return r
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (n = 0; n < l.length; n++) A = l[n], !(t.indexOf(A) >= 0) && Object.prototype.propertyIsEnumerable.call(e, A) && (r[A] = e[A])
      }
      return r
    }(e, ["priceTier", "createNewRole", "imageName"]);
    if (this.uploads.some(e => e.status === s.mw.ERROR)) throw Error("Cannot create product with failed attachments");
    "unlinkRole" in a && (t = a.unlinkRole);
    let i = this.uploads.filter(e => !this.existingAttachmentIds.has(e.id)),
      d = this.uploads.filter(e => this.existingAttachmentIds.has(e.id)).map(e => {
        var t;
        return {
          filename: null == (t = e.item.file) ? true : t.name,
          id: e.id
        }
      }),
      c = (0, u.F)(),
      f = (await c.uploadFiles(i)).map((e, t) => (0, p.B)(e, t)),
      g = null != this.editSkuId ? l.tn.patch : l.tn.post,
      m = null != this.editSkuId ? q.ANM.GUILD_PRODUCT_LISTINGS(this.guildId, this.editSkuId) : q.ANM.GUILD_PRODUCTS(this.guildId),
      h = (await g({
        url: m,
        rejectWithError: false,
        body: x(j({}, a), {
          price_tier: A,
          create_new_role: n,
          image_name: r,
          unlink_role: t,
          attachments: d.length > 0 ? [...d, ...f] : f
        })
      })).body;
    return U.log("Created/updated product:", h), null != h && (null != this.editSkuId ? await o.Z.dispatch({
      type: "GUILD_PRODUCT_UPDATE",
      product: h
    }) : await o.Z.dispatch({
      type: "GUILD_PRODUCT_CREATE",
      product: h
    })), h
  }
  constructor({
    guildId: e,
    editSkuId: t,
    onFileSizeError: A
  }) {
    var n;
    v(this, "guildId", true), v(this, "editSkuId", true), v(this, "target", new m.Z), v(this, "onFileSizeError", true), v(this, "existingAttachmentIds", new Set), v(this, "uploads", []), v(this, "generateInitialProgresses", () => {
      let e = {};
      for (let t of this.uploads) e[t.id] = 1;
      return e
    }), this.editSkuId = t, this.guildId = e, this.onFileSizeError = A;
    let r = null == (n = h.Z.getGuildProduct(null != t ? t : "")) ? true : n.attachments;
    null != r && (this.uploads = r.map(t => {
      var A;
      this.existingAttachmentIds.add(t.id);
      let n = new s.nH({
        id: t.id,
        platform: d.ow.WEB,
        origin: "unknown:guild_product_attachment",
        file: {
          name: t.filename,
          lastModified: 0,
          size: null != (A = t.size) ? A : 0
        }
      }, e);
      return n.status = s.mw.COMPLETED, n
    }))
  }
}

function P(e, t) {
  var A;
  let {
    editSkuId: l,
    onFileSizeError: a
  } = t, o = (0, r.e7)([g.Z], () => g.Z.getGuild(e)), [s, d] = n.useState({
    editSkuId: l,
    onFileSizeError: a
  }), c = n.useMemo(() => new V(j({
    guildId: e
  }, s)), [e, s]), [u, f] = n.useState(c.generateInitialProgresses), [, p] = n.useState(null);
  n.useLayoutEffect(() => {
    f(c.generateInitialProgresses())
  }, [c]);
  let [m, h] = n.useState(), [b, C] = n.useState(), v = n.useCallback(e => {
    c.deleteAttachment(e) && p({})
  }, [c]), x = n.useCallback(e => {
    c.addAttachment(e, f), p({})
  }, [c]), U = n.useCallback(async e => {
    try {
      h(e), C(true);
      let t = await c.saveProductWithAttachments(e);
      return null != t && d({
        editSkuId: t.id,
        onFileSizeError: a
      }), p({}), t
    } catch (e) {
      C(e instanceof i.Hx ? e : new i.Hx({
        status: 400,
        body: {
          attachments: [e.message]
        }
      }))
    } finally {
      h(true)
    }
  }, [c, a]), P = n.useCallback(() => {
    c.cancelUnusedUploads(), p({})
  }, [c]);
  n.useEffect(() => () => {
    c.cancelUnusedUploads()
  }, [c]);
  let {
    uploads: O
  } = c, I = !O.every(e => c.existingAttachmentIds.has(e.id)) || O.length !== c.existingAttachmentIds.size;
  return {
    addAttachment: x,
    cancelUnusedUploads: P,
    deleteAttachment: v,
    fileUploadProgresses: u,
    uploads: O,
    saveProductWithAttachments: U,
    isSaving: null != m,
    changesSaving: m,
    saveError: b,
    hasUnsavedAttachmentChanges: I,
    canAttachFiles: O.length < c.target.getMaxAttachmentsCount(),
    canAttachArchives: null != (A = null == o ? true : o.features.has(q.oNc.GUILD_PRODUCTS_ALLOW_ARCHIVED_FILE)) && A
  }
}