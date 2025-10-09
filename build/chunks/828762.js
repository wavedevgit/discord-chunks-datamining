/** Chunk was on 73628 **/
/** chunk id: 828762, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  Z: () => O
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

function C(e, t, A) {
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
      r = Object.keys(A);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(A).filter(function(e) {
      return Object.getOwnPropertyDescriptor(A, e).enumerable
    }))), r.forEach(function(t) {
      C(e, t, A[t])
    })
  }
  return e
}

function U(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var A = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      A.push.apply(A, r)
    }
    return A
  })(Object(t)).forEach(function(A) {
    Object.defineProperty(e, A, Object.getOwnPropertyDescriptor(t, A))
  }), e
}
let x = new Chunk710845.Z("ProductAttachmentManager");
class V {
  addAttachment(e, t) {
    let A = this.target.getMaxAttachmentsCount();
    if (this.uploads.length >= A) throw l.uv.announce(b.intl.formatToPlainString(b.t["0QDZ4O"], {
      maxAttachmentsCount: A
    })), Error("Too many attachments");
    e.target = c.e.GUILD_PRODUCT_ATTACHMENT;
    let r = new s.nH(e, this.guildId);
    r.upload(), r.on("error", A => {
      var n;
      A === q.evJ.ENTITY_TOO_LARGE && this.onFileSizeError();
      let a = "number" == typeof A && A > 0 ? -A : false,
        i = (0, v.kg)(a),
        o = null == (n = e.file) ? true : n.name;
      null != o ? l.uv.announce(b.intl.formatToPlainString(b.t["+YVkfX"], {
        filename: o,
        reason: i
      })) : l.uv.announce(b.intl.formatToPlainString(b.t.mBkf6e, {
        reason: i
      })), t(e => U(j({}, e), {
        [r.id]: a
      }))
    }), r.on("progress", (e, A) => {
      t(t => U(j({}, t), {
        [r.id]: e / A
      }))
    }), this.uploads = [...this.uploads, r]
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
      createNewRole: r,
      imageName: n
    } = e, l = function(e, t) {
      if (null == e) return {};
      var A, r, n = function(e, t) {
        if (null == e) return {};
        var A, r, n = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++) A = a[r], t.indexOf(A) >= 0 || (n[A] = e[A]);
        return n
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) A = a[r], !(t.indexOf(A) >= 0) && Object.prototype.propertyIsEnumerable.call(e, A) && (n[A] = e[A])
      }
      return n
    }(e, ["priceTier", "createNewRole", "imageName"]);
    if (this.uploads.some(e => e.status === s.mw.ERROR)) throw Error("Cannot create product with failed attachments");
    "unlinkRole" in l && (t = l.unlinkRole);
    let o = this.uploads.filter(e => !this.existingAttachmentIds.has(e.id)),
      d = this.uploads.filter(e => this.existingAttachmentIds.has(e.id)).map(e => {
        var t;
        return {
          filename: null == (t = e.item.file) ? true : t.name,
          id: e.id
        }
      }),
      c = (0, u.F)(),
      g = (await c.uploadFiles(o)).map((e, t) => (0, p.B)(e, t)),
      f = null != this.editSkuId ? a.tn.patch : a.tn.post,
      m = null != this.editSkuId ? q.ANM.GUILD_PRODUCT_LISTINGS(this.guildId, this.editSkuId) : q.ANM.GUILD_PRODUCTS(this.guildId),
      h = (await f({
        url: m,
        rejectWithError: false,
        body: U(j({}, l), {
          price_tier: A,
          create_new_role: r,
          image_name: n,
          unlink_role: t,
          attachments: d.length > 0 ? [...d, ...g] : g
        })
      })).body;
    return x.log("Created/updated product:", h), null != h && (null != this.editSkuId ? await i.Z.dispatch({
      type: "GUILD_PRODUCT_UPDATE",
      product: h
    }) : await i.Z.dispatch({
      type: "GUILD_PRODUCT_CREATE",
      product: h
    })), h
  }
  constructor({
    guildId: e,
    editSkuId: t,
    onFileSizeError: A
  }) {
    var r;
    C(this, "guildId", true), C(this, "editSkuId", true), C(this, "target", new m.Z), C(this, "onFileSizeError", true), C(this, "existingAttachmentIds", new Set), C(this, "uploads", []), C(this, "generateInitialProgresses", () => {
      let e = {};
      for (let t of this.uploads) e[t.id] = 1;
      return e
    }), this.editSkuId = t, this.guildId = e, this.onFileSizeError = A;
    let n = null == (r = h.Z.getGuildProduct(null != t ? t : "")) ? true : r.attachments;
    null != n && (this.uploads = n.map(t => {
      var A;
      this.existingAttachmentIds.add(t.id);
      let r = new s.nH({
        id: t.id,
        platform: d.ow.WEB,
        origin: "unknown:guild_product_attachment",
        file: {
          name: t.filename,
          lastModified: 0,
          size: null != (A = t.size) ? A : 0
        }
      }, e);
      return r.status = s.mw.COMPLETED, r
    }))
  }
}

function O(e, t) {
  var A;
  let {
    editSkuId: a,
    onFileSizeError: l
  } = t, i = (0, n.e7)([f.Z], () => f.Z.getGuild(e)), [s, d] = r.useState({
    editSkuId: a,
    onFileSizeError: l
  }), c = r.useMemo(() => new V(j({
    guildId: e
  }, s)), [e, s]), [u, g] = r.useState(c.generateInitialProgresses), [, p] = r.useState(null);
  r.useLayoutEffect(() => {
    g(c.generateInitialProgresses())
  }, [c]);
  let [m, h] = r.useState(), [v, b] = r.useState(), C = r.useCallback(e => {
    c.deleteAttachment(e) && p({})
  }, [c]), U = r.useCallback(e => {
    c.addAttachment(e, g), p({})
  }, [c]), x = r.useCallback(async e => {
    try {
      h(e), b(true);
      let t = await c.saveProductWithAttachments(e);
      return null != t && d({
        editSkuId: t.id,
        onFileSizeError: l
      }), p({}), t
    } catch (e) {
      b(e instanceof o.Hx ? e : new o.Hx(e))
    } finally {
      h(true)
    }
  }, [c, l]), O = r.useCallback(() => {
    c.cancelUnusedUploads(), p({})
  }, [c]);
  r.useEffect(() => () => {
    c.cancelUnusedUploads()
  }, [c]);
  let {
    uploads: P
  } = c, F = !P.every(e => c.existingAttachmentIds.has(e.id)) || P.length !== c.existingAttachmentIds.size;
  return {
    addAttachment: U,
    cancelUnusedUploads: O,
    deleteAttachment: C,
    fileUploadProgresses: u,
    uploads: P,
    saveProductWithAttachments: x,
    isSaving: null != m,
    changesSaving: m,
    saveError: v,
    hasUnsavedAttachmentChanges: F,
    canAttachFiles: P.length < c.target.getMaxAttachmentsCount(),
    canAttachArchives: null != (A = null == i ? true : i.features.has(q.oNc.GUILD_PRODUCTS_ALLOW_ARCHIVED_FILE)) && A
  }
}