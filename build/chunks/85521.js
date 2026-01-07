/** Chunk was on web.js **/
/** chunk id: 85521, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./997841.js");
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk95015 = require("./95015.js"),
  Chunk81825 = require("./81825.js"),
  Chunk812206 = require("./812206.js"),
  Chunk959546 = require("./959546.js"),
  Chunk981631 = require("./981631.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = "master";
class f extends Chunk81825.Z {
  static createFromServer(e) {
    return new f({
      id: e.application.id,
      branchId: e.branch_id,
      entitlements: null != e.entitlements ? e.entitlements.map(e => l.Z.createFromServer(e)) : [],
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
      flags: c.eHb.ENTITLED,
      createdAt: e.branch.created_at,
      sku: {
        id: e.skuId,
        type: c.epS.DURABLE_PRIMARY,
        premium: false
      },
      isTestMode: true
    })
  }
  getFlags() {
    return this.flags
  }
  hasFlag(e) {
    return a.yE(this.flags, e)
  }
  isHidden() {
    return this.hasFlag(c.eHb.HIDDEN)
  }
  isLegacyOverlayEnabled() {
    return !this.hasFlag(c.eHb.OVERLAY_DISABLED)
  }
  isOverlayV3Enabled() {
    return !this.hasFlag(c.eHb.OVERLAY_V3_DISABLED)
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
    return c.GQo.DISCORD
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
    let e = s.Z.getApplication(this.id);
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