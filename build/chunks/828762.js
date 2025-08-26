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

function U(e) {
  for (var A = 1; A < arguments.length; A++) {
    var t = null != arguments[A] ? arguments[A] : {},
      n = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), n.forEach(function(A) {
      v(e, A, t[A])
    })
  }
  return e
}

function j(e, A) {
  return A = null != A ? A : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(A)) : (function(e, A) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t.push.apply(t, n)
    }
    return t
  })(Object(A)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(A, t))
  }), e
}
let x = new Chunk710845.Z("ProductAttachmentManager");
class V {
  addAttachment(e, A) {
    let t = this.target.getMaxAttachmentsCount();
    if (this.uploads.length >= t) throw l.uv.announce(b.intl.formatToPlainString(b.t["0QDZ4O"], {
      maxAttachmentsCount: t
    })), Error("Too many attachments");
    e.target = c.e.GUILD_PRODUCT_ATTACHMENT;
    let n = new s.nH(e, this.guildId);
    n.upload(), n.on("error", t => {
      var r;
      t === C.evJ.ENTITY_TOO_LARGE && this.onFileSizeError();
      let a = "number" == typeof t && t > 0 ? -t : false,
        i = (0, h.kg)(a),
        o = null == (r = e.file) ? true : r.name;
      null != o ? l.uv.announce(b.intl.formatToPlainString(b.t["+YVkfX"], {
        filename: o,
        reason: i
      })) : l.uv.announce(b.intl.formatToPlainString(b.t.mBkf6e, {
        reason: i
      })), A(e => j(U({}, e), {
        [n.id]: a
      }))
    }), n.on("progress", (e, t) => {
      A(A => j(U({}, A), {
        [n.id]: e / t
      }))
    }), this.uploads = [...this.uploads, n]
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
      createNewRole: n,
      imageName: r
    } = e, l = function(e, A) {
      if (null == e) return {};
      var t, n, r = function(e, A) {
        if (null == e) return {};
        var t, n, r = {},
          a = Object.keys(e);
        for (n = 0; n < a.length; n++) t = a[n], A.indexOf(t) >= 0 || (r[t] = e[t]);
        return r
      }(e, A);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++) t = a[n], !(A.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
      }
      return r
    }(e, ["priceTier", "createNewRole", "imageName"]);
    if (this.uploads.some(e => e.status === s.mw.ERROR)) throw Error("Cannot create product with failed attachments");
    "unlinkRole" in l && (A = l.unlinkRole);
    let o = this.uploads.filter(e => !this.existingAttachmentIds.has(e.id)),
      d = this.uploads.filter(e => this.existingAttachmentIds.has(e.id)).map(e => {
        var A;
        return {
          filename: null == (A = e.item.file) ? true : A.name,
          id: e.id
        }
      }),
      c = (0, u.F)(),
      g = (await c.uploadFiles(o)).map((e, A) => (0, p.B)(e, A)),
      f = null != this.editSkuId ? a.tn.patch : a.tn.post,
      m = null != this.editSkuId ? C.ANM.GUILD_PRODUCT_LISTINGS(this.guildId, this.editSkuId) : C.ANM.GUILD_PRODUCTS(this.guildId),
      q = (await f({
        url: m,
        rejectWithError: false,
        body: j(U({}, l), {
          price_tier: t,
          create_new_role: n,
          image_name: r,
          unlink_role: A,
          attachments: d.length > 0 ? [...d, ...g] : g
        })
      })).body;
    return x.log("Created/updated product:", q), null != q && (null != this.editSkuId ? await i.Z.dispatch({
      type: "GUILD_PRODUCT_UPDATE",
      product: q
    }) : await i.Z.dispatch({
      type: "GUILD_PRODUCT_CREATE",
      product: q
    })), q
  }
  constructor({
    guildId: e,
    editSkuId: A,
    onFileSizeError: t
  }) {
    var n;
    v(this, "guildId", true), v(this, "editSkuId", true), v(this, "target", new m.Z), v(this, "onFileSizeError", true), v(this, "existingAttachmentIds", new Set), v(this, "uploads", []), v(this, "generateInitialProgresses", () => {
      let e = {};
      for (let A of this.uploads) e[A.id] = 1;
      return e
    }), this.editSkuId = A, this.guildId = e, this.onFileSizeError = t;
    let r = null == (n = q.Z.getGuildProduct(null != A ? A : "")) ? true : n.attachments;
    null != r && (this.uploads = r.map(A => {
      var t;
      this.existingAttachmentIds.add(A.id);
      let n = new s.nH({
        id: A.id,
        platform: d.ow.WEB,
        origin: "unknown:guild_product_attachment",
        file: {
          name: A.filename,
          lastModified: 0,
          size: null != (t = A.size) ? t : 0
        }
      }, e);
      return n.status = s.mw.COMPLETED, n
    }))
  }
}

function P(e, A) {
  var t;
  let {
    editSkuId: a,
    onFileSizeError: l
  } = A, i = (0, r.e7)([f.Z], () => f.Z.getGuild(e)), [s, d] = n.useState({
    editSkuId: a,
    onFileSizeError: l
  }), c = n.useMemo(() => new V(U({
    guildId: e
  }, s)), [e, s]), [u, g] = n.useState(c.generateInitialProgresses), [, p] = n.useState(null);
  n.useLayoutEffect(() => {
    g(c.generateInitialProgresses())
  }, [c]);
  let [m, q] = n.useState(), [h, b] = n.useState(), v = n.useCallback(e => {
    c.deleteAttachment(e) && p({})
  }, [c]), j = n.useCallback(e => {
    c.addAttachment(e, g), p({})
  }, [c]), x = n.useCallback(async e => {
    try {
      q(e), b(true);
      let A = await c.saveProductWithAttachments(e);
      return null != A && d({
        editSkuId: A.id,
        onFileSizeError: l
      }), p({}), A
    } catch (e) {
      b(e instanceof o.Hx ? e : new o.Hx({
        status: 400,
        body: {
          attachments: [e.message]
        }
      }))
    } finally {
      q(true)
    }
  }, [c, l]), P = n.useCallback(() => {
    c.cancelUnusedUploads(), p({})
  }, [c]);
  n.useEffect(() => () => {
    c.cancelUnusedUploads()
  }, [c]);
  let {
    uploads: O
  } = c, F = !O.every(e => c.existingAttachmentIds.has(e.id)) || O.length !== c.existingAttachmentIds.size;
  return {
    addAttachment: j,
    cancelUnusedUploads: P,
    deleteAttachment: v,
    fileUploadProgresses: u,
    uploads: O,
    saveProductWithAttachments: x,
    isSaving: null != m,
    changesSaving: m,
    saveError: h,
    hasUnsavedAttachmentChanges: F,
    canAttachFiles: O.length < c.target.getMaxAttachmentsCount(),
    canAttachArchives: null != (t = null == i ? true : i.features.has(C.oNc.GUILD_PRODUCTS_ALLOW_ARCHIVED_FILE)) && t
  }
}