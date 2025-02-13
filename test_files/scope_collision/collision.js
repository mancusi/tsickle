/**
 * @fileoverview added by tsickle
 * Generated from: test_files/scope_collision/collision.ts
 * @suppress {checkTypes,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
goog.module('test_files.scope_collision.collision');
var module = module || { id: 'test_files/scope_collision/collision.ts' };
goog.require('tslib');
/**
 * @record
 */
function MyType() { }
/* istanbul ignore if */
if (false) {
    /** @type {string} */
    MyType.prototype.propA;
}
/** @typedef {!MyType} */
var MyTypeAlias;
((/**
 * @return {function(!MyType, !MyType): string}
 */
function () {
    // TODO(b/195232797): Should emit MyTypeAlias
    /**
     * @implements {MyType}
     */
    class MyType {
        constructor() {
            this.propA = 'a';
            this.propB = 'b';
        }
    }
    /* istanbul ignore if */
    if (false) {
        /** @type {string} */
        MyType.prototype.propA;
        /** @type {string} */
        MyType.prototype.propB;
    }
    // TODO(b/195232797): Should emit MyTypeAlias
    /**
     * @param {!MyType} a
     * @param {!MyType} b
     * @return {string}
     */
    function test(a, b) {
        return a.propA + b.propB;
    }
    return test;
}))();
