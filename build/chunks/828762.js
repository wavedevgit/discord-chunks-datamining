/** Chunk was on 73628 **/
/** chunk id: 828762, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./415506.js"), require("./388685.js");
var Chunk473749 = require("./473749.js"),
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

function U(e) {
  for (var t = 1; t < arguments.length; t++) {
    var A = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(A);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(A).filter(function(e) {
      return Object.getOwnPropertyDescriptor(A, e).enumerable
    }))), n.forEach(function(t) {
      C(e, t, A[t])
    })
  }
  return e
}

function j(e, t) {
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
let V = new Chunk710845.Z("ProductAttachmentManager");
class x {
  addAttachment(e, t) {
    let A = this.target.getMaxAttachmentsCount();
    if (this.uploads.length >= A) throw l.uv.announce(b.intl.formatToPlainString(b.t["0QDZ4J"], {
      maxAttachmentsCount: A
    })), Error("Too many attachments");
    e.target = c.e.GUILD_PRODUCT_ATTACHMENT;
    let n = new s.nH(e, this.guildId);
    n.upload(), n.on("error", A => {
      var r;
      A === q.evJ.ENTITY_TOO_LARGE && this.onFileSizeError();
      let a = "number" == typeof A && A > 0 ? -A : false,
        i = (0, h.kg)(a),
        o = null == (r = e.file) ? true : r.name;
      null != o ? l.uv.announce(b.intl.formatToPlainString(b.t["+YVkfX"], {
        filename: o,
        reason: i
      })) : l.uv.announce(b.intl.formatToPlainString(b.t.mBkf6Z, {
        reason: i
      })), t(e => j(U({}, e), {
        [n.id]: a
      }))
    }), n.on("progress", (e, A) => {
      t(t => j(U({}, t), {
        [n.id]: e / A
      }))
    }), this.uploads = [...this.uploads, n]
  }
  deleteAttachment(e) {
    let t = this.uploads.findIndex(t => t.id === e);
    return false !== t && (this.uploads = [...this.uploads], this.uploads.splice(t, 1)[0].cancel(), true)
  }
  cancelUnusedUploads() {
    for (let e of this.uploads) e.cancel();
    this.uploads = []
  }
  async saveProductWithAttachments(e) {
    let t;
    var {
      priceTier: A,
      createNewRole: n,
      imageName: r
    } = e, l = function(e, t) {
      if (null == e) return {};
      var A, n, r = function(e, t) {
        if (null == e) return {};
        var A, n, r = {},
          a = Object.keys(e);
        for (n = 0; n < a.length; n++) A = a[n], t.indexOf(A) >= 0 || (r[A] = e[A]);
        return r
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++) A = a[n], !(t.indexOf(A) >= 0) && Object.prototype.propertyIsEnumerable.call(e, A) && (r[A] = e[A])
      }
      return r
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
      f = (await c.uploadFiles(o)).map((e, t) => (0, p.B)(e, t)),
      g = null != this.editSkuId ? a.tn.patch : a.tn.post,
      m = null != this.editSkuId ? q.ANM.GUILD_PRODUCT_LISTINGS(this.guildId, this.editSkuId) : q.ANM.GUILD_PRODUCTS(this.guildId),
      v = (await g({
        url: m,
        rejectWithError: false,
        body: j(U({}, l), {
          price_tier: A,
          create_new_role: n,
          image_name: r,
          unlink_role: t,
          attachments: d.length > 0 ? [...d, ...f] : f
        })
      })).body;
    return V.log("Created/updated product:", v), null != v && (null != this.editSkuId ? await i.Z.dispatch({
      type: "GUILD_PRODUCT_UPDATE",
      product: v
    }) : await i.Z.dispatch({
      type: "GUILD_PRODUCT_CREATE",
      product: v
    })), v
  }
  constructor({
    guildId: e,
    editSkuId: t,
    onFileSizeError: A
  }) {
    var n;
    C(this, "guildId", true), C(this, "editSkuId", true), C(this, "target", new m.Z), C(this, "onFileSizeError", true), C(this, "existingAttachmentIds", new Set), C(this, "uploads", []), C(this, "generateInitialProgresses", () => {
      let e = {};
      for (let t of this.uploads) e[t.id] = 1;
      return e
    }), this.editSkuId = t, this.guildId = e, this.onFileSizeError = A;
    let r = null == (n = v.Z.getGuildProduct(null != t ? t : "")) ? true : n.attachments;
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

function O(e, t) {
  var A;
  let {
    editSkuId: a,
    onFileSizeError: l
  } = t, i = (0, r.e7)([g.Z], () => g.Z.getGuild(e)), [s, d] = n.useState({
    editSkuId: a,
    onFileSizeError: l
  }), c = n.useMemo(() => new x(U({
    guildId: e
  }, s)), [e, s]), [u, f] = n.useState(c.generateInitialProgresses), [, p] = n.useState(null);
  n.useLayoutEffect(() => {
    f(c.generateInitialProgresses())
  }, [c]);
  let [m, v] = n.useState(), [h, b] = n.useState(), C = n.useCallback(e => {
    c.deleteAttachment(e) && p({})
  }, [c]), j = n.useCallback(e => {
    c.addAttachment(e, f), p({})
  }, [c]), V = n.useCallback(async e => {
    try {
      v(e), b(true);
      let t = await c.saveProductWithAttachments(e);
      return null != t && d({
        editSkuId: t.id,
        onFileSizeError: l
      }), p({}), t
    } catch (e) {
      b(e instanceof o.Hx ? e : new o.Hx(e))
    } finally {
      v(true)
    }
  }, [c, l]), O = n.useCallback(() => {
    c.cancelUnusedUploads(), p({})
  }, [c]);
  n.useEffect(() => () => {
    c.cancelUnusedUploads()
  }, [c]);
  let {
    uploads: P
  } = c, F = !P.every(e => c.existingAttachmentIds.has(e.id)) || P.length !== c.existingAttachmentIds.size;
  return {
    addAttachment: j,
    cancelUnusedUploads: O,
    deleteAttachment: C,
    fileUploadProgresses: u,
    uploads: P,
    saveProductWithAttachments: V,
    isSaving: null != m,
    changesSaving: m,
    saveError: h,
    hasUnsavedAttachmentChanges: F,
    canAttachFiles: P.length < c.target.getMaxAttachmentsCount(),
    canAttachArchives: null != (A = null == i ? true : i.features.has(q.GuildFeatures.GUILD_PRODUCTS_ALLOW_ARCHIVED_FILE)) && A
  }
}