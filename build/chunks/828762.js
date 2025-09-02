/** Chunk was on 73628 **/
/** chunk id: 828762, original params: A,e,t (module,exports,require) **/
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

function v(A, e, t) {
  return e in A ? Object.defineProperty(A, e, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : A[e] = t, A
}

function U(A) {
  for (var e = 1; e < arguments.length; e++) {
    var t = null != arguments[e] ? arguments[e] : {},
      n = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(A) {
      return Object.getOwnPropertyDescriptor(t, A).enumerable
    }))), n.forEach(function(e) {
      v(A, e, t[e])
    })
  }
  return A
}

function j(A, e) {
  return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(e)) : (function(A, e) {
    var t = Object.keys(A);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(A);
      t.push.apply(t, n)
    }
    return t
  })(Object(e)).forEach(function(t) {
    Object.defineProperty(A, t, Object.getOwnPropertyDescriptor(e, t))
  }), A
}
let x = new Chunk710845.Z("ProductAttachmentManager");
class V {
  addAttachment(A, e) {
    let t = this.target.getMaxAttachmentsCount();
    if (this.uploads.length >= t) throw l.uv.announce(C.intl.formatToPlainString(C.t["0QDZ4O"], {
      maxAttachmentsCount: t
    })), Error("Too many attachments");
    A.target = c.e.GUILD_PRODUCT_ATTACHMENT;
    let n = new s.nH(A, this.guildId);
    n.upload(), n.on("error", t => {
      var r;
      t === b.evJ.ENTITY_TOO_LARGE && this.onFileSizeError();
      let a = "number" == typeof t && t > 0 ? -t : false,
        i = (0, h.kg)(a),
        o = null == (r = A.file) ? true : r.name;
      null != o ? l.uv.announce(C.intl.formatToPlainString(C.t["+YVkfX"], {
        filename: o,
        reason: i
      })) : l.uv.announce(C.intl.formatToPlainString(C.t.mBkf6e, {
        reason: i
      })), e(A => j(U({}, A), {
        [n.id]: a
      }))
    }), n.on("progress", (A, t) => {
      e(e => j(U({}, e), {
        [n.id]: A / t
      }))
    }), this.uploads = [...this.uploads, n]
  }
  deleteAttachment(A) {
    let e = this.uploads.findIndex(e => e.id === A);
    return false !== e && (this.uploads = [...this.uploads], this.uploads.splice(e, 1)[0].cancel(), true)
  }
  cancelUnusedUploads() {
    for (let A of this.uploads) module.cancel();
    this.uploads = []
  }
  async saveProductWithAttachments(A) {
    let e;
    var {
      priceTier: t,
      createNewRole: n,
      imageName: r
    } = A, l = function(A, e) {
      if (null == A) return {};
      var t, n, r = function(A, e) {
        if (null == A) return {};
        var t, n, r = {},
          a = Object.keys(A);
        for (n = 0; n < a.length; n++) t = a[n], e.indexOf(t) >= 0 || (r[t] = A[t]);
        return r
      }(A, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(A);
        for (n = 0; n < a.length; n++) t = a[n], !(e.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(A, t) && (r[t] = A[t])
      }
      return r
    }(A, ["priceTier", "createNewRole", "imageName"]);
    if (this.uploads.some(A => A.status === s.mw.ERROR)) throw Error("Cannot create product with failed attachments");
    "unlinkRole" in l && (e = l.unlinkRole);
    let o = this.uploads.filter(A => !this.existingAttachmentIds.has(A.id)),
      d = this.uploads.filter(A => this.existingAttachmentIds.has(A.id)).map(A => {
        var e;
        return {
          filename: null == (e = A.item.file) ? true : e.name,
          id: A.id
        }
      }),
      c = (0, u.F)(),
      g = (await c.uploadFiles(o)).map((A, e) => (0, p.B)(A, e)),
      f = null != this.editSkuId ? a.tn.patch : a.tn.post,
      m = null != this.editSkuId ? b.ANM.GUILD_PRODUCT_LISTINGS(this.guildId, this.editSkuId) : b.ANM.GUILD_PRODUCTS(this.guildId),
      q = (await f({
        url: m,
        rejectWithError: false,
        body: j(U({}, l), {
          price_tier: t,
          create_new_role: n,
          image_name: r,
          unlink_role: e,
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
    guildId: A,
    editSkuId: e,
    onFileSizeError: t
  }) {
    var n;
    v(this, "guildId", true), v(this, "editSkuId", true), v(this, "target", new m.Z), v(this, "onFileSizeError", true), v(this, "existingAttachmentIds", new Set), v(this, "uploads", []), v(this, "generateInitialProgresses", () => {
      let A = {};
      for (let e of this.uploads) A[e.id] = 1;
      return A
    }), this.editSkuId = e, this.guildId = A, this.onFileSizeError = t;
    let r = null == (n = q.Z.getGuildProduct(null != e ? e : "")) ? true : n.attachments;
    null != r && (this.uploads = r.map(e => {
      var t;
      this.existingAttachmentIds.add(e.id);
      let n = new s.nH({
        id: e.id,
        platform: d.ow.WEB,
        origin: "unknown:guild_product_attachment",
        file: {
          name: e.filename,
          lastModified: 0,
          size: null != (t = e.size) ? t : 0
        }
      }, A);
      return n.status = s.mw.COMPLETED, n
    }))
  }
}

function P(A, e) {
  var t;
  let {
    editSkuId: a,
    onFileSizeError: l
  } = e, i = (0, r.e7)([f.Z], () => f.Z.getGuild(A)), [s, d] = n.useState({
    editSkuId: a,
    onFileSizeError: l
  }), c = n.useMemo(() => new V(U({
    guildId: A
  }, s)), [A, s]), [u, g] = n.useState(c.generateInitialProgresses), [, p] = n.useState(null);
  n.useLayoutEffect(() => {
    g(c.generateInitialProgresses())
  }, [c]);
  let [m, q] = n.useState(), [h, C] = n.useState(), v = n.useCallback(A => {
    c.deleteAttachment(A) && p({})
  }, [c]), j = n.useCallback(A => {
    c.addAttachment(A, g), p({})
  }, [c]), x = n.useCallback(async A => {
    try {
      q(A), C(true);
      let e = await c.saveProductWithAttachments(A);
      return null != e && d({
        editSkuId: e.id,
        onFileSizeError: l
      }), p({}), e
    } catch (A) {
      C(A instanceof o.Hx ? A : new o.Hx({
        status: 400,
        body: {
          attachments: [A.message]
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
  } = c, F = !O.every(A => c.existingAttachmentIds.has(A.id)) || O.length !== c.existingAttachmentIds.size;
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
    canAttachArchives: null != (t = null == i ? true : i.features.has(b.oNc.GUILD_PRODUCTS_ALLOW_ARCHIVED_FILE)) && t
  }
}