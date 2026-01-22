/** Chunk was on web.js **/
/** chunk id: 319317, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./938796.js");
var Chunk989349 = require("./989349.js"),
  i = require.n(Chunk989349),
  Chunk665260 = require("./665260.js"),
  Chunk315069 = require("./315069.js"),
  Chunk587895 = require("./587895.js"),
  Chunk557009 = require("./557009.js"),
  Chunk652215 = require("./652215.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = "master";
class f extends Chunk315069.A {
  static createFromServer(e) {
    return new f({
      id: e.application.id,
      branchId: e.branch_id,
      entitlements: null != e.entitlements ? e.entitlements.map(e => l.A.createFromServer(e)) : [],
      branch: e.branch,
      flags: e.flags,
      createdAt: e.created_at,
      sku: {
        id: e.sku.id,
        type: e.sku.type,
        premium: e.sku.premium,
        preorderReleaseAt: null != e.sku.preorder_release_at ? i()(e.sku.preorder_release_at) : null,
        preorderApproximateReleaseDate: null != e.sku.preorder_approximate_release_date ? e.sku.preorder_approximate_release_date : null
      }
    })
  }
  static createForTestMode(e) {
    return new f({
      id: e.id,
      entitlements: [],
      branchId: e.branch.id,
      branch: e.branch,
      flags: c.hM6.ENTITLED,
      createdAt: e.branch.created_at,
      sku: {
        id: e.skuId,
        type: c.Puh.DURABLE_PRIMARY,
        premium: false
      },
      isTestMode: true
    })
  }
  getFlags() {
    return this.flags
  }
  hasFlag(e) {
    return a.Lt(this.flags, e)
  }
  isHidden() {
    return this.hasFlag(c.hM6.HIDDEN)
  }
  isLegacyOverlayEnabled() {
    return !this.hasFlag(c.hM6.OVERLAY_DISABLED)
  }
  isOverlayV3Enabled() {
    return !this.hasFlag(c.hM6.OVERLAY_V3_DISABLED)
  }
  isOverlayEnabled() {
    return this.isLegacyOverlayEnabled() || this.isOverlayV3Enabled()
  }
  isMasterBranch() {
    return this.branchId === this.id
  }
  isDiscordApplication() {
    returntrue
  }
  isEntitled(e, t) {
    return !!this.isTestMode || this.entitlements.some(n => n.isValid(e, t, this.branchId))
  }
  isPreorder() {
    return null != this.sku.preorderReleaseAt || null != this.sku.preorderApproximateReleaseDate
  }
  getDistributor() {
    return c.d3x.DISCORD
  }
  getBranchName() {
    return null != this.branch ? this.branch.name : d
  }
  getBranchedName(e) {
    return this.isMasterBranch() || null == this.branch ? e.name : "".concat(e.name, " (").concat(this.branch.name, ")")
  }
  getSkuIdForAnalytics() {
    return this.sku.id
  }
  getAnalyticsData() {
    let e = o.A.getApplication(this.id);
    return {
      application_id: null != e ? e.id : null,
      application_name: null != e ? e.name : null,
      sku_id: this.getSkuIdForAnalytics(),
      launcher_platform: this.getDistributor()
    }
  }
  constructor(e) {
    super(), u(this, "id", true), u(this, "branchId", true), u(this, "flags", true), u(this, "createdAt", true), u(this, "entitlements", true), u(this, "branch", true), u(this, "sku", true), u(this, "isTestMode", true), this.id = e.id, this.createdAt = e.createdAt, this.flags = e.flags, this.branchId = e.branchId, this.entitlements = e.entitlements, this.branch = e.branch, this.sku = e.sku, this.isTestMode = e.isTestMode || false
  }
}