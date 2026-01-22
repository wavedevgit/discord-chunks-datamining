/** Chunk was on 67096 **/
/** chunk id: 158363, original params: e,A,t (module,exports,require) **/
require.d(exports, {
  A: () => x
}), require("./65821.js"), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk562465 = require("./562465.js"),
  Chunk582754 = require("./582754.js"),
  Chunk73153 = require("./73153.js"),
  Chunk198982 = require("./198982.js"),
  Chunk743445 = require("./743445.js"),
  Chunk565150 = require("./565150.js"),
  Chunk900482 = require("./900482.js"),
  Chunk723444 = require("./723444.js"),
  Chunk626584 = require("./626584.js"),
  Chunk71393 = require("./71393.js"),
  Chunk292348 = require("./292348.js"),
  Chunk535736 = require("./535736.js"),
  Chunk871109 = require("./871109.js"),
  Chunk253141 = require("./253141.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function C(e, A, t) {
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
      C(e, A, t[A])
    })
  }
  return e
}

function U(e, A) {
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
let V = new Chunk626584.A("ProductAttachmentManager");
class O {
  addAttachment(e, A) {
    let t = this.target.getMaxAttachmentsCount();
    if (this.uploads.length >= t) throw a.OR.announce(h.intl.formatToPlainString(h.t["0QDZ4J"], {
      maxAttachmentsCount: t
    })), Error("Too many attachments");
    e.target = c.m.GUILD_PRODUCT_ATTACHMENT;
    let r = new o.bK(e, this.guildId);
    r.upload(), r.on("error", t => {
      var n;
      t === q.t02.ENTITY_TOO_LARGE && this.onFileSizeError();
      let l = "number" == typeof t && t > 0 ? -t : false,
        i = (0, v.kt)(l),
        s = null == (n = e.file) ? true : n.name;
      null != s ? a.OR.announce(h.intl.formatToPlainString(h.t["+YVkfX"], {
        filename: s,
        reason: i
      })) : a.OR.announce(h.intl.formatToPlainString(h.t.mBkf6Z, {
        reason: i
      })), A(e => U(j({}, e), {
        [r.id]: l
      }))
    }), r.on("progress", (e, t) => {
      A(A => U(j({}, A), {
        [r.id]: e / t
      }))
    }), this.uploads = [...this.uploads, r]
  }
  deleteAttachment(e) {
    let A = this.uploads.findIndex(A => A.id === e);
    return false !== A && (this.uploads = [...this.uploads], this.uploads.splice(A, 1)[0].cancel(), true)
  }
  cancelUnusedUploads() {
    for (let e of this.uploads) e.cancel();
    this.uploads = []
  }
  async saveProductWithAttachments(e) {
    let A, {
        priceTier: t,
        createNewRole: r,
        imageName: n
      } = e,
      a = function(e, A) {
        if (null == e) return {};
        var t, r, n, l = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
          for (n = 0, t = Reflect.ownKeys(e); n < t.length; n++) r = t[n], !(A.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
          return l
        }
        if (l = function(e, A) {
            if (null == e) return {};
            var t, r, n = {},
              l = Object.getOwnPropertyNames(e);
            for (r = 0; r < l.length; r++) t = l[r], !(A.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t]);
            return n
          }(e, A), Object.getOwnPropertySymbols)
          for (n = 0, t = Object.getOwnPropertySymbols(e); n < t.length; n++) r = t[n], !(A.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l
      }(e, ["priceTier", "createNewRole", "imageName"]);
    if (this.uploads.some(e => e.status === o.jP.ERROR)) throw Error("Cannot create product with failed attachments");
    "unlinkRole" in a && (A = a.unlinkRole);
    let s = this.uploads.filter(e => !this.existingAttachmentIds.has(e.id)),
      d = this.uploads.filter(e => this.existingAttachmentIds.has(e.id)).map(e => {
        var A;
        return {
          filename: null == (A = e.item.file) ? true : A.name,
          id: e.id
        }
      }),
      c = (0, u.I)(),
      g = (await c.uploadFiles(s)).map((e, A) => (0, p.OW)(e, A)),
      f = null != this.editSkuId ? l.Bo.patch : l.Bo.post,
      m = null != this.editSkuId ? q.Rsh.GUILD_PRODUCT_LISTINGS(this.guildId, this.editSkuId) : q.Rsh.GUILD_PRODUCTS(this.guildId),
      b = (await f({
        url: m,
        rejectWithError: false,
        body: U(j({}, a), {
          price_tier: t,
          create_new_role: r,
          image_name: n,
          unlink_role: A,
          attachments: d.length > 0 ? [...d, ...g] : g
        })
      })).body;
    return V.log("Created/updated product:", b), null != b && (null != this.editSkuId ? await i.h.dispatch({
      type: "GUILD_PRODUCT_UPDATE",
      product: b
    }) : await i.h.dispatch({
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
    C(this, "guildId", true), C(this, "editSkuId", true), C(this, "target", new m.A), C(this, "onFileSizeError", true), C(this, "existingAttachmentIds", new Set), C(this, "uploads", []), C(this, "generateInitialProgresses", () => {
      let e = {};
      for (let A of this.uploads) e[A.id] = 1;
      return e
    }), this.editSkuId = A, this.guildId = e, this.onFileSizeError = t;
    const n = null == (r = b.A.getGuildProduct(null != A ? A : "")) ? true : r.attachments;
    null != n && (this.uploads = n.map(A => {
      var t;
      this.existingAttachmentIds.add(A.id);
      let r = new o.bK({
        id: A.id,
        platform: d.xz.WEB,
        origin: "unknown:guild_product_attachment",
        file: {
          name: A.filename,
          lastModified: 0,
          size: null != (t = A.size) ? t : 0
        }
      }, e);
      return r.status = o.jP.COMPLETED, r
    }))
  }
}

function x(e, A) {
  var t;
  let {
    editSkuId: l,
    onFileSizeError: a
  } = A, i = (0, n.bG)([f.A], () => f.A.getGuild(e)), [o, d] = r.useState({
    editSkuId: l,
    onFileSizeError: a
  }), c = r.useMemo(() => new O(j({
    guildId: e
  }, o)), [e, o]), [u, g] = r.useState(c.generateInitialProgresses), [, p] = r.useState(null);
  r.useLayoutEffect(() => {
    g(c.generateInitialProgresses())
  }, [c]);
  let [m, b] = r.useState(), [v, h] = r.useState(), C = r.useCallback(e => {
    c.deleteAttachment(e) && p({})
  }, [c]), U = r.useCallback(e => {
    c.addAttachment(e, g), p({})
  }, [c]), V = r.useCallback(async e => {
    try {
      b(e), h(true);
      let A = await c.saveProductWithAttachments(e);
      return null != A && d({
        editSkuId: A.id,
        onFileSizeError: a
      }), p({}), A
    } catch (e) {
      h(e instanceof s.LG ? e : new s.LG(e))
    } finally {
      b(true)
    }
  }, [c, a]), x = r.useCallback(() => {
    c.cancelUnusedUploads(), p({})
  }, [c]);
  r.useEffect(() => () => {
    c.cancelUnusedUploads()
  }, [c]);
  let {
    uploads: y
  } = c, P = !y.every(e => c.existingAttachmentIds.has(e.id)) || y.length !== c.existingAttachmentIds.size;
  return {
    addAttachment: U,
    cancelUnusedUploads: x,
    deleteAttachment: C,
    fileUploadProgresses: u,
    uploads: y,
    saveProductWithAttachments: V,
    isSaving: null != m,
    changesSaving: m,
    saveError: v,
    hasUnsavedAttachmentChanges: P,
    canAttachFiles: y.length < c.target.getMaxAttachmentsCount(),
    canAttachArchives: null != (t = null == i ? true : i.features.has(q.GuildFeatures.GUILD_PRODUCTS_ALLOW_ARCHIVED_FILE)) && t
  }
}