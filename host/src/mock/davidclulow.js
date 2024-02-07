window.config = {
  /* MANDATORY div to anchor the component */
  brand: "davidclulow",
  selector: "#rxcApp",
  currencyFormat: {
    thousandSeparator: ",",
    decimalSeparator: ".",
    prefix: "$",
  },
  // showFramePlusLensesPrice replaces showBundlePrice
  layoutSettings: {
    showBundlePrice: true,
    showFramePlusLensesPrice: true,
    enableDigitalOptometry: false,
    showSavingsLabel: true,
  },

  /* MANDATORY lens data, example format https://rxc.luxottica.com/dev/v3.0.0/standalone/mock/lenses/eyeLensesMockResponse.json */
  lensesData: {
    "packages": [
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "269",
          "color": "Brown Transition",
          "productUPC": "DC_RB_Trans_Xtractive_Brown_Equalized_1-50_Premium",
          "thickness": "Slim",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780803",
          "treatmentFamily": "Transitions",
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Equalized",
          "upc": "DC_RB_Trans_Xtractive_Brown_Equalized_1-50_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-MC6",
                "partNumber": "Item_Service_DC_K-MC6",
                "catEntryId": "3074457345616848169"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-30B",
                "partNumber": "Item_Service_DC_K-30B",
                "catEntryId": "3074457345616780653"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              }
            ],
            "lens": {
              "offerPrice": "269",
              "name": "DC_RB_Trans_Xtractive_Brown_Equalized_1-50_Premium_SV",
              "partNumber": "DC_RB_Trans_Xtractive_Brown_Equalized_1-50_Premium_SV",
              "catEntryId": "3074457345616780803"
            }
          },
          "isBaseLens": null,
          "transition": "Xtractive",
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-4.00",
              "max": "+4.00"
            },
            "sph": {
              "min": "-12.00",
              "max": "+10.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "269",
          "insPrice": "269"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "349",
          "color": "Green Transition",
          "productUPC": "DC_RB_Green_Trans_Equalized_1-67_Premium",
          "thickness": "Extra-Thin",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780760",
          "treatmentFamily": "Transitions",
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Equalized",
          "upc": "DC_RB_Green_Trans_Equalized_1-67_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-MC6",
                "partNumber": "Item_Service_DC_K-MC6",
                "catEntryId": "3074457345616848169"
              }
            ],
            "lens": {
              "offerPrice": "349",
              "name": "DC_RB_Green_Trans_Equalized_1-67_Premium_SV",
              "partNumber": "DC_RB_Green_Trans_Equalized_1-67_Premium_SV",
              "catEntryId": "3074457345616780760"
            }
          },
          "isBaseLens": null,
          "transition": "Signature",
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-6.00",
              "max": "+6.00"
            },
            "sph": {
              "min": "-13.00",
              "max": "+9.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "349",
          "insPrice": "349"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "269",
          "color": "Emerald Transition",
          "productUPC": "DC_RB_Trans_Emerald_Equalized_1-50_Premium",
          "thickness": "Slim",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780788",
          "treatmentFamily": "Transitions",
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Equalized",
          "upc": "DC_RB_Trans_Emerald_Equalized_1-50_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-MC6",
                "partNumber": "Item_Service_DC_K-MC6",
                "catEntryId": "3074457345616848169"
              }
            ],
            "lens": {
              "offerPrice": "269",
              "name": "DC_RB_Trans_Emerald_Equalized_1-50_Premium_SV",
              "partNumber": "DC_RB_Trans_Emerald_Equalized_1-50_Premium_SV",
              "catEntryId": "3074457345616780788"
            }
          },
          "isBaseLens": null,
          "transition": "Signature",
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-4.00",
              "max": "+4.00"
            },
            "sph": {
              "min": "-12.00",
              "max": "+10.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "269",
          "insPrice": "269"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "309",
          "color": "Grey Transition",
          "productUPC": "DC_RB_Trans_Grey_Equalized_1-60_Premium",
          "thickness": "Premium-Thin",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780787",
          "treatmentFamily": "Transitions",
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Equalized",
          "upc": "DC_RB_Trans_Grey_Equalized_1-60_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-MC6",
                "partNumber": "Item_Service_DC_K-MC6",
                "catEntryId": "3074457345616848169"
              }
            ],
            "lens": {
              "offerPrice": "309",
              "name": "DC_RB_Trans_Grey_Equalized_1-60_Premium_SV",
              "partNumber": "DC_RB_Trans_Grey_Equalized_1-60_Premium_SV",
              "catEntryId": "3074457345616780787"
            }
          },
          "isBaseLens": null,
          "transition": "Signature",
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-6.00",
              "max": "+6.00"
            },
            "sph": {
              "min": "-13.00",
              "max": "+8.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "309",
          "insPrice": "309"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "309",
          "color": "Amethyst Transition",
          "productUPC": "DC_RB_Trans_Amethyst_Equalized_1-60_Premium",
          "thickness": "Premium-Thin",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780705",
          "treatmentFamily": "Transitions",
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Equalized",
          "upc": "DC_RB_Trans_Amethyst_Equalized_1-60_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-MC6",
                "partNumber": "Item_Service_DC_K-MC6",
                "catEntryId": "3074457345616848169"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              }
            ],
            "lens": {
              "offerPrice": "309",
              "name": "DC_RB_Trans_Amethyst_Equalized_1-60_Premium_SV",
              "partNumber": "DC_RB_Trans_Amethyst_Equalized_1-60_Premium_SV",
              "catEntryId": "3074457345616780705"
            }
          },
          "isBaseLens": null,
          "transition": "Signature",
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-6.00",
              "max": "+6.00"
            },
            "sph": {
              "min": "-13.00",
              "max": "+8.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "309",
          "insPrice": "309"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "269",
          "color": "Grey Transition",
          "productUPC": "DC_RB_Grey_Trans_Tuned_1-60_Premium",
          "thickness": "Premium-Thin",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780757",
          "treatmentFamily": "Transitions",
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Tuned",
          "upc": "DC_RB_Grey_Trans_Tuned_1-60_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              }
            ],
            "lens": {
              "offerPrice": "269",
              "name": "DC_RB_Grey_Trans_Tuned_1-60_Premium_SV",
              "partNumber": "DC_RB_Grey_Trans_Tuned_1-60_Premium_SV",
              "catEntryId": "3074457345616780757"
            }
          },
          "isBaseLens": null,
          "transition": "Signature",
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-2.00",
              "max": "+2.00"
            },
            "sph": {
              "min": "-6.00",
              "max": "+6.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "269",
          "insPrice": "269"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "349",
          "color": "Emerald Transition",
          "productUPC": "DC_RB_Emerald_Trans_Equalized_1-67_Premium",
          "thickness": "Extra-Thin",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780724",
          "treatmentFamily": "Transitions",
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Equalized",
          "upc": "DC_RB_Emerald_Trans_Equalized_1-67_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-MC6",
                "partNumber": "Item_Service_DC_K-MC6",
                "catEntryId": "3074457345616848169"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              }
            ],
            "lens": {
              "offerPrice": "349",
              "name": "DC_RB_Emerald_Trans_Equalized_1-67_Premium_SV",
              "partNumber": "DC_RB_Emerald_Trans_Equalized_1-67_Premium_SV",
              "catEntryId": "3074457345616780724"
            }
          },
          "isBaseLens": null,
          "transition": "Signature",
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-6.00",
              "max": "+6.00"
            },
            "sph": {
              "min": "-13.00",
              "max": "+9.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "349",
          "insPrice": "349"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "269",
          "color": "Amethyst Transition",
          "productUPC": "DC_RB_Trans_Amethyst_Equalized_1-50_Premium",
          "thickness": "Slim",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780691",
          "treatmentFamily": "Transitions",
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Equalized",
          "upc": "DC_RB_Trans_Amethyst_Equalized_1-50_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-MC6",
                "partNumber": "Item_Service_DC_K-MC6",
                "catEntryId": "3074457345616848169"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              }
            ],
            "lens": {
              "offerPrice": "269",
              "name": "DC_RB_Trans_Amethyst_Equalized_1-50_Premium_SV",
              "partNumber": "DC_RB_Trans_Amethyst_Equalized_1-50_Premium_SV",
              "catEntryId": "3074457345616780691"
            }
          },
          "isBaseLens": null,
          "transition": "Signature",
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-4.00",
              "max": "+4.00"
            },
            "sph": {
              "min": "-12.00",
              "max": "+10.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "269",
          "insPrice": "269"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "309",
          "color": "Amber Transition",
          "productUPC": "DC_RB_Trans_Amber_Equalized_1-60_Premium",
          "thickness": "Premium-Thin",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780793",
          "treatmentFamily": "Transitions",
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Equalized",
          "upc": "DC_RB_Trans_Amber_Equalized_1-60_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-MC6",
                "partNumber": "Item_Service_DC_K-MC6",
                "catEntryId": "3074457345616848169"
              }
            ],
            "lens": {
              "offerPrice": "309",
              "name": "DC_RB_Trans_Amber_Equalized_1-60_Premium_SV",
              "partNumber": "DC_RB_Trans_Amber_Equalized_1-60_Premium_SV",
              "catEntryId": "3074457345616780793"
            }
          },
          "isBaseLens": null,
          "transition": "Signature",
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-6.00",
              "max": "+6.00"
            },
            "sph": {
              "min": "-13.00",
              "max": "+8.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "309",
          "insPrice": "309"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "189",
          "color": "Green Transition",
          "productUPC": "DC_RB_Trans_Green_Tuned_1-50_Standard",
          "thickness": "Slim",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780756",
          "treatmentFamily": "Transitions",
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Tuned",
          "upc": "DC_RB_Trans_Green_Tuned_1-50_Standard_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              }
            ],
            "lens": {
              "offerPrice": "189",
              "name": "DC_RB_Trans_Green_Tuned_1-50_Standard_SV",
              "partNumber": "DC_RB_Trans_Green_Tuned_1-50_Standard_SV",
              "catEntryId": "3074457345616780756"
            }
          },
          "isBaseLens": null,
          "transition": "Signature",
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-2.00",
              "max": "+2.00"
            },
            "sph": {
              "min": "-4.00",
              "max": "+4.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Standard",
          "clen": null,
          "listPrice": "189",
          "insPrice": "189"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "349",
          "color": "Amethyst Transition",
          "productUPC": "DC_RB_Amethyst_Trans_Equalized_1-67_Premium",
          "thickness": "Extra-Thin",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780733",
          "treatmentFamily": "Transitions",
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Equalized",
          "upc": "DC_RB_Amethyst_Trans_Equalized_1-67_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-MC6",
                "partNumber": "Item_Service_DC_K-MC6",
                "catEntryId": "3074457345616848169"
              }
            ],
            "lens": {
              "offerPrice": "349",
              "name": "DC_RB_Amethyst_Trans_Equalized_1-67_Premium_SV",
              "partNumber": "DC_RB_Amethyst_Trans_Equalized_1-67_Premium_SV",
              "catEntryId": "3074457345616780733"
            }
          },
          "isBaseLens": null,
          "transition": "Signature",
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-6.00",
              "max": "+6.00"
            },
            "sph": {
              "min": "-13.00",
              "max": "+9.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "349",
          "insPrice": "349"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "349",
          "color": "Green Transition",
          "productUPC": "DC_RB_Green_Trans_Xtractive_Equalized_1-67_Premium",
          "thickness": "Extra-Thin",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780700",
          "treatmentFamily": "Transitions",
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Equalized",
          "upc": "DC_RB_Green_Trans_Xtractive_Equalized_1-67_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-30C",
                "partNumber": "Item_Service_DC_K-30C",
                "catEntryId": "3074457345616780662"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-MC6",
                "partNumber": "Item_Service_DC_K-MC6",
                "catEntryId": "3074457345616848169"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              }
            ],
            "lens": {
              "offerPrice": "349",
              "name": "DC_RB_Green_Trans_Xtractive_Equalized_1-67_Premium_SV",
              "partNumber": "DC_RB_Green_Trans_Xtractive_Equalized_1-67_Premium_SV",
              "catEntryId": "3074457345616780700"
            }
          },
          "isBaseLens": null,
          "transition": "Xtractive",
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-6.00",
              "max": "+6.00"
            },
            "sph": {
              "min": "-13.00",
              "max": "+9.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "349",
          "insPrice": "349"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "289",
          "color": null,
          "productUPC": "DC_RB_Clear_Bluelight_Equalized_1-67_Premium",
          "thickness": "Extra-Thin",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780673",
          "treatmentFamily": null,
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Equalized",
          "upc": "DC_RB_Clear_Bluelight_Equalized_1-67_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-MC6",
                "partNumber": "Item_Service_DC_K-MC6",
                "catEntryId": "3074457345616848169"
              }
            ],
            "lens": {
              "offerPrice": "289",
              "name": "DC_RB_Clear_Bluelight_Equalized_1-67_Premium_SV",
              "partNumber": "DC_RB_Clear_Bluelight_Equalized_1-67_Premium_SV",
              "catEntryId": "3074457345616780673"
            }
          },
          "isBaseLens": null,
          "transition": null,
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-6.00",
              "max": "+6.00"
            },
            "sph": {
              "min": "-13.00",
              "max": "+9.00"
            }
          },
          "blueLight": "Bluelight",
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "289",
          "insPrice": "289"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "169",
          "color": null,
          "productUPC": "DC_RB_Clear_Bluelight_Equalized_1-50_Standard",
          "thickness": "Slim",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780761",
          "treatmentFamily": null,
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Equalized",
          "upc": "DC_RB_Clear_Bluelight_Equalized_1-50_Standard_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-MC3",
                "partNumber": "Item_Service_DC_K-MC3",
                "catEntryId": "3074457345616780660"
              }
            ],
            "lens": {
              "offerPrice": "169",
              "name": "DC_RB_Clear_Bluelight_Equalized_1-50_Standard_SV",
              "partNumber": "DC_RB_Clear_Bluelight_Equalized_1-50_Standard_SV",
              "catEntryId": "3074457345616780761"
            }
          },
          "isBaseLens": null,
          "transition": null,
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-4.00",
              "max": "+4.00"
            },
            "sph": {
              "min": "-12.00",
              "max": "+10.00"
            }
          },
          "blueLight": "Bluelight",
          "antiReflective": "Standard",
          "clen": null,
          "listPrice": "169",
          "insPrice": "169"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "179",
          "color": null,
          "productUPC": "DC_RB_Clear_Equalized_1-50_Premium",
          "thickness": "Slim",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780693",
          "treatmentFamily": null,
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Equalized",
          "upc": "DC_RB_Clear_Equalized_1-50_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-MC6",
                "partNumber": "Item_Service_DC_K-MC6",
                "catEntryId": "3074457345616848169"
              }
            ],
            "lens": {
              "offerPrice": "179",
              "name": "DC_RB_Clear_Equalized_1-50_Premium_SV",
              "partNumber": "DC_RB_Clear_Equalized_1-50_Premium_SV",
              "catEntryId": "3074457345616780693"
            }
          },
          "isBaseLens": null,
          "transition": null,
          "rxValues": {
            "add": {
              "min": "+0.75",
              "max": "+3.50"
            },
            "cyl": {
              "min": "-4.00",
              "max": "+4.00"
            },
            "sph": {
              "min": "-12.00",
              "max": "+10.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "179",
          "insPrice": "179"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "269",
          "color": "Amber Transition",
          "productUPC": "DC_RB_Trans_Amber_Equalized_1-50_Premium",
          "thickness": "Slim",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780776",
          "treatmentFamily": "Transitions",
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Equalized",
          "upc": "DC_RB_Trans_Amber_Equalized_1-50_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-MC6",
                "partNumber": "Item_Service_DC_K-MC6",
                "catEntryId": "3074457345616848169"
              }
            ],
            "lens": {
              "offerPrice": "269",
              "name": "DC_RB_Trans_Amber_Equalized_1-50_Premium_SV",
              "partNumber": "DC_RB_Trans_Amber_Equalized_1-50_Premium_SV",
              "catEntryId": "3074457345616780776"
            }
          },
          "isBaseLens": null,
          "transition": "Signature",
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-4.00",
              "max": "+4.00"
            },
            "sph": {
              "min": "-12.00",
              "max": "+10.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "269",
          "insPrice": "269"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "269",
          "color": "Grey Transition",
          "productUPC": "DC_RB_Trans_Xtractive_Grey_Equalized_1-50_Premium",
          "thickness": "Slim",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780797",
          "treatmentFamily": "Transitions",
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Equalized",
          "upc": "DC_RB_Trans_Xtractive_Grey_Equalized_1-50_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-MC6",
                "partNumber": "Item_Service_DC_K-MC6",
                "catEntryId": "3074457345616848169"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-30A",
                "partNumber": "Item_Service_DC_K-30A",
                "catEntryId": "3074457345616780648"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              }
            ],
            "lens": {
              "offerPrice": "269",
              "name": "DC_RB_Trans_Xtractive_Grey_Equalized_1-50_Premium_SV",
              "partNumber": "DC_RB_Trans_Xtractive_Grey_Equalized_1-50_Premium_SV",
              "catEntryId": "3074457345616780797"
            }
          },
          "isBaseLens": null,
          "transition": "Xtractive",
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-4.00",
              "max": "+4.00"
            },
            "sph": {
              "min": "-12.00",
              "max": "+10.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "269",
          "insPrice": "269"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "269",
          "color": "Grey Transition",
          "productUPC": "DC_RB_Trans_Grey_Equalized_1-50_Premium",
          "thickness": "Slim",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780771",
          "treatmentFamily": "Transitions",
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Equalized",
          "upc": "DC_RB_Trans_Grey_Equalized_1-50_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-MC6",
                "partNumber": "Item_Service_DC_K-MC6",
                "catEntryId": "3074457345616848169"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              }
            ],
            "lens": {
              "offerPrice": "269",
              "name": "DC_RB_Trans_Grey_Equalized_1-50_Premium_SV",
              "partNumber": "DC_RB_Trans_Grey_Equalized_1-50_Premium_SV",
              "catEntryId": "3074457345616780771"
            }
          },
          "isBaseLens": null,
          "transition": "Signature",
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-4.00",
              "max": "+4.00"
            },
            "sph": {
              "min": "-12.00",
              "max": "+10.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "269",
          "insPrice": "269"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "349",
          "color": "Sapphire Transition",
          "productUPC": "DC_RB_Sapphire_Trans_Equalized_1-67_Premium",
          "thickness": "Extra-Thin",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780677",
          "treatmentFamily": "Transitions",
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Equalized",
          "upc": "DC_RB_Sapphire_Trans_Equalized_1-67_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-MC6",
                "partNumber": "Item_Service_DC_K-MC6",
                "catEntryId": "3074457345616848169"
              }
            ],
            "lens": {
              "offerPrice": "349",
              "name": "DC_RB_Sapphire_Trans_Equalized_1-67_Premium_SV",
              "partNumber": "DC_RB_Sapphire_Trans_Equalized_1-67_Premium_SV",
              "catEntryId": "3074457345616780677"
            }
          },
          "isBaseLens": null,
          "transition": "Signature",
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-6.00",
              "max": "+6.00"
            },
            "sph": {
              "min": "-13.00",
              "max": "+9.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "349",
          "insPrice": "349"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "349",
          "color": "Amber Transition",
          "productUPC": "DC_RB_Trans_Amber_Trans_Equalized_1-67_Premium",
          "thickness": "Extra-Thin",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780672",
          "treatmentFamily": "Transitions",
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Equalized",
          "upc": "DC_RB_Trans_Amber_Trans_Equalized_1-67_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-MC6",
                "partNumber": "Item_Service_DC_K-MC6",
                "catEntryId": "3074457345616848169"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              }
            ],
            "lens": {
              "offerPrice": "349",
              "name": "DC_RB_Trans_Amber_Trans_Equalized_1-67_Premium_SV",
              "partNumber": "DC_RB_Trans_Amber_Trans_Equalized_1-67_Premium_SV",
              "catEntryId": "3074457345616780672"
            }
          },
          "isBaseLens": null,
          "transition": "Signature",
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-6.00",
              "max": "+6.00"
            },
            "sph": {
              "min": "-13.00",
              "max": "+9.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "349",
          "insPrice": "349"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "229",
          "color": "Grey Transition",
          "productUPC": "DC_RB_Grey_Trans_Tuned_1-60_Standard",
          "thickness": "Premium-Thin",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780770",
          "treatmentFamily": "Transitions",
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Tuned",
          "upc": "DC_RB_Grey_Trans_Tuned_1-60_Standard_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              }
            ],
            "lens": {
              "offerPrice": "229",
              "name": "DC_RB_Grey_Trans_Tuned_1-60_Standard_SV",
              "partNumber": "DC_RB_Grey_Trans_Tuned_1-60_Standard_SV",
              "catEntryId": "3074457345616780770"
            }
          },
          "isBaseLens": null,
          "transition": "Signature",
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-2.00",
              "max": "+2.00"
            },
            "sph": {
              "min": "-6.00",
              "max": "+6.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Standard",
          "clen": null,
          "listPrice": "229",
          "insPrice": "229"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "269",
          "color": "Brown Transition",
          "productUPC": "DC_RB_Brown_Trans_Tuned_1-60_Premium",
          "thickness": "Premium-Thin",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780699",
          "treatmentFamily": "Transitions",
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Tuned",
          "upc": "DC_RB_Brown_Trans_Tuned_1-60_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              }
            ],
            "lens": {
              "offerPrice": "269",
              "name": "DC_RB_Brown_Trans_Tuned_1-60_Premium_SV",
              "partNumber": "DC_RB_Brown_Trans_Tuned_1-60_Premium_SV",
              "catEntryId": "3074457345616780699"
            }
          },
          "isBaseLens": null,
          "transition": "Signature",
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-2.00",
              "max": "+2.00"
            },
            "sph": {
              "min": "-6.00",
              "max": "+6.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "269",
          "insPrice": "269"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "219",
          "color": null,
          "productUPC": "DC_RB_Clear_Equalized_1-67_Standard",
          "thickness": "Extra-Thin",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780765",
          "treatmentFamily": null,
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Equalized",
          "upc": "DC_RB_Clear_Equalized_1-67_Standard_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-MC3",
                "partNumber": "Item_Service_DC_K-MC3",
                "catEntryId": "3074457345616780660"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              }
            ],
            "lens": {
              "offerPrice": "219",
              "name": "DC_RB_Clear_Equalized_1-67_Standard_SV",
              "partNumber": "DC_RB_Clear_Equalized_1-67_Standard_SV",
              "catEntryId": "3074457345616780765"
            }
          },
          "isBaseLens": null,
          "transition": null,
          "rxValues": {
            "add": {
              "min": "+0.75",
              "max": "+3.50"
            },
            "cyl": {
              "min": "-6.00",
              "max": "+6.00"
            },
            "sph": {
              "min": "-13.00",
              "max": "+9.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Standard",
          "clen": null,
          "listPrice": "219",
          "insPrice": "219"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "269",
          "color": "Sapphire Transition",
          "productUPC": "DC_RB_Trans_Sapphire_Equalized_1-50_Premium",
          "thickness": "Slim",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780801",
          "treatmentFamily": "Transitions",
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Equalized",
          "upc": "DC_RB_Trans_Sapphire_Equalized_1-50_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-MC6",
                "partNumber": "Item_Service_DC_K-MC6",
                "catEntryId": "3074457345616848169"
              }
            ],
            "lens": {
              "offerPrice": "269",
              "name": "DC_RB_Trans_Sapphire_Equalized_1-50_Premium_SV",
              "partNumber": "DC_RB_Trans_Sapphire_Equalized_1-50_Premium_SV",
              "catEntryId": "3074457345616780801"
            }
          },
          "isBaseLens": null,
          "transition": "Signature",
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-4.00",
              "max": "+4.00"
            },
            "sph": {
              "min": "-12.00",
              "max": "+10.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "269",
          "insPrice": "269"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "349",
          "color": "Brown Transition",
          "productUPC": "DC_RB_Brown_Trans_Equalized_1-67_Premium",
          "thickness": "Extra-Thin",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780772",
          "treatmentFamily": "Transitions",
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Equalized",
          "upc": "DC_RB_Brown_Trans_Equalized_1-67_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-MC6",
                "partNumber": "Item_Service_DC_K-MC6",
                "catEntryId": "3074457345616848169"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              }
            ],
            "lens": {
              "offerPrice": "349",
              "name": "DC_RB_Brown_Trans_Equalized_1-67_Premium_SV",
              "partNumber": "DC_RB_Brown_Trans_Equalized_1-67_Premium_SV",
              "catEntryId": "3074457345616780772"
            }
          },
          "isBaseLens": null,
          "transition": "Signature",
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-6.00",
              "max": "+6.00"
            },
            "sph": {
              "min": "-13.00",
              "max": "+9.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "349",
          "insPrice": "349"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "169",
          "color": null,
          "productUPC": "DC_RB_Clear_Bluelight_Tuned_1-50_Premium",
          "thickness": "Slim",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780751",
          "treatmentFamily": null,
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Tuned",
          "upc": "DC_RB_Clear_Bluelight_Tuned_1-50_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              }
            ],
            "lens": {
              "offerPrice": "169",
              "name": "DC_RB_Clear_Bluelight_Tuned_1-50_Premium_SV",
              "partNumber": "DC_RB_Clear_Bluelight_Tuned_1-50_Premium_SV",
              "catEntryId": "3074457345616780751"
            }
          },
          "isBaseLens": null,
          "transition": null,
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-2.00",
              "max": "+2.00"
            },
            "sph": {
              "min": "-5.00",
              "max": "+4.00"
            }
          },
          "blueLight": "Bluelight",
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "169",
          "insPrice": "169"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "129",
          "color": null,
          "productUPC": "DC_RB_Clear_Bluelight_Tuned_1-50_Standard",
          "thickness": "Slim",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780766",
          "treatmentFamily": null,
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Tuned",
          "upc": "DC_RB_Clear_Bluelight_Tuned_1-50_Standard_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              }
            ],
            "lens": {
              "offerPrice": "129",
              "name": "DC_RB_Clear_Bluelight_Tuned_1-50_Standard_SV",
              "partNumber": "DC_RB_Clear_Bluelight_Tuned_1-50_Standard_SV",
              "catEntryId": "3074457345616780766"
            }
          },
          "isBaseLens": null,
          "transition": null,
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-2.00",
              "max": "+2.00"
            },
            "sph": {
              "min": "-5.00",
              "max": "+4.00"
            }
          },
          "blueLight": "Bluelight",
          "antiReflective": "Standard",
          "clen": null,
          "listPrice": "129",
          "insPrice": "129"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "269",
          "color": "Brown Transition",
          "productUPC": "DC_RB_Trans_Brown_Equalized_1-50_Premium",
          "thickness": "Slim",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780722",
          "treatmentFamily": "Transitions",
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Equalized",
          "upc": "DC_RB_Trans_Brown_Equalized_1-50_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-MC6",
                "partNumber": "Item_Service_DC_K-MC6",
                "catEntryId": "3074457345616848169"
              }
            ],
            "lens": {
              "offerPrice": "269",
              "name": "DC_RB_Trans_Brown_Equalized_1-50_Premium_SV",
              "partNumber": "DC_RB_Trans_Brown_Equalized_1-50_Premium_SV",
              "catEntryId": "3074457345616780722"
            }
          },
          "isBaseLens": null,
          "transition": "Signature",
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-4.00",
              "max": "+4.00"
            },
            "sph": {
              "min": "-12.00",
              "max": "+10.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "269",
          "insPrice": "269"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "269",
          "color": "Green Transition",
          "productUPC": "DC_RB_Trans_Green_Equalized_1-50_Premium",
          "thickness": "Slim",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780689",
          "treatmentFamily": "Transitions",
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Equalized",
          "upc": "DC_RB_Trans_Green_Equalized_1-50_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-MC6",
                "partNumber": "Item_Service_DC_K-MC6",
                "catEntryId": "3074457345616848169"
              }
            ],
            "lens": {
              "offerPrice": "269",
              "name": "DC_RB_Trans_Green_Equalized_1-50_Premium_SV",
              "partNumber": "DC_RB_Trans_Green_Equalized_1-50_Premium_SV",
              "catEntryId": "3074457345616780689"
            }
          },
          "isBaseLens": null,
          "transition": "Signature",
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-4.00",
              "max": "+4.00"
            },
            "sph": {
              "min": "-12.00",
              "max": "+10.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "269",
          "insPrice": "269"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "209",
          "color": null,
          "productUPC": "DC_RB_Clear_Bluelight_Equalized_1-60_Standard",
          "thickness": "Premium-Thin",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780798",
          "treatmentFamily": null,
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Equalized",
          "upc": "DC_RB_Clear_Bluelight_Equalized_1-60_Standard_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-MC3",
                "partNumber": "Item_Service_DC_K-MC3",
                "catEntryId": "3074457345616780660"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              }
            ],
            "lens": {
              "offerPrice": "209",
              "name": "DC_RB_Clear_Bluelight_Equalized_1-60_Standard_SV",
              "partNumber": "DC_RB_Clear_Bluelight_Equalized_1-60_Standard_SV",
              "catEntryId": "3074457345616780798"
            }
          },
          "isBaseLens": null,
          "transition": null,
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-6.00",
              "max": "+6.00"
            },
            "sph": {
              "min": "-13.00",
              "max": "+8.00"
            }
          },
          "blueLight": "Bluelight",
          "antiReflective": "Standard",
          "clen": null,
          "listPrice": "209",
          "insPrice": "209"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "249",
          "color": null,
          "productUPC": "DC_RB_Clear_Bluelight_Equalized_1-67_Standard",
          "thickness": "Extra-Thin",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780696",
          "treatmentFamily": null,
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Equalized",
          "upc": "DC_RB_Clear_Bluelight_Equalized_1-67_Standard_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-MC3",
                "partNumber": "Item_Service_DC_K-MC3",
                "catEntryId": "3074457345616780660"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              }
            ],
            "lens": {
              "offerPrice": "249",
              "name": "DC_RB_Clear_Bluelight_Equalized_1-67_Standard_SV",
              "partNumber": "DC_RB_Clear_Bluelight_Equalized_1-67_Standard_SV",
              "catEntryId": "3074457345616780696"
            }
          },
          "isBaseLens": null,
          "transition": null,
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-6.00",
              "max": "+6.00"
            },
            "sph": {
              "min": "-13.00",
              "max": "+9.00"
            }
          },
          "blueLight": "Bluelight",
          "antiReflective": "Standard",
          "clen": null,
          "listPrice": "249",
          "insPrice": "249"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "99",
          "color": null,
          "productUPC": "DC_RB_Clear_Tuned_1-50_Standard",
          "thickness": "Slim",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780679",
          "treatmentFamily": null,
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Tuned",
          "upc": "DC_RB_Clear_Tuned_1-50_Standard_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              }
            ],
            "lens": {
              "offerPrice": "99",
              "name": "DC_RB_Clear_Tuned_1-50_Standard_SV",
              "partNumber": "DC_RB_Clear_Tuned_1-50_Standard_SV",
              "catEntryId": "3074457345616780679"
            }
          },
          "isBaseLens": null,
          "transition": null,
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-2.00",
              "max": "+2.00"
            },
            "sph": {
              "min": "-6.00",
              "max": "+6.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Standard",
          "clen": null,
          "listPrice": "99",
          "insPrice": "99"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "209",
          "color": null,
          "productUPC": "DC_RB_Clear_Bluelight_Tuned_1-60_Premium",
          "thickness": "Premium-Thin",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780780",
          "treatmentFamily": null,
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Tuned",
          "upc": "DC_RB_Clear_Bluelight_Tuned_1-60_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              }
            ],
            "lens": {
              "offerPrice": "209",
              "name": "DC_RB_Clear_Bluelight_Tuned_1-60_Premium_SV",
              "partNumber": "DC_RB_Clear_Bluelight_Tuned_1-60_Premium_SV",
              "catEntryId": "3074457345616780780"
            }
          },
          "isBaseLens": null,
          "transition": null,
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-2.00",
              "max": "+2.00"
            },
            "sph": {
              "min": "-6.00",
              "max": "+6.00"
            }
          },
          "blueLight": "Bluelight",
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "209",
          "insPrice": "209"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "229",
          "color": "Green Transition",
          "productUPC": "DC_RB_Green_Trans_Tuned_1-60_Standard",
          "thickness": "Premium-Thin",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780681",
          "treatmentFamily": "Transitions",
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Tuned",
          "upc": "DC_RB_Green_Trans_Tuned_1-60_Standard_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              }
            ],
            "lens": {
              "offerPrice": "229",
              "name": "DC_RB_Green_Trans_Tuned_1-60_Standard_SV",
              "partNumber": "DC_RB_Green_Trans_Tuned_1-60_Standard_SV",
              "catEntryId": "3074457345616780681"
            }
          },
          "isBaseLens": null,
          "transition": "Signature",
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-2.00",
              "max": "+2.00"
            },
            "sph": {
              "min": "-6.00",
              "max": "+6.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Standard",
          "clen": null,
          "listPrice": "229",
          "insPrice": "229"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "139",
          "color": null,
          "productUPC": "DC_RB_Clear_Equalized_1-50_Standard",
          "thickness": "Slim",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780702",
          "treatmentFamily": null,
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Equalized",
          "upc": "DC_RB_Clear_Equalized_1-50_Standard_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-MC3",
                "partNumber": "Item_Service_DC_K-MC3",
                "catEntryId": "3074457345616780660"
              }
            ],
            "lens": {
              "offerPrice": "139",
              "name": "DC_RB_Clear_Equalized_1-50_Standard_SV",
              "partNumber": "DC_RB_Clear_Equalized_1-50_Standard_SV",
              "catEntryId": "3074457345616780702"
            }
          },
          "isBaseLens": null,
          "transition": null,
          "rxValues": {
            "add": {
              "min": "+0.75",
              "max": "+3.50"
            },
            "cyl": {
              "min": "-4.00",
              "max": "+4.00"
            },
            "sph": {
              "min": "-12.00",
              "max": "+10.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Standard",
          "clen": null,
          "listPrice": "139",
          "insPrice": "139"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "309",
          "color": "Brown Transition",
          "productUPC": "DC_RB_Trans_Xtractive_Brown_Equalized_1-60_Premium",
          "thickness": "Premium-Thin",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780804",
          "treatmentFamily": "Transitions",
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Equalized",
          "upc": "DC_RB_Trans_Xtractive_Brown_Equalized_1-60_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-MC6",
                "partNumber": "Item_Service_DC_K-MC6",
                "catEntryId": "3074457345616848169"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-30B",
                "partNumber": "Item_Service_DC_K-30B",
                "catEntryId": "3074457345616780653"
              }
            ],
            "lens": {
              "offerPrice": "309",
              "name": "DC_RB_Trans_Xtractive_Brown_Equalized_1-60_Premium_SV",
              "partNumber": "DC_RB_Trans_Xtractive_Brown_Equalized_1-60_Premium_SV",
              "catEntryId": "3074457345616780804"
            }
          },
          "isBaseLens": null,
          "transition": "Xtractive",
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-6.00",
              "max": "+6.00"
            },
            "sph": {
              "min": "-13.00",
              "max": "+8.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "309",
          "insPrice": "309"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "139",
          "color": null,
          "productUPC": "DC_RB_Clear_Tuned_1-60_Standard",
          "thickness": "Premium-Thin",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780704",
          "treatmentFamily": null,
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Tuned",
          "upc": "DC_RB_Clear_Tuned_1-60_Standard_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              }
            ],
            "lens": {
              "offerPrice": "139",
              "name": "DC_RB_Clear_Tuned_1-60_Standard_SV",
              "partNumber": "DC_RB_Clear_Tuned_1-60_Standard_SV",
              "catEntryId": "3074457345616780704"
            }
          },
          "isBaseLens": null,
          "transition": null,
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-2.00",
              "max": "+2.00"
            },
            "sph": {
              "min": "-8.00",
              "max": "+6.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Standard",
          "clen": null,
          "listPrice": "139",
          "insPrice": "139"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "259",
          "color": null,
          "productUPC": "DC_RB_Clear_Equalized_1-67_Premium",
          "thickness": "Extra-Thin",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780749",
          "treatmentFamily": null,
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Equalized",
          "upc": "DC_RB_Clear_Equalized_1-67_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-MC6",
                "partNumber": "Item_Service_DC_K-MC6",
                "catEntryId": "3074457345616848169"
              }
            ],
            "lens": {
              "offerPrice": "259",
              "name": "DC_RB_Clear_Equalized_1-67_Premium_SV",
              "partNumber": "DC_RB_Clear_Equalized_1-67_Premium_SV",
              "catEntryId": "3074457345616780749"
            }
          },
          "isBaseLens": null,
          "transition": null,
          "rxValues": {
            "add": {
              "min": "+0.75",
              "max": "+3.50"
            },
            "cyl": {
              "min": "-6.00",
              "max": "+6.00"
            },
            "sph": {
              "min": "-13.00",
              "max": "+9.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "259",
          "insPrice": "259"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "229",
          "color": "Brown Transition",
          "productUPC": "DC_RB_Brown_Trans_Tuned_1-60_Standard",
          "thickness": "Premium-Thin",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780709",
          "treatmentFamily": "Transitions",
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Tuned",
          "upc": "DC_RB_Brown_Trans_Tuned_1-60_Standard_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              }
            ],
            "lens": {
              "offerPrice": "229",
              "name": "DC_RB_Brown_Trans_Tuned_1-60_Standard_SV",
              "partNumber": "DC_RB_Brown_Trans_Tuned_1-60_Standard_SV",
              "catEntryId": "3074457345616780709"
            }
          },
          "isBaseLens": null,
          "transition": "Signature",
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-2.00",
              "max": "+2.00"
            },
            "sph": {
              "min": "-6.00",
              "max": "+6.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Standard",
          "clen": null,
          "listPrice": "229",
          "insPrice": "229"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "309",
          "color": "Green Transition",
          "productUPC": "DC_RB_Trans_Xtractive_Green_Equalized_1-60_Premium",
          "thickness": "Premium-Thin",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780806",
          "treatmentFamily": "Transitions",
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Equalized",
          "upc": "DC_RB_Trans_Xtractive_Green_Equalized_1-60_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-30C",
                "partNumber": "Item_Service_DC_K-30C",
                "catEntryId": "3074457345616780662"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-MC6",
                "partNumber": "Item_Service_DC_K-MC6",
                "catEntryId": "3074457345616848169"
              }
            ],
            "lens": {
              "offerPrice": "309",
              "name": "DC_RB_Trans_Xtractive_Green_Equalized_1-60_Premium_SV",
              "partNumber": "DC_RB_Trans_Xtractive_Green_Equalized_1-60_Premium_SV",
              "catEntryId": "3074457345616780806"
            }
          },
          "isBaseLens": null,
          "transition": "Xtractive",
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-6.00",
              "max": "+6.00"
            },
            "sph": {
              "min": "-13.00",
              "max": "+8.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "309",
          "insPrice": "309"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "309",
          "color": "Green Transition",
          "productUPC": "DC_RB_Trans_Green_Equalized_1-60_Premium",
          "thickness": "Premium-Thin",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780710",
          "treatmentFamily": "Transitions",
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Equalized",
          "upc": "DC_RB_Trans_Green_Equalized_1-60_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-MC6",
                "partNumber": "Item_Service_DC_K-MC6",
                "catEntryId": "3074457345616848169"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              }
            ],
            "lens": {
              "offerPrice": "309",
              "name": "DC_RB_Trans_Green_Equalized_1-60_Premium_SV",
              "partNumber": "DC_RB_Trans_Green_Equalized_1-60_Premium_SV",
              "catEntryId": "3074457345616780710"
            }
          },
          "isBaseLens": null,
          "transition": "Signature",
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-6.00",
              "max": "+6.00"
            },
            "sph": {
              "min": "-13.00",
              "max": "+8.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "309",
          "insPrice": "309"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "219",
          "color": null,
          "productUPC": "DC_RB_Clear_Equalized_1-60_Premium",
          "thickness": "Premium-Thin",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780718",
          "treatmentFamily": null,
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Equalized",
          "upc": "DC_RB_Clear_Equalized_1-60_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-MC6",
                "partNumber": "Item_Service_DC_K-MC6",
                "catEntryId": "3074457345616848169"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              }
            ],
            "lens": {
              "offerPrice": "219",
              "name": "DC_RB_Clear_Equalized_1-60_Premium_SV",
              "partNumber": "DC_RB_Clear_Equalized_1-60_Premium_SV",
              "catEntryId": "3074457345616780718"
            }
          },
          "isBaseLens": null,
          "transition": null,
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-6.00",
              "max": "+6.00"
            },
            "sph": {
              "min": "-13.00",
              "max": "+8.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "219",
          "insPrice": "219"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "309",
          "color": "Grey Transition",
          "productUPC": "DC_RB_Trans_Xtractive_Grey_Equalized_1-60_Premium",
          "thickness": "Premium-Thin",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780800",
          "treatmentFamily": "Transitions",
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Equalized",
          "upc": "DC_RB_Trans_Xtractive_Grey_Equalized_1-60_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-MC6",
                "partNumber": "Item_Service_DC_K-MC6",
                "catEntryId": "3074457345616848169"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-30A",
                "partNumber": "Item_Service_DC_K-30A",
                "catEntryId": "3074457345616780648"
              }
            ],
            "lens": {
              "offerPrice": "309",
              "name": "DC_RB_Trans_Xtractive_Grey_Equalized_1-60_Premium_SV",
              "partNumber": "DC_RB_Trans_Xtractive_Grey_Equalized_1-60_Premium_SV",
              "catEntryId": "3074457345616780800"
            }
          },
          "isBaseLens": null,
          "transition": "Xtractive",
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-6.00",
              "max": "+6.00"
            },
            "sph": {
              "min": "-13.00",
              "max": "+8.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "309",
          "insPrice": "309"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "189",
          "color": "Brown Transition",
          "productUPC": "DC_RB_Trans_Brown_Tuned_1-50_Standard",
          "thickness": "Slim",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780778",
          "treatmentFamily": "Transitions",
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Tuned",
          "upc": "DC_RB_Trans_Brown_Tuned_1-50_Standard_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              }
            ],
            "lens": {
              "offerPrice": "189",
              "name": "DC_RB_Trans_Brown_Tuned_1-50_Standard_SV",
              "partNumber": "DC_RB_Trans_Brown_Tuned_1-50_Standard_SV",
              "catEntryId": "3074457345616780778"
            }
          },
          "isBaseLens": null,
          "transition": "Signature",
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-2.00",
              "max": "+2.00"
            },
            "sph": {
              "min": "-4.00",
              "max": "+4.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Standard",
          "clen": null,
          "listPrice": "189",
          "insPrice": "189"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "229",
          "color": "Green Transition",
          "productUPC": "DC_RB_Trans_Green_Tuned_1-50_Premium",
          "thickness": "Slim",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780744",
          "treatmentFamily": "Transitions",
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Tuned",
          "upc": "DC_RB_Trans_Green_Tuned_1-50_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              }
            ],
            "lens": {
              "offerPrice": "229",
              "name": "DC_RB_Trans_Green_Tuned_1-50_Premium_SV",
              "partNumber": "DC_RB_Trans_Green_Tuned_1-50_Premium_SV",
              "catEntryId": "3074457345616780744"
            }
          },
          "isBaseLens": null,
          "transition": "Signature",
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-2.00",
              "max": "+2.00"
            },
            "sph": {
              "min": "-4.00",
              "max": "+4.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "229",
          "insPrice": "229"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "309",
          "color": "Emerald Transition",
          "productUPC": "DC_RB_Trans_Emerald_Equalized_1-60_Premium",
          "thickness": "Premium-Thin",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780675",
          "treatmentFamily": "Transitions",
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Equalized",
          "upc": "DC_RB_Trans_Emerald_Equalized_1-60_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-MC6",
                "partNumber": "Item_Service_DC_K-MC6",
                "catEntryId": "3074457345616848169"
              }
            ],
            "lens": {
              "offerPrice": "309",
              "name": "DC_RB_Trans_Emerald_Equalized_1-60_Premium_SV",
              "partNumber": "DC_RB_Trans_Emerald_Equalized_1-60_Premium_SV",
              "catEntryId": "3074457345616780675"
            }
          },
          "isBaseLens": null,
          "transition": "Signature",
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-6.00",
              "max": "+6.00"
            },
            "sph": {
              "min": "-13.00",
              "max": "+8.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "309",
          "insPrice": "309"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "269",
          "color": "Green Transition",
          "productUPC": "DC_RB_Trans_Xtractive_Green_Equalized_1-50_Premium",
          "thickness": "Slim",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780805",
          "treatmentFamily": "Transitions",
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Equalized",
          "upc": "DC_RB_Trans_Xtractive_Green_Equalized_1-50_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-MC6",
                "partNumber": "Item_Service_DC_K-MC6",
                "catEntryId": "3074457345616848169"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-30C",
                "partNumber": "Item_Service_DC_K-30C",
                "catEntryId": "3074457345616780662"
              }
            ],
            "lens": {
              "offerPrice": "269",
              "name": "DC_RB_Trans_Xtractive_Green_Equalized_1-50_Premium_SV",
              "partNumber": "DC_RB_Trans_Xtractive_Green_Equalized_1-50_Premium_SV",
              "catEntryId": "3074457345616780805"
            }
          },
          "isBaseLens": null,
          "transition": "Xtractive",
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-4.00",
              "max": "+4.00"
            },
            "sph": {
              "min": "-12.00",
              "max": "+10.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "269",
          "insPrice": "269"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "179",
          "color": null,
          "productUPC": "DC_RB_Clear_Equalized_1-60_Standard",
          "thickness": "Premium-Thin",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780734",
          "treatmentFamily": null,
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Equalized",
          "upc": "DC_RB_Clear_Equalized_1-60_Standard_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-MC3",
                "partNumber": "Item_Service_DC_K-MC3",
                "catEntryId": "3074457345616780660"
              }
            ],
            "lens": {
              "offerPrice": "179",
              "name": "DC_RB_Clear_Equalized_1-60_Standard_SV",
              "partNumber": "DC_RB_Clear_Equalized_1-60_Standard_SV",
              "catEntryId": "3074457345616780734"
            }
          },
          "isBaseLens": null,
          "transition": null,
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-6.00",
              "max": "+6.00"
            },
            "sph": {
              "min": "-13.00",
              "max": "+8.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Standard",
          "clen": null,
          "listPrice": "179",
          "insPrice": "179"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "349",
          "color": "Brown Transition",
          "productUPC": "DC_RB_Brown_Trans_Xtractive_Equalized_1-67_Premium",
          "thickness": "Extra-Thin",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780726",
          "treatmentFamily": "Transitions",
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Equalized",
          "upc": "DC_RB_Brown_Trans_Xtractive_Equalized_1-67_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-30B",
                "partNumber": "Item_Service_DC_K-30B",
                "catEntryId": "3074457345616780653"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-MC6",
                "partNumber": "Item_Service_DC_K-MC6",
                "catEntryId": "3074457345616848169"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              }
            ],
            "lens": {
              "offerPrice": "349",
              "name": "DC_RB_Brown_Trans_Xtractive_Equalized_1-67_Premium_SV",
              "partNumber": "DC_RB_Brown_Trans_Xtractive_Equalized_1-67_Premium_SV",
              "catEntryId": "3074457345616780726"
            }
          },
          "isBaseLens": null,
          "transition": "Xtractive",
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-6.00",
              "max": "+6.00"
            },
            "sph": {
              "min": "-13.00",
              "max": "+9.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "349",
          "insPrice": "349"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "269",
          "color": "Green Transition",
          "productUPC": "DC_RB_Green_Trans_Tuned_1-60_Premium",
          "thickness": "Premium-Thin",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780791",
          "treatmentFamily": "Transitions",
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Tuned",
          "upc": "DC_RB_Green_Trans_Tuned_1-60_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              }
            ],
            "lens": {
              "offerPrice": "269",
              "name": "DC_RB_Green_Trans_Tuned_1-60_Premium_SV",
              "partNumber": "DC_RB_Green_Trans_Tuned_1-60_Premium_SV",
              "catEntryId": "3074457345616780791"
            }
          },
          "isBaseLens": null,
          "transition": "Signature",
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-2.00",
              "max": "+2.00"
            },
            "sph": {
              "min": "-6.00",
              "max": "+6.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "269",
          "insPrice": "269"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "229",
          "color": "Grey Transition",
          "productUPC": "DC_RB_Trans_Grey_Tuned_1-50_Premium",
          "thickness": "Slim",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780796",
          "treatmentFamily": "Transitions",
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Tuned",
          "upc": "DC_RB_Trans_Grey_Tuned_1-50_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              }
            ],
            "lens": {
              "offerPrice": "229",
              "name": "DC_RB_Trans_Grey_Tuned_1-50_Premium_SV",
              "partNumber": "DC_RB_Trans_Grey_Tuned_1-50_Premium_SV",
              "catEntryId": "3074457345616780796"
            }
          },
          "isBaseLens": null,
          "transition": "Signature",
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-2.00",
              "max": "+2.00"
            },
            "sph": {
              "min": "-4.00",
              "max": "+4.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "229",
          "insPrice": "229"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "139",
          "color": null,
          "productUPC": "DC_RB_Clear_Tuned_1-50_Premium",
          "thickness": "Slim",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780784",
          "treatmentFamily": null,
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Tuned",
          "upc": "DC_RB_Clear_Tuned_1-50_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              }
            ],
            "lens": {
              "offerPrice": "139",
              "name": "DC_RB_Clear_Tuned_1-50_Premium_SV",
              "partNumber": "DC_RB_Clear_Tuned_1-50_Premium_SV",
              "catEntryId": "3074457345616780784"
            }
          },
          "isBaseLens": null,
          "transition": null,
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-2.00",
              "max": "+2.00"
            },
            "sph": {
              "min": "-5.00",
              "max": "+4.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "139",
          "insPrice": "139"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "249",
          "color": null,
          "productUPC": "DC_RB_Clear_Bluelight_Equalized_1-60_Premium",
          "thickness": "Premium-Thin",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780782",
          "treatmentFamily": null,
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Equalized",
          "upc": "DC_RB_Clear_Bluelight_Equalized_1-60_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-MC6",
                "partNumber": "Item_Service_DC_K-MC6",
                "catEntryId": "3074457345616848169"
              }
            ],
            "lens": {
              "offerPrice": "249",
              "name": "DC_RB_Clear_Bluelight_Equalized_1-60_Premium_SV",
              "partNumber": "DC_RB_Clear_Bluelight_Equalized_1-60_Premium_SV",
              "catEntryId": "3074457345616780782"
            }
          },
          "isBaseLens": null,
          "transition": null,
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-6.00",
              "max": "+6.00"
            },
            "sph": {
              "min": "-13.00",
              "max": "+8.00"
            }
          },
          "blueLight": "Bluelight",
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "249",
          "insPrice": "249"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "189",
          "color": "Grey Transition",
          "productUPC": "DC_RB_Trans_Grey_Tuned_1-50_Standard",
          "thickness": "Slim",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780799",
          "treatmentFamily": "Transitions",
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Tuned",
          "upc": "DC_RB_Trans_Grey_Tuned_1-50_Standard_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              }
            ],
            "lens": {
              "offerPrice": "189",
              "name": "DC_RB_Trans_Grey_Tuned_1-50_Standard_SV",
              "partNumber": "DC_RB_Trans_Grey_Tuned_1-50_Standard_SV",
              "catEntryId": "3074457345616780799"
            }
          },
          "isBaseLens": null,
          "transition": "Signature",
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-2.00",
              "max": "+2.00"
            },
            "sph": {
              "min": "-4.00",
              "max": "+4.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Standard",
          "clen": null,
          "listPrice": "189",
          "insPrice": "189"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "209",
          "color": null,
          "productUPC": "DC_RB_Clear_Bluelight_Equalized_1-50_Premium",
          "thickness": "Slim",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780743",
          "treatmentFamily": null,
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Equalized",
          "upc": "DC_RB_Clear_Bluelight_Equalized_1-50_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-MC6",
                "partNumber": "Item_Service_DC_K-MC6",
                "catEntryId": "3074457345616848169"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              }
            ],
            "lens": {
              "offerPrice": "209",
              "name": "DC_RB_Clear_Bluelight_Equalized_1-50_Premium_SV",
              "partNumber": "DC_RB_Clear_Bluelight_Equalized_1-50_Premium_SV",
              "catEntryId": "3074457345616780743"
            }
          },
          "isBaseLens": null,
          "transition": null,
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-4.00",
              "max": "+4.00"
            },
            "sph": {
              "min": "-12.00",
              "max": "+10.00"
            }
          },
          "blueLight": "Bluelight",
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "209",
          "insPrice": "209"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "229",
          "color": "Brown Transition",
          "productUPC": "DC_RB_Trans_Brown_Tuned_1-50_Premium",
          "thickness": "Slim",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780764",
          "treatmentFamily": "Transitions",
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Tuned",
          "upc": "DC_RB_Trans_Brown_Tuned_1-50_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              }
            ],
            "lens": {
              "offerPrice": "229",
              "name": "DC_RB_Trans_Brown_Tuned_1-50_Premium_SV",
              "partNumber": "DC_RB_Trans_Brown_Tuned_1-50_Premium_SV",
              "catEntryId": "3074457345616780764"
            }
          },
          "isBaseLens": null,
          "transition": "Signature",
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-2.00",
              "max": "+2.00"
            },
            "sph": {
              "min": "-4.00",
              "max": "+4.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "229",
          "insPrice": "229"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "309",
          "color": "Sapphire Transition",
          "productUPC": "DC_RB_Trans_Sapphire_Equalized_1-60_Premium",
          "thickness": "Premium-Thin",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780802",
          "treatmentFamily": "Transitions",
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Equalized",
          "upc": "DC_RB_Trans_Sapphire_Equalized_1-60_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-MC6",
                "partNumber": "Item_Service_DC_K-MC6",
                "catEntryId": "3074457345616848169"
              }
            ],
            "lens": {
              "offerPrice": "309",
              "name": "DC_RB_Trans_Sapphire_Equalized_1-60_Premium_SV",
              "partNumber": "DC_RB_Trans_Sapphire_Equalized_1-60_Premium_SV",
              "catEntryId": "3074457345616780802"
            }
          },
          "isBaseLens": null,
          "transition": "Signature",
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-6.00",
              "max": "+6.00"
            },
            "sph": {
              "min": "-13.00",
              "max": "+8.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "309",
          "insPrice": "309"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "169",
          "color": null,
          "productUPC": "DC_RB_Clear_Bluelight_Tuned_1-60_Standard",
          "thickness": "Premium-Thin",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780682",
          "treatmentFamily": null,
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Tuned",
          "upc": "DC_RB_Clear_Bluelight_Tuned_1-60_Standard_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              }
            ],
            "lens": {
              "offerPrice": "169",
              "name": "DC_RB_Clear_Bluelight_Tuned_1-60_Standard_SV",
              "partNumber": "DC_RB_Clear_Bluelight_Tuned_1-60_Standard_SV",
              "catEntryId": "3074457345616780682"
            }
          },
          "isBaseLens": null,
          "transition": null,
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-2.00",
              "max": "+2.00"
            },
            "sph": {
              "min": "-6.00",
              "max": "+6.00"
            }
          },
          "blueLight": "Bluelight",
          "antiReflective": "Standard",
          "clen": null,
          "listPrice": "169",
          "insPrice": "169"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "349",
          "color": "Grey Transition",
          "productUPC": "DC_RB_Grey_Trans_Equalized_1-67_Premium",
          "thickness": "Extra-Thin",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780716",
          "treatmentFamily": "Transitions",
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Equalized",
          "upc": "DC_RB_Grey_Trans_Equalized_1-67_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-MC6",
                "partNumber": "Item_Service_DC_K-MC6",
                "catEntryId": "3074457345616848169"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              }
            ],
            "lens": {
              "offerPrice": "349",
              "name": "DC_RB_Grey_Trans_Equalized_1-67_Premium_SV",
              "partNumber": "DC_RB_Grey_Trans_Equalized_1-67_Premium_SV",
              "catEntryId": "3074457345616780716"
            }
          },
          "isBaseLens": null,
          "transition": "Signature",
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-6.00",
              "max": "+6.00"
            },
            "sph": {
              "min": "-13.00",
              "max": "+9.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "349",
          "insPrice": "349"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "349",
          "color": "Grey Transition",
          "productUPC": "DC_RB_Grey_Trans_Xtractive_Equalized_1-67_Premium",
          "thickness": "Extra-Thin",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780785",
          "treatmentFamily": "Transitions",
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Equalized",
          "upc": "DC_RB_Grey_Trans_Xtractive_Equalized_1-67_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-30A",
                "partNumber": "Item_Service_DC_K-30A",
                "catEntryId": "3074457345616780648"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-MC6",
                "partNumber": "Item_Service_DC_K-MC6",
                "catEntryId": "3074457345616848169"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              }
            ],
            "lens": {
              "offerPrice": "349",
              "name": "DC_RB_Grey_Trans_Xtractive_Equalized_1-67_Premium_SV",
              "partNumber": "DC_RB_Grey_Trans_Xtractive_Equalized_1-67_Premium_SV",
              "catEntryId": "3074457345616780785"
            }
          },
          "isBaseLens": null,
          "transition": "Xtractive",
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-6.00",
              "max": "+6.00"
            },
            "sph": {
              "min": "-13.00",
              "max": "+9.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "349",
          "insPrice": "349"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "309",
          "color": "Brown Transition",
          "productUPC": "DC_RB_Trans_Brown_Equalized_1-60_Premium",
          "thickness": "Premium-Thin",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780747",
          "treatmentFamily": "Transitions",
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Equalized",
          "upc": "DC_RB_Trans_Brown_Equalized_1-60_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_DC_K-MC6",
                "partNumber": "Item_Service_DC_K-MC6",
                "catEntryId": "3074457345616848169"
              },
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              }
            ],
            "lens": {
              "offerPrice": "309",
              "name": "DC_RB_Trans_Brown_Equalized_1-60_Premium_SV",
              "partNumber": "DC_RB_Trans_Brown_Equalized_1-60_Premium_SV",
              "catEntryId": "3074457345616780747"
            }
          },
          "isBaseLens": null,
          "transition": "Signature",
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-6.00",
              "max": "+6.00"
            },
            "sph": {
              "min": "-13.00",
              "max": "+8.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "309",
          "insPrice": "309"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "179",
          "color": null,
          "productUPC": "DC_RB_Clear_Tuned_1-60_Premium",
          "thickness": "Premium-Thin",
          "suitableForDiving": false,
          "type": "Single Vision",
          "recommendedUse": null,
          "catEntryId": "3074457345616780687",
          "treatmentFamily": null,
          "brand": "Ray-Ban",
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": true,
          "uvProtection": true,
          "designType": "Tuned",
          "upc": "DC_RB_Clear_Tuned_1-60_Premium_SV",
          "lensPackageDetails": {
            "services": [
              {
                "offerPrice": "0",
                "name": "Item_Service_RB0",
                "partNumber": "Item_Service_RB0",
                "catEntryId": "3074457345616780507"
              }
            ],
            "lens": {
              "offerPrice": "179",
              "name": "DC_RB_Clear_Tuned_1-60_Premium_SV",
              "partNumber": "DC_RB_Clear_Tuned_1-60_Premium_SV",
              "catEntryId": "3074457345616780687"
            }
          },
          "isBaseLens": null,
          "transition": null,
          "rxValues": {
            "add": null,
            "cyl": {
              "min": "-2.00",
              "max": "+2.00"
            },
            "sph": {
              "min": "-6.00",
              "max": "+6.00"
            }
          },
          "blueLight": null,
          "antiReflective": "Premium",
          "clen": null,
          "listPrice": "179",
          "insPrice": "179"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": {
            "offerPrice": "149",
            "partNumber": "8056597624015",
            "catEntryId": "3074457345616779762"
          },
          "insPrice": "149"
        }
      },
      {
        "lensPackage": {
          "treatment": null,
          "offerPrice": "0.00",
          "color": null,
          "productUPC": "Plano",
          "thickness": null,
          "suitableForDiving": false,
          "type": "Frame Only",
          "recommendedUse": null,
          "catEntryId": "754360",
          "treatmentFamily": null,
          "brand": null,
          "colorCategory": null,
          "polar": false,
          "lensMaterial": null,
          "antiScratch": false,
          "uvProtection": false,
          "designType": null,
          "upc": "99",
          "lensPackageDetails": null,
          "isBaseLens": null,
          "transition": null,
          "rxValues": null,
          "blueLight": null,
          "antiReflective": null,
          "clen": null,
          "listPrice": "0.00",
          "insPrice": "0.00"
        },
        "frame": {
          "offerPrice": "149",
          "frameDetails": null,
          "insPrice": "149"
        }
      }
    ],
    "content": {
      "polar": null,
      "treatment": null,
      "color": {
        "Brown Transition": {
          "sequence": "0",
          "imageFileName2": "brown-lens",
          "imageFileName1": "brown-lens",
          "title": "Brown"
        },
        "Green Transition": {
          "sequence": "0",
          "imageFileName2": "green-g-15-lens",
          "imageFileName1": "green-g-15-lens",
          "title": "Green"
        },
        "Sapphire Transition": {
          "sequence": "0",
          "imageFileName2": "sapphire-lens",
          "imageFileName1": "sapphire-lens",
          "title": "Sapphire"
        },
        "Amethyst Transition": {
          "sequence": "0",
          "imageFileName2": "amethyst-lens",
          "imageFileName1": "amethyst-lens",
          "title": "Amethyst"
        },
        "Grey Transition": {
          "sequence": "0",
          "imageFileName2": "grey-lens",
          "imageFileName1": "grey-lens",
          "title": "Grey"
        },
        "Emerald Transition": {
          "sequence": "0",
          "imageFileName2": "emerald-lens",
          "imageFileName1": "emerald-lens",
          "title": "Emerald"
        },
        "Amber Transition": {
          "sequence": "0",
          "imageFileName2": "amber-lens",
          "imageFileName1": "amber-lens",
          "title": "Amber"
        }
      },
      "treatmentCategory": null,
      "antiScratch": null,
      "thickness": {
        "Extra-Thin": {
          "sequence": "3",
          "imageFileName": "extra-thin",
          "description": "A much thinner lens that is suitable for medium or strong prescriptions.<br/><ul><li>Thinner than Premium Thin lenses</li><li>Index 1.67</li><li>Discreet and lightweight</li><li>Prescriptions above +4 and below -4</li></ul>",
          "title": "Superior - Extra thin lenses"
        },
        "Premium-Thin": {
          "sequence": "2",
          "imageFileName": "thin",
          "description": "A thinner, more durable lens that is suitable for medium prescriptions.<br/><ul><li>Lightweight & impact-resistant</li><li>Index 1.60</li><li>Prescriptions: between +4 and -4</li></ul>",
          "title": "Premium - Thin"
        },
        "Slim": {
          "sequence": "1",
          "imageFileName": "slim",
          "description": "Our standard lens thickness is suitable for light prescriptions.<br/><ul><li>Lightweight plastic material</li><li>Index 1.50</li><li>Enhanced comfort and look</li><li>Prescriptions: between +2 and -2</li></ul>",
          "title": "Enhanced - Slim"
        }
      },
      "uvProtection": null,
      "designType": {
        "Oakley Essential Plus": {
          "sequence": "0",
          "description": "Oakley’s Authentic Prescription designed for your everyday needs.<ul><li>Optimised for higher lens transparency<br/><ul><li>100% UV protection<br/><ul><li>Anti-reflective",
          "title": "OAKLEY ESSENTIAL PLUS"
        },
        "OakleyTrueDefinition": {
          "sequence": "3",
          "description": "By utilizing a digitally enhanced surface on the back side of lenses, OTD™ lenses are designed to help optimize visual clarity across the surface of the lens.",
          "title": "OAKLEY TRUE DIGITAL™"
        },
        "DC Standard": {
          "sequence": "1",
          "description": "<ul><li>Optimised for higher lens transparency<br/><ul><li>100% UV protection<br/><ul><li>Anti-reflective",
          "title": "STANDARD"
        },
        "DC Advanced": {
          "sequence": "1",
          "description": "<ul><li>Optimised for higher lens transparency<br/><ul><li>100% UV protection<br/><ul><li>Anti-reflective<br/><ul><li>Anti-smudge and water repellent<br/><ul><li>Edge-to-edge clarity offering a wide field of view",
          "title": "ADVANCED"
        },
        "Tuned": {
          "sequence": "1",
          "description": "<ul><li>Optimised for higher lens transparency<br/><ul><li>100% UV protection<br/><ul><li>Anti-reflective",
          "title": "RAY-BAN TUNED "
        },
        "Equalized": {
          "sequence": "3",
          "description": "<ul><li>Optimised for higher lens transparency<br/><ul><li>Edge-to-edge clarity offering a wide field of view<br/><ul><li>100% UV protection<br/><ul><li>Anti-reflective<br/><ul><li>Anti-smudge and water repellent",
          "title": "RAY-BAN EQUALIZED"
        }
      },
      "type": {
        "Progressive": {
          "sequence": "2",
          "badge": "coming soon",
          "imageFileName": "progressive",
          "description": "Corrects more than one field of vision: near, intermediate and far so you don’t have to switch glasses.",
          "title": "Progressive"
        },
        "Single Vision": {
          "sequence": "1",
          "imageFileName": "single-vision",
          "description": "Corrects one field of vision: near, intermediate or far. ",
          "title": "Single Vision"
        },
        "Frame Only": {
          "sequence": "4",
          "imageFileName": "full-rim",
          "description": "Your Safety Eyeglasses without vision correction. Includes standard safety lens.",
          "title": "Frame Only"
        }
      },
      "transition": {
        "Signature": {
          "sequence": "3",
          "imageFileName": "transition-signature",
          "description": "Light responsive lenses in many different colours, for the ultimate style and comfort all in one.<br/><ul><li>Perfect for all light conditions</li><li>Clear indoors & dark outdoors</li><li>UV and blue-violet light filter</li></ul>",
          "title": "Transitions® Signature® GEN 8™"
        },
        "Xtractive": {
          "sequence": "4",
          "imageFileName": "transition-signature",
          "description": "Light responsive lenses that also activate behind the windshield of a car, quickly changing with the light conditions.<br/><ul><li>Tinted indoors & dark outdoors</li><li>Activated even inside your car</li><li>UV and blue-violet light filter</li></ul>",
          "title": "Transitions® XTRActive® New Generation"
        }
      },
      "promo": null,
      "treatmentFamily": {
        "Transitions": {
          "sequence": "3",
          "imageFileName": "transition-signature",
          "description": "Lenses that darken outdoors and fade back to clear indoor, adapting to changing light conditions.<br/><ul><li>Quickly darken in sunlight</li><li>Glasses and sunglasses in one</li><li>UV and blue light protection</li></ul>",
          "title": "Transitions® - Light responsive treatment"
        }
      },
      "blueLight": {
        "Blue light treatment for Gaming": {
          "sequence": "3",
          "imageFileName": "blue-light",
          "description": "Oakley Prizm™Gaming lenses featuring innovative Oakley technology designed for gaming and digital environments. <br/><ul><li>Optimized for OLED and LED screens</li><li>Enhanced colour and contrast</li><li>Blue Light Filtering technology</li></ul>",
          "title": "Prizm™ Blue Light Gaming"
        },
        "Bluelight": {
          "sequence": "2",
          "imageFileName": "blue-light",
          "description": "Clear lenses with blue-violet light filtering technology designed for indoor and outdoor lifestyles.<br/><ul><li>Filter light from digital devices</li><li>Enhanced colour and contrast</li><li>UV and blue-violet light filter</li></ul>",
          "title": "Blue-violet light filtering"
        }
      },
      "antiReflective": {
        "Standard": {
          "sequence": "1",
          "imageFileName": "ar-classic",
          "description": "A CLEANSHIELD® Anti-reflective coating to eliminate reflections from the lens surface for improved vision and comfort.<br/><ul><li>Anti-scratch coating</li><li>Reduces glare and reflections</li><li>Lenses stay clear for longer</li></ul>",
          "title": "Anti-reflective treatment"
        },
        "Premium": {
          "sequence": "2",
          "imageFileName": "ar-premium",
          "description": "A CLEANSHIELD® Anti-reflective and anti-smudge coating to keep your lenses and your vision clear for longer.<br/><ul><li>Anti-scratch coating</li><li>Reduces glare and reflections</li><li>Lenses stay clear for longer<br/><ul><li>Anti-static & scratch resistant</li><li>Smudge & water resistant</li><li>Extended durability (less likely to peel)</li></ul>",
          "title": "Anti-reflective and anti-smudge treatments"
        }
      },
      "brand": {
        "David Clulow": {
          "sequence": "0",
          "description": "High quality lenses featuring state-of-the-art and innovative technology.<br/><ul><li>Scratch-resistant included</li><li>Premium quality lenses</li><li>Available with Blue Light Filter</li><li>Available with Transitions®</li></ul>",
          "title": "David Clulow.com lenses"
        },
        "Oakley": {
          "sequence": "0",
          "description": "Oakley Authentic lenses featuring the latest Oakley technology for performance and style.<br/><ul><li>Logo etching</li> <li>Oakley Stealth™Pro anti-reflective included</li><li>With Blue Light and Transitions®</li><li>Perfectly fit to frame</li></ul>",
          "title": "Oakley Authentic lenses"
        },
        "Ray-Ban": {
          "sequence": "0",
          "description": "Ray-Ban Authentic lenses for a truly iconic style.<br/><ul><li>Etched with the Ray-Ban logo</li><li>Standard anti-reflective coating included</li><li>Available with Blue Light Filter and Transitions®</li><li>Crafted to perfectly fit your frame</li></ul>",
          "title": "Ray-Ban Authentic lenses"
        }
      },
      "colorCategory": null
    }
  },
  /* MANDATORY lens actions, needed to save, edit and add to cart */
  actionsModule: {
    genericAddToCart: function (
      _frameObject,
      _lensObject,
      _warrantyObject,
      _review,
      _imagery
    ) {
      alert("Calling genericAddToCart()");
    },
    genericSaveEditFromCart: function (
      _frameObject,
      _lensObject,
      _warrantyObject,
      _cartMode
    ) {
      alert("Calling genericSaveEditFromCart()");
    },
    genericSaveLensSelection: function (
      _frameObject,
      _lensObject,
      _warrantyObject
    ) {
      alert("Calling genericSaveLensSelection()");
    },
    loadLearnMoreContent: function (_loadMoreContentName) {
      // see Learn more section content retrieval
    },
    genericExit: function () {
      // optional function to trigger events on configurator closure
    },
    delegateLearnMoreContent: function (contentIdentifier) {
      window.alert("funzione chiamata");
    },
  },
  /* MANDATORY frame and environment data */
  data: {
    "frameOnlyLensUPC": "99",
    "frame": {
      "offerPrice": 149,
      "color": "8116",
      "brandImageUrl": "/images/brands/ray-ban.svg",
      "upc": "8056597624015",
      "catEntryId": "3074457345616779762",
      "rxValues": {
        "powerCombinedMin": "-20.00",
        "powerCombinedMax": "+20.00"
      },
      "size": "M",
      "imageUrl": "https://assets2.davidclulow.com//cdn-record-files-pi/cce01b0a-b1dd-428b-a539-add6017247ce/b479c532-4310-4b26-a751-add60183c332/0RX2199V__8116__STD__shad__qt.png",
      "name": "ORION OPTICS",
      "model": "0RX2199V",
      "category": "EYEGLASSES",
      "brand": "Ray-Ban",
      "listPrice": 149
    },
    "showFrameOnly": true
  },
  /* OPTIONAL to differentiate included images */
  baseURLs: {
    genericImage: "https://media.costadelmar.com/images/RXconfigurator/",
    projectImage: "https://media.costadelmar.com/images/RXconfigurator/",
    framesImage: "https://assets.costadelmar.com/is/image/CostaDelMar",
    assetsCDN: "https://assets.costadelmar.com",
  },
  /* OPTIONAL to setup only when init in cart*/

  /* cartMode: {
        orderItemId: 123345, // orderitem id of the frame
        orderIndex: 0 // index of cart item
    }, */

  /* OPTIONAL to choose different translations*/
  translation: {
    language: "en_US",
  },
  /* OPTIONAL if warranty available it linsk to the warranty details page */
  linksData: {
    warrantyLearnMore: "/lc-us/purchase-care/details",
  },
  /* OPTIONAL insurance module, if not provided, insurance buttons won't be visible */
  insuranceModule: {
    _isEnabled: false /* DEV use, do not use or implement */,
    _isLoading: false /* DEV use, do not use or implement */,
    _isLogged: false /* DEV use, do not use or implement */,
    isEnabled: function () {
      return this._isEnabled;
    },
    isLoading: function () {
      return this._isLoading;
    },
    isLogged: function () {
      return this._isLogged;
    },
    getEvents: function () {
      return {
        INSURANCE_LOGIN: "insuranceLogin",
        INSURANCE_LOGOUT: "insuranceLogout",
        INSURANCE_ENABLED: "insuranceEnabled",
        INSURANCE_DISABLED: "insuranceDisabled",
      };
    },
    getInsuranceDiscounts: function (_selectedFrame, _selectedPackages) {
      //alert('Calling insurance module getDiscounts()');

      return new Promise(function (resolve, reject) {
        // Sample 30% insurance discount
        var _insurancePackages = JSON.parse(JSON.stringify(_selectedPackages));

        for (let i = 0; i < _insurancePackages.length; i++) {
          var lensListPrice = parseFloat(
            _insurancePackages[i].lensPackage.listPrice
          );
          _insurancePackages[i].lensPackage.insPrice = parseFloat(
            (lensListPrice - lensListPrice * 0.3).toFixed(2)
          );
        }

        setTimeout(function () {
          resolve(_insurancePackages);
        }, 2000);
      });
    },
    openInsurancePanel: function () {
      //if (window.confirm('Calling insurance module openInsurancePanel()')) {
      this._isLogged = true;
      this._isEnabled = true;
      window.dispatchEvent(new CustomEvent(this.getEvents().INSURANCE_ENABLED));
      //} else {
      //do nothing
      //}
    },
    removeInsuranceBenefits: function () {
      //if (window.confirm('Calling insurance module removeInsuranceBenefits()')) {
      this._isLogged = true;
      this._isEnabled = false;
      window.dispatchEvent(
        new CustomEvent(this.getEvents().INSURANCE_DISABLED)
      );
      //} else {
      //do nothing
      //}
    },
  },
  actionsModule: {
    genericAddToCart: function (
      _frameObject,
      _lensObject,
      _warrantyObject,
      _review,
      _imagery
    ) {
      alert("Calling genericAddToCart()");
    },
    genericSaveEditFromCart: function (
      _frameObject,
      _lensObject,
      _warrantyObject,
      _cartMode
    ) {
      alert("Calling genericSaveEditFromCart()");
    },
    genericSaveLensSelection: function (
      _frameObject,
      _lensObject,
      _warrantyObject
    ) {
      alert("Calling genericSaveLensSelection()");
    },
    loadContent: function (contentName) {
      var url = "./mock/content/" + contentName;
      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
          var response = new Response(xhr.response, { status: 200 });

          response.json().then(function (data) {
            if (
              data.MarketingSpotData &&
              data.MarketingSpotData.length > 0 &&
              data.MarketingSpotData[0].baseMarketingSpotActivityData &&
              data.MarketingSpotData[0].baseMarketingSpotActivityData.length >
              0 &&
              data.MarketingSpotData[0].baseMarketingSpotActivityData[0]
                .marketingContentDescription &&
              data.MarketingSpotData[0].baseMarketingSpotActivityData[0]
                .marketingContentDescription.length > 0 &&
              data.MarketingSpotData[0].baseMarketingSpotActivityData[0]
                .marketingContentDescription[0].marketingText
            ) {
              let codeHtml =
                data.MarketingSpotData[0].baseMarketingSpotActivityData[0]
                  .marketingContentDescription[0].marketingText;

              resolve(codeHtml);
            }
          });
        };
        xhr.onerror = function () {
          reject(new TypeError("Local request failed"));
        };
        xhr.open("GET", url);
        xhr.responseType = "arraybuffer";
        xhr.send(null);
      });
    },
    loadLearnMoreContent: function (contentName) {
      var url = "./mock/learnMore/" + contentName;
      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
          var response = new Response(xhr.response, { status: 200 });

          response.json().then(function (data) {
            if (
              data.MarketingSpotData &&
              data.MarketingSpotData.length > 0 &&
              data.MarketingSpotData[0].baseMarketingSpotActivityData &&
              data.MarketingSpotData[0].baseMarketingSpotActivityData.length >
              0 &&
              data.MarketingSpotData[0].baseMarketingSpotActivityData[0]
                .marketingContentDescription &&
              data.MarketingSpotData[0].baseMarketingSpotActivityData[0]
                .marketingContentDescription.length > 0 &&
              data.MarketingSpotData[0].baseMarketingSpotActivityData[0]
                .marketingContentDescription[0].marketingText
            ) {
              let codeHtml =
                data.MarketingSpotData[0].baseMarketingSpotActivityData[0]
                  .marketingContentDescription[0].marketingText;

              resolve(codeHtml);
            }
          });
        };
        xhr.onerror = function () {
          reject(new TypeError("Local request failed"));
        };
        xhr.open("GET", url);
        xhr.responseType = "arraybuffer";
        xhr.send(null);
      });
    },
    genericExit: function () {
      alert("RX Configurator closed correctly");
    },
    delegateLearnMoreContent: function (contentIdentifier) {
      window.alert("funzione chiamata");
    },
  },
  prescriptionModule: {
    prescriptionType: "FULL", // or FULL, case of Glasses.com after lens type selection
    prescriptionFlows: ["MANUAL", "CMD", "UPLOAD"], //'MANUAL','ACCOUNT','UPLOAD','CMD'
    fileExtensions: [
      "png",
      "gif",
      "jpeg",
      "tiff",
      "bmp",
      "word",
      "pdf",
      "pages",
    ],
    maxFileSize: "10",
    /* abTest: {
            prescriptionManualOrder: 4,
            prescriptionFromMyAccountOrder: 1,
            prescriptionUploadOrder: 2,
            prescriptionDoctorOrder: 3,
            prescriptionSendLaterOrder: 5
        }, */
    loadPrescription: function () {
      var _prescriptionObject = null;
      return new Promise(function (resolve, reject) {
        var value = null;
        var name = "_prescriptionObject=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(";");
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == " ") {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            value = c.substring(name.length, c.length);
          }
        }

        if (value) {
          try {
            _prescriptionObject = JSON.parse(value);

            alert(
              "Calling loadPrescription()\n\nPrescription object: " +
              JSON.stringify(_prescriptionObject)
            );
            // validation is run by the configuration agains the return object
            resolve(_prescriptionObject);
          } catch (e) {
            console.log(e);
            reject();
          }
        } else {
          resolve(null);
        }
      });
    },

    loadExtendedPrescription: function () {
      var _prescriptionObject = null;
      return new Promise(function (resolve, reject) {
        var value = null;
        var name = "_prescriptionObject=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(";");
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == " ") {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            value = c.substring(name.length, c.length);
          }
        }

        if (value) {
          try {
            _prescriptionObject = JSON.parse(value);

            /* alert(
                            'Calling loadPrescription()\n\nPrescription object: ' +
                                JSON.stringify(_prescriptionObject)
                        ); */
            // validation is run by the configuration agains the return object
            resolve(_prescriptionObject);
          } catch (e) {
            console.log(e);
            reject();
          }
        } else {
          let test = {
            prescriptionFlow: "MANUAL", // Value is one of the prescriptionFlow flags
            prescriptionId: 12345, // prescriptionId is provided by the e-commerce
            CYL: {
              OS: "-0.5",
              OD: "0.25",
            },
            AX: {
              OS: "3.0",
              OD: "2.0",
            },
            SPH: {
              OS: "0.5",
              OD: "0.5",
            },
            PD: 0,
            ADD: {
              OS: "0",
              OD: "0",
            },
          };
          resolve(null);
        }
      });
    },

    savePrescription: function (_prescriptionObject) {
      alert(
        "Calling savePrescription()\n\nPrescription object: " +
        JSON.stringify(_prescriptionObject)
      );
      //sample cookie saving
      document.cookie =
        "_prescriptionObject=" + JSON.stringify(_prescriptionObject);
      return true; // or false if failure
    },

    saveExtendedPrescription: function (_prescriptionObject) {
      alert(
        "Calling saveExtendedPrescription()\n\nPrescription object: " +
        JSON.stringify(_prescriptionObject)
      );
      //sample cookie saving
      document.cookie =
        "_prescriptionObject=" + JSON.stringify(_prescriptionObject);
      return new Promise(function (resolve, reject) {
        let newId = 12345;
        let ret = JSON.parse(JSON.stringify(_prescriptionObject));
        ret["prescriptionId"] = newId;
        resolve(ret);
      });
    },

    clearExtendedPrescription: function (_requestObj) {
      document.cookie =
        "_prescriptionObject" + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      return new Promise(function (resolve, reject) {
        resolve({});
      });
    },

    uploadExtendedPrescription: function (_requestObject) {
      return new Promise(function (resolve, reject) {
        setTimeout(() => {
          let ret = {
            prescriptionId: 1234555,
            fileName: _requestObject.fileName,
            /* filePath: 'https://www.researchgate.net/profile/Ranju-Mandal/publication/286725383/figure/fig1/AS:685206105243649@1540377274394/A-sample-printed-signed-document-from-Tobacco-800-dataset-A-zoomed-version-of-the.png' */
            savedFileName: "document.png",
          };
          resolve(ret);
        }, 2000);
      });
    },

    downloadExtendedPrescription: function (_requestObject) {
      return new Promise(function (resolve, reject) {
        setTimeout(() => {
          let ret = {
            fileData:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqgAAAMsCAMAAACvMKAUAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJdnBBZwAABywAAAlIAJdquEgAAALQUExURf////f39wYGBvX19fv7+/n5+QQEBAAAAP39/QICAvPz8wgICPHx8QoKCjo6Ou/v7wwMDA4ODu3t7RAQEBoaGufn5zg4OOvr6yIiIh4eHhgYGBwcHCAgIDw8PP8iIunp6RQUFBISEtvb2xYWFuHh4SoqKjAwMOPj4/9wcP/l5f/v77e3t/+Hh+Xl5SgoKNnZ2SQkJDY2NtfX18XFxbOzs8vLy9/f38nJyd3d3SYmJr29vdXV1S4uLiwsLLm5uTQ0NL+/v9PT07u7u62trf80NEhISI2NjdHR0a+vr6mpqT4+PjIyMpeXl8PDw7W1tUJCQsfHx8HBwc/Pz7GxsURERKenp0ZGRs3NzZWVlaGhoUBAQE5OTnBwcEpKSqOjo2RkZJGRkY+Pj1BQUExMTFJSUpOTk5+fn3Z2dlpaWmJiYpmZmaurq1ZWVmZmZpubm2BgYFRUVHx8fHp6eomJiZ2dnaWlpYWFhVhYWP9KSmhoaGxsbP+trV5eXm5ublxcXP/FxXR0dP/9/WpqaoODg4uLi4eHh4GBgX5+fnJycnh4eP8uLv/Nzf/Hx//r6//p6f/z8//7+//d3f/5+f8kJP89Pf85Of82Nv9HR/9BQf/19f/39/8yMv/Cwv+wsP9PT//X1//x8f/S0v/n5/+/v/9TU//Kyv+6uv+qqv+lpf95ef9XV/+EhP8fH/9tbf+cnP/h4f+YmP8wMP9ERP9MTP/t7f8cHP8rK//Z2f92dv9fX//f3//Pz/8XF/+1tf9aWv+Bgf/b2/9iYv+Kiv8AAP+Pj/9kZP+hof+fn//j4/9cXP99ff9oaP+UlP/V1f9qav+Rkf8mJv+np/8ICP+Njf9zc/+3t/8PD/kdHcsDAz4AANmlpfmAgJdeXiMAAPnj4+65ubIXF62AgDohIeOPj1gMDKNqaucsLO3b27+NjeNoaOmvr+8eHu10dH5KSpVgYOHDwz5yhAkAACAASURBVHgB7F33UyM505btsTXjnLPLCZsfKAeSsUkGU+Scc845Q0EBRZH5r79HYxsMy+7dve/ufXv3upf1aBS6pZ5nNBqpp0VIkYoaKGqgqIGiBooaKGqgqIGiBooaKGqgqIGiBooaKGqgqIGiBooaKGqgqIGiBooaKGqgqIGiBooaKGqgqIF/nwb4f1+Tii3612mgiNJ/3SUtNqiogaIGihooaqCogaIGihooaqCogaIGihooaqCogaIGihooaqCogaIGihooaqCogaIGihooaqCogaIGihooaqCogf8FDSifLP8LzSy28UcaUA/kKPAy8vjdjImBgYVmfmhgoOK7Wb5MGBwZac4mGJdGRkaOv8z0TeRnW5xxoZX7JlM+opnV35Y/ez/KqwcGEu+n3wl5b0Zev5NUjP6tNDCvsPupNKRQtAUObr5XM8kOpcLZnobS/e9lKYx/B1rkWT9OCDu3tY7u0vXCXIXhxPjC/cOQvDAqH0bhiu6lL5PAue7URClVleVzvx8jBkqtsf3l5eX2t0h+bvoTdkvGNFdvycXAb6yBrlRkNDipXvF7Ze4bXXNzs/KLyso2/UFryUgo2ICLnmh+njMSUrLV3Ny+2ixj2Uubm2048LFmCY90NSHyuuY6Bq6qESJrDjCk8mQxmMhCuKS5GQwKaNxubmgIShcKoj4E+Ww5MAmUFCbwFXFDKOSmI190uJJF/cZiR0hln/aiSKkoUGKvDzQ3J7MsbByxRYgx2oEmiTUs5FwM/24a6JolzYo9sg6gdk+vKhSKWqCsZv/mpodd3zzxM08cz3tfOV4Wm1JQwVqm7hKQWVBUESKpTCkUnmZc97hitjbjUmxwFecqhWoH44QqbWOrwr8N6BKyWM7QTEqfHApF+Vwee4gpsUebOW7AEPIO3GTp1rJ5sxWLdd7cPJD7m5sZHXLZYrHYtt8xgGCeJKHZWo6z1LfkIwqPh4otnkjqBzhyfHMTt04aieROL4QVCifuNkvNfnrnpnyXtFDzzY3D31tYshj+DTVQVUKahT1SMynhHwXDiFaVIaXnGofb7Uvneh6x0i/3OEyeE9JisLvdbv1YJOynLrc7OEbIk95MDYJ+1dgppVShoLSBuwMDh3QXQBUUwSuzYpHBcnFeBGerqnxr2uUsfVfGECqA2+NKlRx2B/EkD7qnklGXQio1ud2bZMftNnUgfTWukSo0UkfsvWCtH5gjZP+LJz8hR3Q+kZDUVxMyJkWNFcdEPqPQoPIeiN5XoYYmOk+2KXW63Zq5d6bF0O+qAQZUEHeXrpJItBnSLuyqZbImw11BhV+sl5eXIzukzmGVgTadOtnjlEUm6+gnCXu0dLWpZ1bTJ5/cpL7bhYU5vkZtCQy5OgFUeh2Ql6b96KfJ4g17Qks8F4HS5KDm8Z37qlN84+qRznGyDiqdqZBJeEmJic6WyWQSIpHJjtgoQp4MWheGj+jgW0H5igIFxx+T1U3iLfCWIAaOqEKlufEBqB1zMllj1xkhSvc0WiYhJBadR2BRmCftwVRSJruo+1i2ePY7aiAHVLLFXqa6GFBb19fXZ/ToEN/oxfd0fHywQ8qolsWN+svIAwNyXz+podcMJk96dFQtNCMOF0uPuvR66QmAGmc954liFb+LXewJPiio9Aa9nrIuOkdnvhoW0jnWwJA+ixyI169J5jNko9rQAQL570CVRRlQRwS9JsyQ/In68O4HAlAr0Jz1cgBVYpeiAGiDbuFXuVpGAq4RhJ6yMllSkX5bDXwAqgdADa4/M9ouqPHLIcC49gbUEv1DDqgjpNQzzjIyoPKXIi4Jt6tZfn41XAJXdgxUyZBUBKqI/IR7Q+T+jjeySIFQQox2oKiPNrEwhqTOKXFky8JZoB5TxrAAqHwPw92YXhFc+AJopX4rBDmrSUmDfuN5RiECVZXtOg9M+UEp3z39JoCJKtJvq4HtGWHleIDwlSvhbW7SPn8ypLnTqZXqJobNLPHqy0Mlr+xZUdfZ3c1qdcery6I8m1fzypYpNXe+2aPmvcumUiJpOBQREzCcGW0P/h5efksbjo+PtaZB5eLxsrZkC689/ZuPiOpVvnEnkfDOgFrddNBl5NQttE+t5givtPRfq9USyJep1a9GNbJX+Wt4fps25muFPjj00qkeH+wKQyoEtL0hG1n4FtMk+tCGB66X7kkkc4pnjCLsoQAnU8vIhrBRqVYbV8vkQ+ZDmUz9qlO+cy2Gfk8NLFOpStVGlCmVKm3pUqkMVY8Gu9lsNvgS+QqXpPSGaKLcpHINVdvNLrPetx4JGzSO2Ihfam7qVSmiTw79Hl93oQi+LoxyJGY4WDFrqP7pRCHgBQvztLIyFY5BxSxPDjUCgoZ4QZdaozKZXQZNHaly+anP7OgjpVGnoDe7Wo2ErJhdCHUrazYU5tFAA+3G0DdHfI+gMq9rVd0AqsVEDSX5BBxLU4oVo/xVoeodpNGFMQ01PBD5uRA80rrLE7F6ld/scql6hp2C6fwqbjJ72D1RpN9ZA0vB4URCR9TR3oSXRBKJhEyeaL+bn5/veRv4cT3z85fedcQliKVyfv42wXOn8/MXkSdE1UlqzlVS6xxHBn1SkKGWyIe6pZ7xa780KJ1qmpYGh0v5dZaE9/h2IkkcSaWe+cvIu1LkC+caqX7TSNRHYDh/pCTcHgvML6IKx2LoVnKP4vst+PG8F1S/OhHRWosYS1DzYQDQYpBKd9YwTnXMLUmlvs164RBd8HpQaJt7lhFvYgsNXLcpy44TFkviYb7qvYN/Z18M/U4aKM12nHziDZd/uXbyWAxdH+ETmOqMxdhT1BuzET6JE4wHYkyAl6WAWMclicXYa1UhcYFYQBw1FEZ+DLN5VIsSP4X9JmEixcc2F/jIAByb12yxl5taGeQleG+POOZObBW7zo96LZ4xDXzRT30RVdRVUQNFDeBmUX81z1rUTFEDv5sGArt/MKz43SpcrM+f1ICkt/IHI9a6pqbK4pX/k6osZvs5Gqiaq7xeq9lpqly1FTAs1fu97NRYWTg1mctgCVHBWRgvG6isZAtQ/wVJaiorKweK7zn/hQr/5UVHDZ6qpvZJjb2lECUWj7i8ToZpfgWnUA3jVa2XhT3qEeZFo7MnhDTNBgrzsfD4+ueYr87HR2DLQlXJr9Le4mRXC1++nb1lKAb+zRoYYRYppfq0ZX5FpHZCIgcrSxMMibol+rSycsGmnri6rZ1BhuVk2cpu+8EiQnlKxp9bWlrObwm/SMdzkZG2lfMKhKs9PnAVYS2bX3kqYcmJIyaocIFWshQabZkzMaCq2xfb0Vt7d6vbe1buWf5k+0Jmtw5zBYngPNG1fwVmTAMX6d+ugZE0MFBq8Ed20afpXXQU0GhI+X3s0Y/lJIffoepD1I0+HlSsS4jMir5PoIVAHTK1gMXTLak10NaNjY0jnuxFWSf7IOdfcKQ0JSdc+xXWptwPsFxyUbOdFhqlkDrpBKyjXswlpHpKERS6qviIWRCwgGWHnCkWMvQR5RS1b3QJZuB/HFI2Nno4+YsY2HCg0kX6l2tgpJsBFWPScZ/hsTERx7oPL5fPiGNU7pk2VUdaOEJulyZ1zVuOJ1JLZ05OpvWFQK3T22EhP15DYjPSw5OTkw6e9OIwYVLFSKLbiuA2TzqciycnW2ZHklTSu5hxbazAeorUKbSjo2vj1Tw5aTipPhlL6/g+lbBzsuVcgT3Xy8nJsWmBSE43POB1YmGGhVsnC07VCbd9cklp+uQk+S+/SMXmwUpOBKqBfYpyDsh6sraht9mXqfwYldtd376bmTNNkxdpEzq/+SdkzRPfNxLcvbs75ciAP/foN5bO3e1qpDEYBL5ks5UGN+/u7vy0hlSrZhHqLoS6cdblkCr08zZlw1Tv3Vly9oaLGKbVRJ4CULcqS0tLds4gcGE+y6uJwtyEr5xOGwm/q9Im8xUpHv/NGhipl7Ee1WWUhW7QTo8iw1r7CagRp98VDLoMG0Tbjexk11Hw1q+zWdoelvX6FnKaG6Nym3opTE8AVN7TxdhhKd78/MAoQiST6z5KNacFUE82qr0HwaAmuS0E3UGn3WyVRwzPuCEAVHm/y263G0JYJ80D9SF7Mz1qEoQP97P6FOnfr4Fp4VTONxteeePjjlGttoYtcs5ovOwvMQIafYpetdGoI/zdVHPEklw4I4eKDrkyWe7USd5Uc46ejchm/EkAFZMEaqM8oJ996rjVsx61XAtIK3W8xR0z8kRuVJPHW2Py/kVqtr0xIFdRtcRWWudOtig6bBGdsbSET+pvjbw6vkKaFC06W3XDk4wnC+InAjIyEWJlZYceVCw89s6mGPo3a6BJY7heCwpnyga9yrcxplD4nmNOn0rj843hc7ju3W6fLzVEjlT+sXMfHv2DGsOm1k/16++P7mVFvDdy77/kSafQHZtM+6pi0mPLmUOQjstIl2JM3enRSrxBv3OuZt9njfQroj0lR9JW0ZQkq9kd4XxlbMRhSsjCpsvlx0et1dtKNfbAhRB6nBM2H1/81HmuIwv6dt3e4x0ZUqXKBiwH+nUynmzoV6sLOP2br9T/eNvk4zPdvpFXr9rRcO1cKndfX/dWqHx319fXLzCAasPx+rqGqEfFwB6R1FzPiEFMBeRo73rf5dZ7htHJ3TucJo1jyPsyYvfvXre67kj1jinuX87A4vnOpzcpbhbl/fgCMCgYqvLFcVy77sbcgAFTYpXXDiq4ru+969fX67Uv19czFQ+iuOtDGakNuuMGzRiRT9QHze6u9VK51mEwxe1PBayKwX+xBmwJPJ75jjlS2/5YjXZaXnMf4P/ZNnMlzKKVUWQykYjgaEyUcETZhw8/JLBwFbs8Pnm7y+xL23ZBt6cfh5bJy93LOswuEDKw+8QYfEml4JWwIMmWSJRAIB+B4ERv85eZi5FFDRQ1UNRAUQNFDRQ18J9ogC2E/hdUMAn1X3D5hUX/cgXf/Av9wkoVWf9AA4mysqFvk8fNld9G/tNi1Gxc+5OI3y9n4/gi/T9oAPalTU11BwI9+FZ4E135y33ORy5qxv0P7VcXPMw45qcSlzMbbPeEf+C2Mify4+uj8s7jGWUpkZVXvLMVVsuborWF58Xw36WB2IiTGY5Eh16EwimjnPgmWv7hOv3lWl2nGXfXH811ztBDxrq3/zYrQX4/jWWE/4oqgo9ied0EDYkTCl9zu+xnFMJSxTsFPFrnAzstdd99ar535L+u2LucYujPa0C5Hx+rGtWa7d6tfnXz/DYbk0rGq6urSxDQVTc+7bErVYIIRpHsoXoIPiLaWRgADFQXLDJ9EqwbNekX1+qpi02AtVcHsHCFQs283ItZsATfLNNFIphngveoNUxlwfuOuZ/EkE7UI6YIBHycxPrE/Men3KX0VJQIp0NnvDirhTo0xz6XquzrW3LvT8eqMSvmTeZTJTsiUPne/FpxgrWZkTd3A8mhJKYjvqK6jsiqvaSUnfPN1dVMhUX62RroUDUCifK7dbLlXjQ5qb+aSF6ZGXMIWBrGkZkBkqy5HhXuWfcIUo0SpYMFLgmZpt1LoDb5F1WrovYTgHPEpbTUbGjoWLusCYX002PhjdiRe8nQrw01XPFknzY0rKE4v0N9S0FqtxF4wBzRUOEIccn1paWTdtSGr2gHfeibdSymXUdKxGM7A06eKkzUoadm3Bs19Lgprh0Hzvi6lPMFMZ+oup4zamlaLRlzHOHWkJUtLY0JD4Q7WXreHWB5+ZInO5WuwHZhe2l1qZ1FlT5BSSkE+/zUmhxRhB8amDZ4/Hax9CL9ZA2MjeECEsn1A9mihulmD+0jFZr05EmY+YouHX3UiEAdH4XTaXtUNXxIXxcNF6tSrZIbHh0dXQ/WkU47dUajvpWver8qu9hHHU2prwV/NOoS+rwN1IUCfnqNSypSg5oMjPZo2KOff6INo6OLzwkyvhXsmbs7bIFXNbPrsE0qHBPbiSsUcgiIeiPjEhz52gVP5WFKIY2GzPtvKfDJllIY4KblmAFVEJx+X4AY5xzRi6i76gPWUeS1gSO1oRsJP3wnDJHEriYKd9UPRNkVjarmGctquzQVjQsvhFuOOrJj1Cc0mdJNwmNoUw9jQ0aqRsI1UA1uzSL9dA2M7LMek/Ac2RLgauQZQNX11AWS1cELMX5KBCohZzSelHfYammZZHatROPD+mrJ8P4IbSJ8k7ldLn++Zdk/U1X2WxZ42/UHG+XygHaJ9NPtZt9gxnm0pfCcuOirVjGMUhGDOEZNuPtRF1Yjr92CAEL9twnLswDAPShekhUZs1X2JoTbUexx8siY5pRLGnaV8omVgl6dszk6ttfW0BPX0Iu1umv6TCaE5YpYRZp5H85TCVsGm63HSCaygNCkME6mVG3ybTeASji5rAG3K9wKBQ8lcov/hUVVqQZYlCRWsX5n2MRTZy2qiltP1tbWljTNRJfS3IgKZXmK9BM1cMDsUUXaEuYIyQColrBKpZLSXTG2Pw9UTYxlBFDbFSJQJes+NkJoImQuJREt/MX8H3+qaA4UFnMZS9HNBvppR4W0h7weqV1XfD3tbZI2IiFiEoHKpwFUkRhQRepavojC2P+YHAs7QZVKcFZm4/EriaMDxLhlepSUxG2E9Egr3tIgy16SPRvSbOEJrTokq1RAywTK7owscd0rCMyiRyXee57wqwCqB6+PfJ3qgeVQwyAHtDSJtkvuWEVJ3xTTg3dfH7w5R48Kmkozn6vod1fCF2PCRMHNwmKL9HM0MBhsYl2U7Ey9xbyNNgGoC77HtrZZaaco4PgNqOJlB1CbNQyoxsbWtraHKANqc+gdqPJ3ELDiSUdX9rpZnOxak9FQhAFVMUEOj5QOBtTKXubiLN+jkkMGVA783oG628aohhwbnjed2rYCzz3ysAjUuvgpqbDrAFSF+EYGDox0cbHG6KFn4e7P4jwkJ9J1kVcymwG/nHUE9csCNeUl8lDYSzxWJCSzQK0wZ4F6xUYLHGsBcwkLCmjOe+UPOaBaxQTMWWDEoMKwtUi/QAOlKc3BoLLjxZnYEHYDgRu6s7oVLy15mlJsKYl8tf0wXHc4TpS2I83Q4CjrUTuTqZs6jT9wvGnrPVqiw3L1A3pU2xjM/NC5red7xFxVjxRXR6DjEpN+BkcHe/QDqDvGkX6LI2xBj/pkXpRkvHWGy7NnI2DQZRu2Le4qidd8m7D1HkZI10aNzWbbfpQd159KdEpdT+BdC5MK9HslIUULmXF+C1TXHkd0Nk5ua00pedvFrVJtv7MAwLbsvSOymVM8DR3FxR7VeWo5809zxOOa4EsuGWdY0kbFw5KwqfQ+HT1BBulz434mAV+HrW+EAVW+6jAfHYndvDJOhcUcaFnpIv1MDUxGqXlKY2gtMyn0O41UY7BW6P1+9mowYixTGBQKE/zsHvo01KTfYUA1PArCk0ZwjwZ9euQyXGil/qfaaWp4rSKkUfHplRfIBwkhy7KBeZvUDwKoM3UKc51BNedQNAOorVRatQmBKoF9hfqq8Gl8UsUpPE5TPwRU40NBg8/nU7l0g8v627P7BnsBUGV3ofv7XXohqSrXHzbVTAvX2ceAqB+1w3B7H/XVDPikwmXCpdIse+sVl/f34aA4CsnqcJsq0A2yyVKvSeXHVwnXkVaF695Kaet92eL9hhC9v58ki1LhYITSfl37/f0VRVRdUq+BSqTdZ5ZDNgCi9Qz8fKN/E3dCkX6NBtY29cH1hHoivbf2mIkPWGzc2q7zbmZm5oRrxi+ohgyLx0l8Q/oy0/gy07c+c2R7EuNmjidmNs0d/RrtzCjhj+jrp0oGZqKa5acIr0y8BsMv7XLSc1Ne4ZpqHNHMPN1aHmaSzTOPsl3NCJitMwNYkemTmiiPWOilFCMLMWqYJ7qnma6ZmdVCAbLHmZeZmXYyutvqecpMLXfhXsoT3xHUaEIziUqNRtMQ8E11BUss90sazfkM6xJz1C4yZ4/rrMCZl4RtUYybeWl5Bm/wXyDyLRb1GiE1TBz+D3GTOK6PztyWesBeo9nnwIKvNENFRfpVGuBKStGjqI1EJpd4RSFc5C89wJBdx+xDCd8tDH5TS28JGwQjMYL3HZDcIo/oUAAP+jzZSvLz6vmY7xyZkC+JU+p0vFqmy4rIZoG5agnOJSUlJRGuVK0rBZhkJSUYAP9MsoB9SQnGsLKTRcc5w2uRfnsN8POXWVD+vjX9S3fgn24G4+rFvGrXt/fpn+ZRzPg3akD5u+P0F+rC6xMEtqVFkYoa+K01wDUPDbX/5HHFb93g36FyFWWx71dDWVZWVvDq/f2MxZSiBn6WBnRXWu10Tb9Wq10sZHmbe3uvHi+MzYVLzA7hwyOurhb0NXT/zJCQ5YkxFoXT9V/ILUb9D2tgkE0CHrG9da4LtbDq6WGnfPlUYWw+XDegKQRqwsyYxMcJv/l5cgpez6rzpX5wlLy6GIv9H2RBUslO6Y8zFFP/vRowLtLDsljjqLOTdWfGzTHM2hPL8libOC94Z+i+GBubZ+HI4myj+KYUmxkbO1QVArXZUVVWdqu4xLKntqKiphm5EzU11WwKnDTStVhNjZcFeWb/wUjWN7slaS+cyHkSQh0dIXHRn6hr2BxUSY1ITGIFQowB9wrXK7qaPzmRhQJF+jdpYIBuozleu7dqenq6nDJ7VPKIFRr2ZQgfZv0cjQJyc3AkKVwDN7Vs/2dKPwA1ilcInfOJm8aeZz4KKxcvcivGVjBBrqV+FBiTE+XNbGh6eh2eeXqnBKx6OQtnPK9CuE2aXUmiu5j20PLpWnItSlGgh65jAsP7MtKpEvpRQ2YrU72Eyn5pAPtvujTFthRqYBhGlCJQY7vUsNR5B6MUchjyw24YQD2j7lAoNMuRya7wXmdP8Ig0Bx1PnV1UIY4Mcnyaook6m7xPxlc5xjo7O2GIrVu57uxcDcZI5CiEmM4qjluwg0FIqOHJ7G1n55w2XjDfT666d/YTktZSfk8Pecvw1vfoE1JXE/4VgDJ03znhN6tJxb5/onO0sxZRqfXOzhVDvocubE4x/G/VwBjbSJT1qLBHnePIFAMqx734LazBJfYmDgQL//rFu81T3zS5i5ewPpGZgLxRS31Kkb7aggVIFN0xIyVMAvl75iStMbf2b3H0XV911cPtZMw81cfL9rayObO/61hvD09UyLmwubGxaoSucPLdAyUXY/5Rsc3a416KfcuysJl9NUtY1yIBY2/Wp18hm2L4X6yBkQYlWjfn9MqXmJkfs/AH5dxO8uW92aa/mNwOR9w9T2a1LGK3cLOJ7VLvXs+5QXVCRmHNKdLc3e3upoEB9TIP1OC5Bs4mHUOkZF/wze/uDmdzir8VvcNxh8OnWW12quLxuBu2gRHTDCe6nZScuR1uuz6KWubdTo4LIw1S7b5mqfBuKWBXDP4bNdDGzKVLtS4bN6+vyAOVu/N7lRGYvZcDtvKIjLy8BAJqi7JUXpaOeAl3UwjU6Xr0dnJ8o5Lzj2qUeOtvGhfbxkS3kwyoOi9vMV+2LS4OJ0rlz6rNxcVn6X2BMm92dDKZbNB0KW9YRAAE+1S4+2P+UWuFhjpZ6c4TOtM8UKuDZ4ugY/i5LtL/jAZKo67BQJdwz6t3onVqnZWOSjjbiV51vexLAqj9tuZd0xzcThr8dyOv9mO4nbS/3qn0L7BmytGyYtNiKxnBZtTbilqbrb3+Fdug20oP/dIBNel3VNsq0laJ1+xsttl6447qfnrhtSWthUDdERZhcjrsq+Os+6+vVa+vD+o1qa+Ca/Kn1hLuOe9JWuo/NMI/KnLZdKRdM29B4H4WN0iR/mc0sGPym0347qNHkPr3pxVUfxsLsnlVKg0QvkvhNwgmWIfOsii96UH+BCNUjclkOmAjBpHOTX673W1a54ms3GF3mE2j3K7Z7vabNKYL0mdymB2mLZ5vMbt9fn93HTcNu0+/X3OcL47jDtUgytRvJNsYH6gEk70KvgZcyZBUM0tmzX4V5JlryVYQHBxdJdwOBNrt5pm3e6WAVzH4b9WAznLSaPHiDel277Gi+vb29sGyjt/bW2Yeys6P8egnyg5E1Fnk2OL89jZjsVjecEp0OAOx7s3mtVQPWCRELcY03gZg02fZtiCG8N7Sp9stjCqNlh4wZdb8bzTHxN2OgoOkEoFjmMSO3t4e2c5OBk+Icej2MWJhNZRF7h1X42BWIPGNRzFQ1MBvpAHcKUUqaqCogaIGihooaqCogV+mgUJfoIXhXyawyLiogT+lgY/v0ZHl7qFcMV45pv1ku/Qx759i/19n+rHMH6d+X/h/Wu77HIspP1sDLTuTJ7ysNpPJYBnpE3Fj9H13aZ1TFfiUnj9Nnsv/wqUeh6xML1u3LaTxKavV6kkURn0bjrTNZ8TVKFntcybHwbhntTYhq7zpLLt+a8xMrma+MQMY6LJuFTAc9ECcdQrZelnAulN8SSvQzu8YvKK0gU9iklS0QvlYQ76mR59bQsX6f+UgZqm+BKToKeVj0e+fJd3iHG3rh/sidutisQosjf2AWlLIs8OQWiGl0hFmTkhO6xEH3xfY7ZfOiGXXGCe2kPVOyssuMxUOify8i1ENIaK3AarC1n8rLLtG9K35XqAY+u00YOy+r3w86Ot0tsj2Wh/HxsbYar2kZgBUI8HK1BYC7dhyr3qgBudExxJexg5KgNzxibHrgdOxjoDW0ZtZPmZ9khGpwE+2/EDyy9ZWp58bG+c09QWgLHFI0+XlaemPgdoZDe6WxekgDFrv0n3Xwj4k2lLTjY2NXmI8Ly93iUDV1esnJsNx1PWNlHOa1r7GxgDp0IQnG4/pBk9u3E+NjfPweMF3d4NB5QdcvxUsBn4jDYxUSWbdMq/dxq3TaDhOM6jbo8OFT3/xqOdhoCrao1pM6Hbw6C9j56BXjptga1Ug6zhzgUJhbsWPpg0a6h/VxeDuERT/NKjNtlrpmcDc/R1zfZqnOv0Z/DrJ0j8G6lr4ifB7GgC1A6/ECgAAIABJREFUEZtUS25g5scvTItDAXT1PHctArWMTsCGlVnIvlEN7c+OExLM4WSGwlXUIm4ipdVVCqBax8cL7pm3QsXAb6aBkZdawRxhZn7bG9iyNAqgRqJzFePXzjElgOo+3p6FX11Jx1ycjVEt2/fxzu3tkQtO5/TfbD856FOtbloKI1Krjcij8c7aWTvdSYaEYHptkxmlfEuV8P8Mu0J3AVAnsh1gYBtrU98n0Qllnx9AXUmhM30GULn6weGD4ewimc2XA2rtt0B9aG5utuU4Z+gybBBxYnQ+AeDdcJ7q78zB/fvCiyn/3xoYGT6gdOQx6OWTFbFYLH2BjccNk7FAxesuLmP5II+tR1tQSf4o+zLVy7z77Y7IdI4+XO8q2kRIe1QpGq3KQ0M84Sz9DfKA6hHG1povgVoS72BtPioEqtvLov6Y+GRDA7K+AXXQFNa7hP5qVvIboA6voj0x9OrrVGVSKB6z7JX7udkLrseHAQzfrbl/dChWGXKL9DtrYGTMDV9kgtvotUvd0daUFd1muUkqlSpEoOJlqj3EnqPyzRxQ4T2U7O7Ls95H+xhQm3MPWnmonXVVNQ1cQgWbE2X8S6B66xlQddoCoDZLC9/Iv68t7ijYxcxlN/M96iTtqkqsU3YjfQvUVbsZzZgmZIxGG7dGzlgm/qk1lBuQ2HzL6Ir5liqet3Szr22K9FtrYIQ6h04V9JCfEPojstLydXy6HK1aWFhYgqvQ9qAIVPEqthX2qItE55qvK22aFoEqIhlYDmWQM3GeA6osJQK1/XroowJaGVADehGoXvGBXKdgO43wFh0SJKWlhePLwqLKKpMn0rZAyHgKG6C/4NFfB5sqUvkBqAk7omqYa2G5rBrNGIYdK9sVZWYJ74aRZ5enZahGZDqqecoz58UuOn9WPP6WGliUNnDqLvpEKn1X6+txwb3ePOF/WV9f79caK1foxkTFpu92oArnit31SfnChvlBORnufzK2mX1mvE81oUf1PelKng918pRmc339RrHuvVNMPdme/POwySazWRzlG19yaF8Bd49wj5hKd6gZB1u5MFZVemhmLvGa9HrWaX5BTbOa9dJqM8q1K65KXvQYQ3OhEAS6cEN0rF+r0uvrp4Roz9fX6+2FYK+hqbphK8wQdSHhqWk93oVun6i7TKxrbd7yeodeU3fZt60vpBajfhMNcMcvPOl7biLyxadnUL1peB7mnyaT5prXKhSK1g2gcSK3K8r0oEpFhQN84eSz8YOdA8/Pria8GF1LR4KaWTW34MC7vuJWEpNqzE8WM5yKooO1b7APsd+IuzfFL+PXwRX0odyUSrrCUtZ8KpVJoDBIJU2KAs/lb6VY4JgKl8923FLEcunTYq4UnfAqm5W9BfDuqIp9MntFyEkIk8K7hcArvfMbVPRAQiYV1ABzWjZ4IRE9PiEgsPU2mQwUX8gU6ffWAN5+Cjsf9tmIRO1llCkllVttq8aKjvX1SvSojNbki8Pr64OT6+tPMiXes7hmdxPaZztav21hl30AeRbhfvq1zMZL7tce0aM25b345/Ugtxg5G+dl2YmtpY31qITzdqLkawmC8tX1D8BmyVlqYjVYX+/Bmfd1ff3Zy6JrEFOBIyr5BA5JBJvX1x9F7ixdJK7u9Xa9Fr3oGWOwLr45qQ8bWVq7GDMgZiv+/Cs10ON/Wrj0s8fuD6lNKPthejGxqIFfq4FFvFJLpWN/JGR4V/ZHWYrpRQ38Qg0Y2Swlm6b8MeGL0iIVNVDUQFEDRQ0UNVDUQFEDRQ0UNVDUQFEDRQ0UNVDUQFEDRQ0UNVDUQFEDRQ0UNVDUQFEDRQ0UNVDUQFEDRQ0UNVDUQFEDRQ0UNVDUQFEDRQ0UNVDUQFEDRQ0UNfC3aYB9z1Skoga+0QD8jzD6Jv5HEfCf89cKfMkMQnN/XybnIi2dnZEfpRfT/jc0YDsIMzr8Cw4YaoZf9rv3/kA9fwLIc+mTkRnv9EJPT0Fm77D4pf879wz9/HXge1ox9L+jAfV20F7ZaFdM4UvlP0W6DccYtj0/+3Fm79QfIZmQTrvGPl095qf1BUAVXa8U8lYPlFcVnhfD/6saWL7mSWDY1I/NetY8Hk819FA55fEcBfDZ/L7Hc0EyXZ6Od+X00gUS6z1gQLU0gbA/WdNAAdKyOY99Q7WzU+zzZ92kx7OAh3fdmOeY1HoKWPGJx0F8GT0VHSey4emypkF8t217pMtzz9iWGlTS1HZXu8iTkSrl9mJl4Yf6WRnF3/8tDSw3AAPyTX1pZEe7v6OdWrORWn251uFaJPyV1tBw4QgzT4556qUdsRLv4iThJrq0Wq1+ktyGNVP9/f2zXjK03D9zOHPBk460VAtfu/iUun0JbiFotIM8Uzo90UCpaTzPifCP7Av+KXhdexLc2nLDACGDUQOYavsA7OVUWhuns4SMHG+mtO45VsxbWflDh38sT5H+pRoQgUqe9ZGtcFNNdU0aHnhkTYmhuukV5pnCQzVb6t3t97Ybu7ud8fqdAS7pPEKsNqwjzYr64b4bTTXhe/tKLqzd6F/P/J19fWVKomuILvX1bfoO+Vjfri+d3pjueR+D8k/Pra2tfjgueXpKEmX4Dvz6+rOibA3mFwn2aGVA1bSWkMty5lNijtKBbHrx939OA+9ANdUzCmZI+0FcOqbCFpMAarQp6000rxdl42VPOCr4bG3CyNLSkp82AqjwXvIkPBFd+x1c7TCgljpExxRwSwl/KoTfdAFmi7ufZhf4Y9bbUvSoJYM7S0sNIlBHsoIihgv2fpdB3EjUiF2qg/ghVfX17fmKFI//YxpYhgd8wl2jR93ArBPHtfO2tH9tdPQmyIaYHu0ndXQ0wpNPqTloG4pOHEVBvQDqFoAKH6MLgjsadYhA1cMzFKjKnmCHHFBZsIC43eOu6HEoTUpTQvBuzS4CNdejRgxwYQ2IewFUig49C1RUD5Ut0v+iBiT9Uxyx1fhDluMlQEOWTMrkBw3qRF3/uZyUGtPdySR76OZJpi1D1ybf99mU/YsRrzxRoZSXmeFA6inYKG8YscjVowyoW6pFuHrykirR45n3oEEG16TreSa5oyRUx8n5qTG+TmGv5i1dIlBZj2o08hGDoYYjyqp9IvEAqNwVPE0Ct6UMvUX6H9RA4EDov7joDu7r5Ou+6N3FkiadiKms+3B/Jz3WhbWCoFJd4W0rTwOqZevdxZVmU6J0CVHrhUOVuZcadjta0g13u6aVu4sVqe/iibtUXV1c9DdEEvWOi4uLkLDIjc77zy8umIezPKkD9lqO1Lh2SZ2itX1GSxsuLaTPdTZwZ7UOWsxUf3UxJp2tWBHovmVfmh7lCN/oTCXzxYvH/ykNlC6tN0ylHnsxIJQPtV04Z9oqiHFxzLDS9uhSVbn8My9+mkZinrjRtrZ6w02Pksi32kRKdLQdRreeZneuDjedWbrlaqdZaMRGAjM4ho6HbCEx6SrPB8dVjaB5IFPU+WDrFzRCUM+270lew7Gl/aGdrz3DTuie3Z5BqelizbjY9gQfVvIpp2mggEMx+D+kAQmnlinzAz+5Ltt5envhnrnyzLsX47jY/fuEUlYvLQMFyGVRvJKXyCRyXq7LEpIlLMTcTnE4YkqJV4tJhaOIgfv7+06ydn+/xUfO7h8sTfdnmBHgECEK5HEekXPcSXNWGpuDUOuGSpnAIhU1UNRAUQNFDRQ1UNRAUQNFDRQ1UNRAUQNFDRQ1UNRAUQNFDRQ1UNRAUQNFDRQ1UNRAUQNFDRQ1UNRAUQNFDRQ1UNRAUQNFDRQ1UNRAUQNFDRQ1UNRAUQNFDRQ1UNRAUQNFDRQ1UNRAUQNFDRQ1UNRAUQP/eg2MV+Y//fptmsrL5QVf8P731eLlv10T//tG/R4cLKeMhn/K5Yqdno4yfylfky5lFn2rfZ3682Nz3xx+yTjnP5Y7jIauv8zwFyJLTvHJY4726v+zJmbYRQjkubAjP4iYlk8faRZmQLi64lPEv/m0UfTaIz39GW1cpVQQP1D9kpnNpy/5MuHXREbccA/zPaoLV7Ekvu6ZHnwvz5+N3y5wt3WsER3P/Nmib/mmPEuudOPbKSG9ByZcGOf3b3uW9+6hoMS/PZgFqqbjZ7TTWz0Q/z5QuaHxH3cQ/3UV5MkCFrXSq76++6aCmILguDAnE++aGv9BQfRfC0oa+/qaCTdG2wbyBS3/WRNtywESeO+XwW2EHle/CEvsE/TvE4AaYP4W/ydIVznqO6scLxxaqU+11iV88i9bslq1ddUbH3tb44Z1FQ6nFkfKZG1W6ytByaF5q9U6wlTGNeSAWpfJZMRHmQ2BTMZCJE2ZTBPTuy1jHMpkssPVxOxu+0ctR5a01nP0I0/gaLVOsQfpqBhcObNaJ9AHDmR2hogaLEsJUZ5lapWk5vzcRpoR81q+/s7MWC4+KjZZDDy7WCcKW9hcT+Pd9lm4M9iiK1da644NrX1Brq6Bdw7w+HEvimY/a3xpl3USiZE2q/WGdXSrd2mB0ks0mVKD1dqEqIlcjQkZRpHjUqKeZWWtV8zb0TMLwePHO0mGp6y3FTifC9Go1bqcf94wjZoebESyw4AaQcsyOjKUSbZ0WU+Qm69csW5UI3DmdFsdzhnmnKETvBcjxDZitV5nFq3WdqKe0zKBP3iqoNg/jGZbPlb4ApdY6pkko1IEug1Uv/l+kW0b9YgMlZEFl6Ic6Sso+uLXdCPyGcEcUJXXTlzE+BAhTbiMoFNSoqdUg0vB79B6P6WqBY7MTcUp9U1NXb6Jl59HqYPSHZ7coJBZIR2En6uQwROmqtVHIdoOASFKB/u6wb07SdTw1ZLu0lPDgHJEFONhiAChvgVAvWNPUdVOQe80QOlR0/AiR8ge9enDBtpHZHeCez1EHaVZDuJvj0JIq+Ax1lNPw3xpvzmslh2kqN/REK4h5EaqtSoYUJlCKPMTR9YhRnz0X5r0njSNjxp9lAZ3++k+IQF7W9OLwlAwhI10CW6P2/wi4+cbaIPHswTt5EmXHmOdwSMHgUFPF5zcrne7IYUNZ8qgSWroJGQfRwy29gipMdAGP9WWWAxiVFgfHtqlUQ/upMM8x3/Bsc73Cajjh8CBcMeduoOvKRoK0Zl3oHbQ5cbGxq6uCBlWObYbX4MxUubv6lVmpk2AZR6oZZqzxsZ1V8rLL1qRfUlTRiSZxn0RqAPX9KxxLuhWnsSdlw9zXTQEnecI2SeTjW1WnjwHpa8VfUGAv4qeEPVWVF6qf4r0ng8MO6eNS0uNjaPmF45rqjLThpPGGr5P89jY2JF6yTPCsUm6D9HNhLSYoiuNm/UaBqUc6Vao6HeY9aieRt05gFob7Nke6NyEb843MjbYO2RNVtxlunQ9VDCzK1e6gqdDgTW48pTNOhPy2sMHdHDxRQiyoFisscPFgDpuGhngoZJyY59fUUaG6T0cJtt7BwYPLwrulifVYZKcuuEmiRjry96kZgNztH5sbGGcC7gm24mxAU5u2919jY0br+hiIW3bDl+gzcu7CGZkxHhz3mgbmgt26Wobd4X9RvVAo/HY2VGTuFRNfOL7Tz6tFD4BdRAdFZxQ60jPFemgvb0FPvz5CapdXl420y3yqqkk5JRWky5xs4nKVjxIc0CV9T8zaD9qEvyqe3h8fK4efRceVQyocC3MCr46lEcUuAJDnOWJr6ueX17WwnMwmb/miNpxzIAKiVNui9edilJ6s0oHmvvHQTu+GC6ay8+enWTGtTc+XunpzTPCMaE5E8/4bj17TipbF8TT7A/GqNnAFnuZqtZv8Bs0rqCKOC1wvmVxViFTmQbdZ6sI1GtO6XI3ni4zn7PqDdrwuPO0Kid890CWF37VKQbUSZphnfpdUKc2w6u3JXUOoOLmp3RX/pZVMu1Q4mRUjwYM+T8D1bgTDoeEoPFY6J9exiimkbxGUfYZQDWOj29rmdNacrcu6pV0tIpc98FQpl1mXJEGZXUNLsrEk3/HTyVcWL8Rmi/rcnSNbrCuRQRq5QegjujbZkP3Ew2d5IH5Rz011JGD7K4oXqa07KO/znDKGAKopMPVUN8QNw2y8yxQea0WQh7tOaDW0wJ0SeLCcuexBj1qJL6Ay26eJ+TkbLstZEC3OqjBlXaYZo1NmnowbQj1YGwmvQNjntQ4XIgxH9iYnCy9A1X0hS0/WMin4PgG1E7pAU77j8lGsCccCm1enLznshiOcMKx53wWqFGd0mWC4JAbL+i9jlBDyAlY8N3Db2XUcQbUaQAVJAI1mCB8OZrffrJVnxJMuUc/NFAn3QDyiCwFoA7oPwH1OQOfysp9M4AaDzGqJBc5oMqnFfGgm84yoDp1TA7p8MhwRhhQdc4LMYokEjuhlKCZzJ79K34/ABUtqqTbHDfkuc8B9UOPSlo8Mo4rjQU4UuGIceR0REJqNFUStXx8jF2iLFD5lWkjwuuaBNewzHFcH56eoLPsPOq0Fj1hyqGsdO3HYhWpwh5VEn8wkpJ0vZLE8FzklOYDi7rhLhZLLmIk5jXRqRQVqklTOAmmkZNSQhpNeLaDVnw1HCd5yXbZYgx6VI+ST7Y08610Dq4NnxWFg9RxYYHnAjEbX+Fojchi1r3EpX6yrqKueWw/W5r9WgwXAXmixc+AGk1aqutfOFn9Up1SXTd3pfSmn2yc9xbjaz7tkRFJLAGs2Pb8TAuDqv0SXh7YCNragzsWkqgfLSEri7G6Xn3BGFW35GqPxWJz/gq+JFZ+EhMZ5IV3dSMpNug29mgypV4uWaGUvOSAKgk9esczdJ8BVdWJzUJi8g5xcNYeD8vegTp7nuR0E6rDPMd//LFufpqOzM/XvjekWjU2f64SPBVcz4F8jfb10ih7qmcp4V7anY9LfU2j3dL0Xu+UsJLk+8d2RjZUikXJ7fy8f2l+t46sCVPz81eaMSUXcszPz7ulwyRxN58Ozc/vlpy1BueHjgX9fl/1uVSK97HKPG+4GIzv1GRcAt2V3AsKc+mlRrhqoYJU6rQHm4lshV4PBTFRGwmZwbRecdY37xEO5ucfCFmiosDW7GNPZKhsVV3tmxQ3JCOVzs4fwBXxuxz0qL7NDY30SAbkr2SkgqLbu2RCbaSFj37ZkqDZ8SsogHpOg1Ep1VzoxoOqg1mpwl4iX1J45ssVDKj9wvT8irRBrrssFxTnaCK/TJ3zOyr7CZzICpt8miq6yJKCcc/3qKwqMRUTqDAFeCsqIIVO3yvYRVmaNKWTbEpT5fNmae2TYHoxbneH7yKpg935ZRqcryGvND0/3+UMNAZdUEhKsaa7vtJAyRN4d3Mhx/yG9N8DVMyj+vFmu/quJH4iSBVXy4JhrkfalqbuNSg7OxZiec7wyk4V883DeBDv7iB8SDqsePdKrSrVZqoygwYxTRKkVB8cJlyaRZixnVufWwwZmmd9fn3ZBU4WyPjCwsKiowCo3IxCJfX5qO9GgfmAJJhsBK6ZQOcaOpCBhSZu/dmL16NXpAjOxd6oyPMArt3FgPvDA1SU2FpGuEe8e1PF2nsLsXtLmDE97pXhVXp5UFp/W8/JM0t6/fQCHupvVIn6LSy6ANTShYWx/YWVqJdbWzxYeHkZxQvMmHna7q5C5thCmCrq1zgLxvYagWqaSWLdrDJtVhMd2F/xkKUlBxdPZsUO3Na+kW51Wi8sL5Tx/CiTs7CQfTiI6dvZmAGeDGVDJcMLI6Ghe7PZDt5Z6iDGA4QcpzwXW7C6zBdrEtmGmLSJR5bWHKR61/HAm7h/eiDx+Nje+fg4XtAOLnE8ITG2PdaOP3acPD5WPj7uASY54uoeHx+3JETZ9vjY1/P4uNuGDaeOHyd0PJFvpFvUIKBaUvp8XluJ8VsTi2AxvBjQ1fLKirpauQxnbISGnOECoBIJOMYqIAG0oFt4fATWmcCTfAWyS/Oo4eOqUcIrRaYyjPTEgDqfS+QsSpQgyDGGPSz0Th2IwjYbcsjb5iZjFiYAExMfM4nZ+XCTeJTIiVwUICEcu28lErVEmZMYeDwBAvlG1HcC/CBS3cmm/vnBx8cqHjqcI01yPjLx/mQSWcob2zBE+rMkUxIJmsnLs21l+mPn2SpAAUyfYoQaCoFGEseYDvmzzP/9+QqNOgaG39vLf3HN31PF0OCw0bZwpSgE6qcc//+n1U/PzoYnNvAs0v+sBo6DcbtJH/qtUdCDp7leP/g/e42KDYcG1JFSkO231kXv5eV4aekfPx1+60b8fZVjY6Iv6T8wp+Tkf7QVFId9ebL0A3PNHyR9WdM/jOSyY9Y/zPdthi/2iM834NvMxZhfpQHM/HIT37ml+enUzV+Ve9M/+/BhjC1e54IY76y/KsuU306lsIPqB8pZchJLd+r4QwI7+QIy3+T5MoLnBq7C/5FddWJu7n7rI8/Gubn5v2M8gcncjxvAjc/NjRa81n+sFUHebAwC3+8r8vr9kJ1dnb+mWy7TV3BJP9Xk15zOP07Up+q+5o2Zj6mvU74fe7jiZLsA5yiyvT3dU7m9PdOcjUDrKlbMo9mTmijW/QoWjlhsb0O1qIFOFb3N5nr/5e5f30/+UigQ9gtCEBMIf5kqVzyY/PlARytOipnwN7JsW97C3wn8Jxc1km5o2Nc2rL+xVPcLVJV8O/0Y0LXcNFi3WYdTet/Q0PDp3srnlVSth7P3WOVE2NPBrlPyuaF+EeOjjqdtRkP5rF8dJcNiHvwcTztzV/SrfL8k7nDWGZ4teJ3+IKRu9Q2o8gBL8X6c7/jyAlRhX/U81cz66N4ZJkALr+xtbtzIN4+3AajvuVGqrzw7x2I8NtzmmeSPMvtf7t9zResUR1i+L80z+uaorqrK4Kol279JwWL8Z6DiohoGCzKuCIWTowUJb8EKMSSp/UujD+/K7JjUPQuzlDyf0vHrrPVUPuLtyJNtttavmMGuS0/UM+tnS/XfktGjoFKxMrpyfZfgB9Zi9ebZNEVzVqimdUxBr78t9R4TMShGGqg5TX3tNeEvJbzn/QWhg7kcU2Y301jDTiTD940xFliZql5b6uUlt9Z01EIy1ugVi81SSdmy9abRSGLaB1ZQzD+AwERBj8oTz7RxqD80ARiUIG0IRevSZY2DuU63wvypR10NG3nSjiVrr/+25BH2qKChzdmyEhxHpf2NqyfVLCpLfG9j4zhW1hsbe3l5E9hD8zWsBe1vAsSMQ3vCdWNjE8OJt7GRMZBlGpsqGu+1TZWNaAFpFqhLHXh2z2bwaDW+Np7xspazJHon8DxjQFVmDl+rAijIsxYuxVHBPNlCFKZVjaU4T+AoNjGfxprc2LhjnvASWYtVOlMryaeIx+STVXuKG5MZtMKYtPEzkNt9D6TRam0m45PTjD//KAK1Bjy9pC7XoizHpYad3kwUS6jy0L6Sn2d2N9+SbmWk3yAC9TR8Knt1PfKkRfMM66kTWOieV/Py3VT7t6XeYyKGefmEImOM9pOaOCrBLgqjAV32+It/V3JA5c98XV1d7lEimynH/Wl+gGbKTTC2dJT2YnEpbiGjlPa/VYZ7FWh3A20iQ6LhDo17CT/JbBlpAVCx62+mMRitwhx1E1ut8Z/qyAWOUu2ZeFU6hA9A5ef0tL6ryzfJgOqKw0AHdhD7bO0oHCAl1zgi6q0GRJLC8hVWygU6pR5mop2D/AHD1ToVTYdyOevY0hH6m0ViaZqCreWGjRzh1Iw4HxbA0J0AqOaSBpYpHSNNlNprLxQwzkykWZTIUCEtV6SGCH+CAqD3BwT/IkbA3oskLpgm/H3vFVzIplHY5TQx61vhToRJLkNinjpTQncZdi+EpWmQ+mzvJcVQo+GYZEL4FGXebRdvjWMRqFiwaxgkmxDlfSvQjKB8fx+rBqGTwcGlgy+BitxJh1iDkVWEL/EW0KlvJMQaNoqM5Jtix/DG9HMgEp5XTigq+PQpqUGN0/FHbPtZudKlD69lGXwu8HPPcz2qZMOdMQ4MpA29skymY8rqBgT4cjqWmfOtVWQ2NAPo0ugS646yxA9mMkpbqImo9wRpf9WVqoZk9KaTPRjZcvk8OHq6fW6m5DqTdC7TOIVHfSt1lWU6/T0sE8z82CFP/MCZYSuTmce19vqFi8wrHkU6ZoI+Jz0mc+VSn9Wqv8lnRscfp34Mr1vpa+RYSHVkzuzOQVtIC8g4C4Gqzpw67sEkJu+n55lMG52Axf4SzIRbMpln2m1cv1CvuTIyfCOQWVeME+MGg6zban2wBi8yTwAq3+S8HZT1pVLeMo1/LbNcCFR8UlD/mGlkXwQ8ocaZRY2//Q0lJTP9mafuzAJtKXFcgv1F4Vq/sYE6BiKNdn9z9ZKmrbf5MvgZqE8wnCYtAKquMavT7DdTtjbawwOou+Iz4l0d4/ojnJyh8vTDYu97Dnw4oBKBOuzYGB5zpZVkgZo7rgxZcywyZH6/vIWF8mFJCT4zgIFrjQ5A1Q7KDmCz06E/yWR6TBtvbc5n/vlHsUdV71e7ZydZD6KpJZL72dnZEG5ivrwByjtfwyvQ5rKXm7YW9vGRG+QybaI/UtxypEdxyS2bOvAcKP8IVI1Bf4pWPGvm8NyzpHphzFvLw3SIKfUzUDFGzXfZstkDCexRZ5EpsD7bL+Du547QM/cW3Lt807D1EEBVlZE70bB6jU4TLYBKyux4hr9TCevT8cC3T+FBawyz8dU11Q8gKmIfISOGzIxdRrjV2dmw+PVgtZAexjuH2ol71fKEHnWJXk8vz6Y0JWsC+lJjNx1l7PI01ZgNPYkGVG0FifzTDRkeg8FYS4Xi6QA6LQSqxbCDu4wfjF8QccQXsRcA9fHKAuTngUrGc0DNjlFts7Dm3ZTishTShF1fA36LDKjfxU1lUAQqmWe5ghi31bNAQ7Zrvi3oogs5F4YnhAl2WmMvhZkuLDFWFRV147G9hkJkFOb/iWGxRzX6dtOefrwvPtTykiP2CKPSAIA6BUEtk/jp0TdOZu1Ac6IlI76elu0Uql2nwHPPGLyUp1ZY2twHoHZZe8v1GRixiybm1HCBAAAgAElEQVRoNf5e0pwG1r4LVNgxiYQxKjOcniV1K2ZV1yp6VFgMx/ADkL0T/xhsqnCOcOROtBkWgRoGGGGPWpAJxpli/y2Jd7DYE1MlA+oGbhzCHwdXgvROKFfWHIgPZ/Z5V3XWblDN7ELxMnVIlqQNDVHBbypZE79GWSt49KM+U41indTlt8gOS+wudhCJe3kHakqBR7/4MVIuMacCPo0RH7t1JswFQD1woq3fALUW5qeMKql1xX3JfVBGe0rxghbJG9rwVt4PyH5JE9kelRhbtnukIWgqidwpUTvEVn/DVPJjmlCIU0RijZv0i2RVGDHRYJe43f2PS/7XqWKPavRd98THMQMne66JSa/m5uZu3oB6xoCqcwqCtaA3I0p7B6+sCjaxHhVA1TGgOpLo/1o/APXZSrYNx7zkQoVM+GwCb/nnfTCtdByxin969KNHdWcvBfH6brNAvaYvVVxC9QZUVuydalXOsTSK3HXhDidrdJNo8dyLxAsf/exWygI1BYQSWacdBa4NLMxwReNhQTpa6l9Bo3eyPapK7IDVrgN0a3PUQ5bsXk7ZWdMhW3O04a3wzpGrpMihOQg8y2NGr7+b6WetAKhk64Zfy/aook5P22NysQz7yQFVXZ8D6kzhGPUgDsx8A9RxV1awjY33V984sQDDqSzJYYx6iHd5T8mHxPeT1exbP4uo1mfxSRLhQTFDu2FBPP7whz36QdlngG8OQH2A3ubmmPp/KbVtuqc2NzdvNId1qfjm/Oa0gj2mEnWXVmmTvPTampR5l4+TOqKOil98vddF6d7ZHFHQ2c3hA2E2KT9RhU6epUubm8vUdPv+HOg1OxuV56b9TosvBDEjqurqyfB+lbw5fZcwJpNbdDuZlL0zJX3CcmZgfnPQNiGdt6kX6ZSli94MzO8o8MWofOUALDbPCrITrk0lzSCiSpVGUpe+mTzQsc0VQX8HjOVIkmwU7pPJpFHSnXpIJu8U/bw3ue8fSibQJ5XY6eMNjUtkN569zX2T0CchD9Om/c3dSqKMChDopMH7XT3T0eZFcjvo3tx0CP7NLMpFAZHUZLJmR7Uq2VHcjCdfgyER5WISf7xkSZsHa2lPu0k7mjy9MvkC+VoRb/3U5m71+ph5q2YaDCcbVLvvejsw7G9udgtHGG87ljc3l/yb6967zSvDzuY8w+AWVVyKPVue22rc9FS96bKQoZRjc/DSN84SWjYxUCkgLpHs8GWSSQmxJJOLITPEqZPJPqeQBep1Kic/8lTQvILy6MFL7oXDNQmRdPiqSr0DwTnjpCqTSOLfLwfquStLqVLSHmbB7oBx2e0LulwmzYtbKhgmo4JUv0f4Q8XchzrLr00al1lKfWygYN/T6+kmhw9zpWBR/67DJZdLm7h0udIl9aKcCf7G7XJ1DZmowvGkUUmpVGVgQMtTwg2bXmpvv8UXRjNrKirMLvgEvdmlxxds3K44IpnO5xWPlvQY4Aabfj0SnfM8KU3hdRiyJt6yVWukVKFSBR/JUIMK5OojmyoFRYBp1+obHJB65MQSlepdLr+qrdrFxLCrWOnAu60LhtGSSYcGFqruPq45jBaD+/Ybd0IO7HG7y4WPWVIuu95ZIJjIuvUjUepaUDk7Oh3uuM+5XCaOEsTCvKTNRFXOqRLZlNTs6tw1ONnXNzmaE7W1w5BzJgZd1kQqG2hGXK0UZv+FtOlwxeOuqJdwzd0uu2OG9bylHv1TYR6SNKtUaLZpgcyqVFLzHT7IOoYWXK/sbZck0gvZygWsjoMP5d5PIg6Hy+FuJ9V2l7t/V0U1B5Z6ld+gUhmm3xv2nv1nhmRKpVKN/0oIYmElFCBRNjYplQMPiZPj48nI8fHxhAxfwonDswLR8uoWpXryuK5j3RmsX99pPJ/BMzb8yHi85wJLfEiBKJ7FK5VcVkjTw/Fx4zg4g9YY0N7olEWNk9rj+1RL+/HxxSIXuF1XK8ueFvB42w8Gg48frpBEqxJxjlGI2/wsmne0BXeHIOn9GctaAGKTmMq94+M5VKJKjBFRMxfjLaK5p221TKkcaqg8gJBgkI15+YFUcFV51iojvHI09WBjOlI+X1d84J5TG+Shibq9BLi/U3WHsvk4Jh9t51j7ByyoQgHJe48fSiSkdGVNrZTfLpTsvisuqy4xO4eSjHIaZAai8tncusgbM/HSiRcRpqJMzaB1uv5R3gC0DuqUkc7b+S1mYSrfO37I13i9PtehQuAHHb8JwaTBkgU14YhYp8bj4wUvX328vYaL+L0SBYX/jqDMOKzff1fjR5GczqiT4XHA6sqMmH8O8aLJLrNHFe1JeKZzuVFn/CBA96Lw5CJ4HYyrGXHGd4yKEX/pR82pIUSX46HW4aKoGYNsdRAotJD9S5y/n1m8yDKJ2MTv53pLCZTtKrZyoHqL/Dag8xRO6X5K/8JGR5bT36ecH07Fa/wh5jc7wQylwXT7m1UKXWxUQdmb0f8W1To1GjNmBP+AdId/u+HIH9Tob0hWRyKRsuTfIOiviai5BsX+Wpl/fm5JpLp3SHxb+ue35f+nBfwf3uX/P/X6PaXyf24QIZdIskOa37MV/8Ra8ffLc7Y/X/G6yTnjn8/9s3KWTk5O/pWplF8HktqGiz/xBsItx1P3mHjG1CVqfvq99wS85Z0iveYLNZVMZhckvkj6b6J0cy3/1H6JuzZ0/QnV57WzKLAVwr+b+gThL62ivAH1LfCTamxx0Is/caX5lwMfljFAE9KU6gf+UaukgiBMFbxj5Uyh+TMhv4jyk2qeZVOnGPs4p/BTuX/FDDb+4kVgR9BXWVgcFytIypWIDA8Pe9+juQYszedOc5zEjDm2n3h7a1w7Xwh7Z/dF4hdRuaqg2FvJXNQXmbGCNj5uHf4yBcuJQ58ScrVnsW+aYY1hwnJHsUS+DtmkXPZsZIHp/HsqyyFvnz9ibMTc7KcgZ+40lxbrxtIXK1D6IrrpEVPffvKt3n/9aHJrPBgRu1++YrX/LfNXgTyDr9I+xRVk5UuWjv6b2ZVPnP/EaYW13Fp+LyedOLB/lZgYzDAzyoyMr5y4wIwTwglSN+XSshnLapZ0Zy0/kvBNy3HMjItKzMoBUG075VdoDnxzlnswX9drLd8kAau1fFbNPSL84RVAkuqBOWjjAArDuLIxw25Q3tjYyL4ZqWBiPhp3stTepb38cCFwdM3WFWw7VtT43tpqfCq/a0YEqd6wlmPqWjcy8zjI7E9RQAlWSZbGM4HpQqAiQ1YiZDY4P3zqwZ2Va+cCE9Z5FBz0lE+142hZFJWUecoq645hoWajfBkf8a9mozCbDO+hLDwGyZG2cuuWWOW6lqlyq7YJqXk6OiLJVuukzrhXju/+JS/lU9X5JFyDy3JrV05dzOpFxMixQ5yaf89FSsuWr1ipoU3f5Qzz8PpGsuUDLMkxFcHG9y3220BZ+U22G5b1vnfw7WzVHPdGrXhRiLFxnV0U23KVpORxcwgpdeXL8y1iHvzk7VHhuYB5//tFdEejU2bFmK5lxiO6K8V4KAnzU2aU0m5mn6LAUZx08glOOahvXi3aTrJUk2VbzPUBqPV+WMjprziLh5m1KBp5GNNZSTvsyqcjrVJzVLTKe2uHxM7MQZnjuFIsAVFBC8SNgoHGUyaBzSWjLnEOUyyhXvZ4PMhfX80fIeRBEUdprQf5Q5P8PpWmYfTB/EjCXambqlqIDWasrQvwd7pBGplVmHsPazVLTOCHRz/W+iERSDDOsiZ2e9ilzZKOuR2EGMNAoAu+U2jUyPw/i9R5lT3SdUIuDAjDIet6NsqKKreIQdgiVaWYIhoGSMkUY0aFwzxzHI9cHnan7+6JJmsJDRX9AuYyHAnhGQVsfBl17YgwJeQYFmWFpFyKO0PUdGMkh+U0PhUvAKpsV5BaHRTIhoku3KN6zmGres8U98G5celDCir1dJLmu7RK63lWH7Asnnr91TMOVnhwPSPMwSouSh+BhX85svtvcXOi4h6xZ6lc8ujr73AjlU4xM+bvfixTWO//KDyUGaxc80Cp3JhvTl3dDaCeOKsymSd7Kb+cHldX9lZ1r5ca4h2Njz5FDRnPaGn8Ee6d5RPdPTCxrMc1zhO8Izecr5kaOMntUybT52rkJ0MMqAK95Zr9lxWRzFRa7PSyBSR26p+E59Ne8hR/ylT1S/fhw+4mk9n0ewJNLXp3S6MVbifzxGXg71Z7qDVskNfpMaoo12q7EstWVGFCX9tbLji0Wm28X0l2zzPJ2rEeomtlnoDDkzsXjW7rQ+ZSmJeXerpPM1sNH4DaC4GZjVaOeB0wT33Q7LzfGlzvmYr6tdpzW5Vwm8m0+Ee88qgW2a9CzYMQeAQDWHPSCL9/mdOgajvQwUxuF/S43ZafkWsm6OWfg6eZzJ6hh1RImT0qdJpvDo5H1Mz8Nx9Un9Rv1BFdV7Ss4Fla17fdNCY8iNm7enKljkVDwjcW3LH7us67GhIyeBwoJkhJvjxwraw93WnMZGrRwfXR0FamC+vFE6btTG1bFOOzPEkOzJ2ZzLFpNBZUWbVal+KhTRWeGwmf1Ndn0oIbKrWuyMimFkbCUyNy24jD3NW5GG1lzwytzwHepMQMnbaarnCvqHARQ78OqIOzzNQdQJXHDyC4H0A904y1rtzPwNjJ92Cl9Y2aTothv3IHvVENckyrhvEL43C3eXa4018I1Hq2McIyrKdKmlZaWw0xPC3GrHy7EIzpuhX9ra2t3YWG0pI4+x51yHAgW36trq4eDO6TDi0C1WfCFvG6cMGZf9R3WoAzUHQvDXhSbTqe2EXxxrfmZ1u1sMordbEH0poAv+bV162tLnZplS7/PoPdWKqmurqyXz8E20mcDn4AKqmAwFG4shu2P1VX18yPI8cbwTIbYx/mJK2+dXZEoSnhosHr7c5q+GI/Vu0h4UQY2jCwOvYpXjmjE6/xojvT0ePqtoFM2iizH7P2pNN8IqytrK7ufWbc8nREoWLCz9ahf1rkS0yM4RtVj7C+OPu22ZXX8adHv9HHGJBKmFGKQH0rLAYGtOIYFXUL22CQoNqWb46gDtXHhUDdmUfegV0yrsFoCSZY15JQI38zRarruaSK3SaS+BGY3y23Ou3oQO9fENUhvtuRKxGoq4rt6uqyTej0xtlbXX3a/3lwItblJ/zEnI6nlj1VykjkqTvwY0DdVDTU1zekFkiThmriBrNVYjE46xmx/nCaOSiEgtsPEGH/8OhvYIZuAKr8xlw+N+piuGrybV/Sdd4W1+y1PJ+PLdmgjxxJ7DsstBZuVrhE7nCIphcD9dvAoAUqVjEQ5CkL1APmWGRzit3NcGkLf7J4PPfBCArwJePBoXEPtdenaA/OlK59UdgVdYhc274CapU/juwpOeEuQw1SKpQxvnmSxE0VLIwRDChYbuHbxPGOtZfsOtVIqA4OdYv+UZVjZrWO9ZciUOvC9fU+/ZpF5jaJks95SZ+7vt7J3Lm/tz8H1PJeOFq3jx+6GMM8SaapuT6YA2reMpscw+qkgGCbKZ55MsCSdKIgBUH5Tn4Kpo/VcNtXI9kR2AgmO4eQzSybYkBFncZzzpBn4PGQvAKoYa6UfYwEoO7o7nz2+jgFULmZF0R1oHsB5YDqz16xJvJajwrrxY/HxPSf/DNAF+sqzhTpIc7rfiklJdjyIJJyJjhO7biCb06qraHwcmtzX0g4LtAyAOnTh6KulY4VGac+KQQqf4mbtWSqgUsET+sqhtxluHA1cEDHjIAP9YMVdSARYNk2SOKtyFByV9+seLZxvDxWJ+/wJPAxu6TOSLx2ANWY+gBU0Y9UZznEb95xjEfA9cJ2UKpM8qW+Ho7oHhVDZfRoINCk6K/jjSXOfVHQgDuJz9nxsXud81VCZHOFPeqAf8oCB6sAaoWjTv684nIFspUTfyXxA7GtS/TiJnpRWydv2nFdRKMaVR/ZVW1xfOBMGErTJuSV7+zKjSJQ0wNEVqHjuFqn4lhmRyb8s5CYs5fnmi8V0Okb/yxQq2FLju9KBKHAXTRsfF2TFfLrb3rUrIV/noPRxz7AIO0+BlQ8+j+Qcmxeno3oqwe866IS8jpWA22NVr9fA2X9ActUohxHT4Xn3wt61FF+WexRLdEjKNnr7iyNOyo5mxVAtflegOoNXGXQVTe6WLK6Issql5TauN5wSvUqJv78nwEqKBR4ypg6pqjQUNpPg4d1Cmrd37zR43Z9pNp2PV1j7p3P96980llyvO+Y2t/HXhlKl+Jgf0yhQv+WI+7V5xoccgip2JmCEVWgx+SxO9QtLk5lSCVG4qrkSDKjF+z7+y46ZfQI1v39G5O+ItHt2t/fX5HunZ7rz+cGp+h0TT47wfc9qeOyffMxrCkPxiqYNSl/ZL9PDu7bG+QletXGvkcoN5bRVkfQjl7WeIi9SfY3YQlQ4wfP/c39ToldWNpvVdCRoze0lElb9zcd1HBtW6fh/cVtk2boTSCfGDXE1zZxl+1Tz+jqVVrTs0ZdV5kjs2mA7FLN4oVJMFS0qVrB/UCxULpp2Nl73fcvPw4o+iEuZPfKwilRdLq6QqpFFTZM22/cyWg9DSG1n30H0qynipP3JEyamq72z1U0uiA53N93dkpKeWYcc6waNxY4AJLcqc4rlK9jqkrghamwpZBFVddk8nR/QV5y5dwfHFoxdepeVVdDyeF958B7tkXFwQB0mhkXDpLyZq0wI4n28vNij5pUaU4426xHx6dbZMljN4AaMAGoajZGRZXZxx0AquJZTmRNz0r5Stc2L0+YAZZfQpaJMN2YmJjYM05OTFTxI+uHIwF7aNrlWunB3VpiXeJPwngRVp4sNrhc/VVkQjSK7FYSZTkLeQqWJ+R4I5Q+4Nmov8D3b/7HheABqmyZmMClhvXRlp9q+icib61QuqnTB1NWJNdOoCtzuR+NJDmhdcCgtf0Zv4ej+Ll5yw+gwusuTZdaulVwxaAKglWgG4aV0utTvtR576T62UbUGAajlxOzZub+FIQu2dvP3vUNrntusp5NDbhcz29A5UbXxQY1tGfi01Gf1Ln3lkTUbuRWsBd7y70e953veHANjKSCdCZAdg33GNuPwf3oNptTUMy3Hwl4/5uBAevBuMsFieYmfPg9MTGDRqSTAVjhgpZ0b81Rs29PQc4tpp0DOs/6pzfynrmo8ywlqOrqkce8A3Ct9d9Zachqfr+TiGzLHWoVrC08Bid2LcVHqwVUGpfC6tYfW3a4gq37BqpYrY3DYNbnnLK85xoX7X+Dvd4jwXejp74ySTzVU25+qPY9xTRO/WaXYpTwY44VlUpj2F3HC8v1cCt13MVW4cS/6+6uigzZFed3S1JVbZ2UGubvPBp2sX8NDT+0vzMe5HgZr5TBgpQ9EjCdh9eD3JMCJo/QZdY6UsYjmhlJvj9FkHTy8PCQGH142JMYFx5qcT78zhhPx62HjsKLISt/Lm1+eBgV88gZMxEjjG3WhFXCZBWUWCh/eGh7SBK+BXIeHhbYu4Js8uFhEk+oErux9wHW+YgZfWjm4EVc17aDTPXssko6Ds3ng6xFypOHh1jOXFOU+9YgtEciq24reccpvJsyMQ+dyMhXIQDgob4gJnDXqRt8WERniNk8RO1JSNl5Rslvd20rZaj38MMDm3kEsUYwg1aRClrDZ0RebQmWjZs+L7gIrBhvWezldT2LtjVka3toqyO1Yv7jFVEmy8KoGoklOHY8jGceBrPXTEwAB+/CwfJDFbtOgVhpU9vDOCqh22uCBWwBgQFUAoW1sUAtj4vYMfdwamk7CcQTq20Pi7i1YkhZ63h4yCw8PCz2snwl2/gZczpxZ1SHnE5nepKzjVw9OZyOe+T/l9GbheefaxdvfLypPAx8nVnZ7k7aci+5+Rw8u2w5+1he9+Ea5rP850duP2gxFt6lAAYTIf9UiT8lIXF4IV39AJ8fFPuz+RiL/8p81DZtk8EbiEgFt282gv3KdDpWGbVOpxP7DDlMgnVf5nwv8z8Q0pWbg2bD/tctXXeb3Pb7r9N+Sey22XTQcPaTWC8aDAbz6U9i9rPYlK0blmbdlp/F7n+HD2+BTWzE+HWDdZGIJVI4vfN1tp8XC4GRnybQhqZZPnbPP6+m/ymnwMvMzMvr36nTP1tTOdzI/+2Us9z42+V+KxDmoXnHjd8m/qcxf6tOOYkEH85IJP/1deS/4fBtzH+qkf++nKQ/fvkNl19iCl3gvZNbrP5G5n8SwXPyvzY4er9B8rXxajevXv8ak+/XNMdU1vWFTr9finDba4M/SP5hEqfbj8fPSEs8Ht/4YcY/TuwV1ygL81XHf/lXpoXivg73YqoRxFfMHoiBwp/eq8KznxS+xOJXlvgV1fu8aj7y83EQ+319j/jGJjGptDva8708X8ZnnvHmzigykrtVys53ws6sKrIpf/Arq/r+A8i4UiWWxvY9B3/ARkw25r6iVjro+Z/J/1Wewzhmw2dIk7bQk92njM0FU1ufkgpPG5lfuA/US/c+nMMT0fcvysecP+2sxTTT0dHBZnbmDvjBjg4LOL/ZWpbVDyL8UVY+ImdK+Sn1La88lksZgKspkLwMWmJljNZTpTgng9OO6Tdjpe/w4eGNtDcv8o15PsCHx8SgvDda8CpVU5pPfzuyFuVPWODY156NqaJNb2nZNdp8th8fZbtO23dzsC0mmTzJpubgQ6ZsHd5qkk+rYT71QPyQ688D9ROX/frp6ekTqHe3cFUhLyF7fDr4UyPhb4DK99KOj5yaDf25O/1j/K8705WL084+L1bOPYtws7AIazhtebpci77O0k/16fLWDzdP9U15+h49z1zaOjdeWbazBN+fjWVlWcPFbD2VOO/ocl20Y1GubMukakV2db+i3BaZTm/DP5e93p6GSklV+VpZ9u1I0tgy1sLmOshA2d5i2XpBz1azHF+b3U0zIxR+sKwsVyAriB+03yIK95au6woBdi8Yy8qsr6I/1Wwe9qssu0ODhsGhd2FrAKuY7ZuCqzztiRA4Ygmly9PiQiLJA1UNTiUwxmQcQQPg0I5jDJoRI8rQ5DmpobOsrPHL2SjdKl0/1Y7hRQSGPl4U8apfb5NE/jjzyGozwJgMFuDMuOCcKyurxZWXxJ9YIrsFmFIr0OPjVNRR4BMwmi/zKtEht3ouerLtmWDs+XTuKSXJlDWKOmU6YS2K3Qi7CHx4QWItYgzeiO8NZGpy3Ye8FjVgpIQDvyzxAfHIzGhyMX/ToQ5mmyBYT/H3Yqgbm4Qr4lN25nl0GHZyU1M7kYK6tJv0U1PmGY50TsG8VI8iw82beOgobrM6AQpIjLkbAzmTBDv3gQ55ePuj04EuLBCtmcQo1gGuoZyo1DrmWVS4xLz4qcHQjfStd4lVftowNTW1oibJWWYRslz9nsbB3BTUwuyoxNAOIbDuBL0WXlalaD1qshDuHBU2bNlILdacRNvJbbGFU1di9hxQm9liULjWGKZCOVvT0hLlBVvmilcp93EALfKBbBNdJe+VyYXQ/gExkwn3aYfKx8xm+kRLR3U302nvs8GAtSzmqC1PzWkamtIa0KvC8pERQr1WVZcHpg6nsJEdgjMprYMtPIhUA+s7rRb7Hz7Leh+hkpVx5vON0RFL52HlwqjiGut3owxpnQ0sETt2swPF1vLvlGTLagXrZWy7a4fJox1Alth6ucLcBWbGc492Eu2yjcHsz6H1gOc8TWmPnwo5vfP8RaFtrKDX1mJRQx6nO7W13bBjPmsNYHNRptTQN8bh7azK9y52g51QelB7ou09ULU2Vk0ZBt4qKGtaoqnhxll4gjLWgvrdMpKovRPcvs3ao0St53C7S7uG3H1arV5U6hV1a61SVRO2LTdtqzd9hUAlYzS7QA7L5PRoj9ZgfZMDVyZx003tkRc9ypSi/PZRBaBqG3ZqL7rdhV3dsAYX1qUf53uY0SqzRy11SWF+CZO0Jm1o8I1fDqjz+pXMpdNfV+efVof8V9cNxhmY4NZWRTUlkUNqWqtNh3lZ00q0qrax561sYaA5zASOoVsCUBEy9Snvgrc8mWQ+Z4dpw7b6tDueu6/FcjUwFZMM4GaBLfl87R4gK2vtbuLq/O4ay6oeziY6hNRyMi/CuLG3Q1Xg+9TsvIB6o2EdeT102rVa8f5mfnZBknO00E2XZfwFWu0JQ6cLClzgRRHNeV7b2rta0R4tH0HKmIpC6NMlK7BHtUpnZWQATWAdqHHMIaS12ig6hnnWQje7iH8bvW3ZLY978FDoR48qeYLpaBRKJWVTn+uh7EBaF7v7AdQDhtek07Xe2tovvSzIerkZwHMvBUuairvWqzEAlZBFejMkZlkafctpDDGgljgMN60jUuooIX3+1tb9zPtXDkgdyQE14JvFppLkgytOjFGhQMZCvylnJmmk2lQbq2kfNGTBLaaRaf0aT2JlFRK7E5Uvpwc8mTejrSLdfAZq0n1XU1N9QJ/gH5ULTRNPyLt00FFTXXMBe9RlKzr0sZQNG14+5hh8cRg31GZjcza+MPObXkXMInRqSZ1ftF51TskLytUYmrJnEvsLAjDra1a8PrXiKbEJu0HaRJbdH7ruOushGzqo00IXGiT64S1xTGRZoEe9Z6F7zUhra4oqKoxRhiflbguRb96ylA/k3WttzW4jXxDdpMXJ/WUCa7sZswjs1g4x+f4A91dHKwx9oAIC54F/IxUA9QBi+9GjPuJBLDod/wKovdTa0bEnWn+eCHi4AYomqWiSWHjhmNdtAPWgetqHj0BMcJOLqyTaPSNQANSs20mYa4F888NK4n1CqPzi/Sryb0A9pvMoTHZTFnbIEh/O3dSyFVwd/mgH7kxv4thOVjqZz4LjKNUvT0+3RXIPVvrwDlQ+5voMVNIvfjVC7/NAZY58RZKeyqNL4DfmLiWypbMCCZ+Cbzq1iO7GcPNXSPtxiRlQyUYY4w/a+t5EXPa8w1WMUZEDQD2kQXYRmDu/Lc1gk/MeuHyn3NbyRp90bxhvwh14pNtHwqIAACAASURBVChH3oCa3mM5r6QwKq6v705G0mL/wBg83bKUApJthmmqXvOugmzaPAPqvsiQ6RSUB+oLwh0PBTVmiX8PiUrltla53N3fzUe0c6Oja6ave9Te11LSvCQa+Z5oWYeKj4Ze5ezFmWkiT5da9AAAahV9Gh2NzWZ7VPZ2AZL0LyCrUbwbS+2sR61TzI+OjmKkRdQzlwi1RXFR3+gs16PmgNplfUsBNMM1ubMX1o2sAajuQBNYbBWgWXYZPh3t3FTcyuKLnUgbjeDF0ZHrUflyBo0sZR/9dd0DLNNoXR6ovqEl3wSL2VbyhyJQwzyxNWjBoXZBLCnJMcvxwTbocwiiiTHnAQL93STpcymzQK1+Vda2hewfH/1vQLWfIz+A2unrZFXdiqGN1innxw6VDOlbkI3IZwwJdhQpiysE+fJrFjFsV2evCr/81sJvgKo293ca1fWfgboiAvXQxri13TFuH4A6+/8C1Ga95+pqR+WwbBtaA5IzZ0Og2n9XsbehOXiJ8GXOo8Grq9uCu79y5OoqRVUbLZIZrfvq6qoCb8RTV1c9F1eruK/zdEm7r65uTHO1qt3A2TS2PNcZ6/qjNcNnQGCz3t8ZGOrCBE4iEKjvDASUOo/1NBCou9yMdFBnJhB4TRUCdYwexKo3L5XVpvhDoO8qCDW9ER++DAQGrwbkQ+HwhWXu2N2bTLU2BgJtoXdLPlIjLAYCgQH/vTy9UonQE9JezUOBwOkm/In65gOByv1bOZcMHIp9viU00hcIrF4Ni0B1JD10bpN69q/2r+YDw12Oq1jE43/RKWel51dXWoYrOFS9EW+7t2qNC0uxwJZ1khd1WqptCKhn9GvNF+lUm2WNzmYCFX0fmtiu74Iqry6813r3o6TXObJeMm3agEjrLnjOUlVbYS8gC8S6JgKBBL60de3UBAKNV3XEElh5QtNsRA2dQoclJOBfC9gSFS/N5Mx5WBoZ2L+2kafweCB2e5W/udExmOP7VyO09RNSaxlQOzT9zYG6O3eMlAYCXT0QKE++hMeNgZ7ngMwbXonZklvi/fLW7F8b4OcdoFRGNuVwp4YOHGZpz7RL5Xc4fHCC3eRQSRWOwlfoaodK4Ti3Gw6VLo17w90Vwduh3UwFg8N99F7RSxN4wr6UX3bH3QjaF27iDkfcDteahN902H1SvKHWmKWw7ZRKh0nTkglHwRHowPQBQoUCyZZDL5Wawmr5tSMoVdBg07sYwrc6pVK9o2M06nCEEtq4I96+4rDHIfP6/eaqEXlK4eW2PQyXrFIBQE0EIUbRpSMJK2Kkfq3k1CBVCOcXD3JyrkIdBNOC2lkf6XcMrTiW2t2wPRVc8Y6UxuGovkGLOkgjGuRwiAPzMelTIZDY6zGqLGgysjgVVDXYyEw6mvQr2ESBcN6fbaJoHp9vCb+G2QWToyHh0jjGbF1Bh6PPtsTYO26RpYyWf7gPeg1SATUMy4j80s+agVWTAzFKdU/mIBjtTfPqaYU0bFI5tklTEFWX+mHx2BuFujSOvbxcIr/GpI/TEXQH3qJYQByjqg9cMPbVX/P8ChRqjwe7SrrhB3YxDv0OkEmTu1zz4aPaDxx+xQnzXqqEgSkzBOUlysRihcS7OqhUVmNDNzgEb5vMetvMieaULWtKuaypUjnfp5SL5qK8Mua2w7doQTd4eZ/lmfWGirBcxthnTU4hsLFt5ZFITtru1ldeuqEkeeYsenBv4QPh2zbt3do7yCCVV+6Zo5WooFw53uC8/TifKKuYScPhKWuDjFleyrLBvDmtWGnLYtvzZlsbe/2QrbWBkmCaaWu7esogXTK6stg2JCNlN+cwrHTiI0HJKo6pQbm63p2UMJXAQjey7LwxyiTaNVFHzKI1a4/L2jzkgB/gjySpgpgJGTdz2LZi6WxrW6ngG5nktraqim4mJjT+oQC/CYFKmbL7Elo8rmX8RQtdUact9O3ZLRbiRkVObItDeTULjnJkWIxa1ZE6MbA+whPj6pLTuWzBpwGxF2c9mshsiCuj/R1Zu9+sfHn1/FRCGTj9cCeQYdajErnt3LnMZmIl4rXrVaPJul5WLxmaP1h6PmbPvTNmef2mv3wBLnn1x0FaxDp19PQx6nMrJGJxOQfraDGJV0tYr4Qr9OG+yKWJvlJZMvyVfqJc+U+xn05FW9FPcSRvHpBtCC+X6NT4h1pwMLFkEtV5sSgpEy1aC6/xG7sVxfBb+FMAIkTuBbpCGyAm2+j33DIdYw0lIOqDbQy/cGSnHe8Z/1yIEyuKBsnE/NybPD4X885Gns3yFiGx2arjOSdAEtHg9C3pU0AiKdDPp7R/yOklPhnRl/5DKvtfV7Nu9XOH+l+zfGfAaU0mRf/7+S8PdbjMZlP/L2zRL2/BXxDQ+Tx3KW6D9hfKFLN+rQGbxbK48HXSL4mVDbYMWYy/hPVvyZSPfPOQ/i3rWazUP0cDxjUs9n0iTi7/c35mP5X7fzpVT54M/RXRaN5fyM5nTgo+tv0LBX9S1r4TEGZUf0AZ5Bj9K236Aa/fNmlPsfBN3VYbQqH1b2JZhK3ky+j/30i4dbv/MzXIr0qsh7Ad8J+mSJQtZv2/Ed8Fz6fC+5zSVxVZgdtXp+6rlH9JHHvVLD2o+qY1lvYa59XHWFxkdrWuxnLXLLsWxRiI8ez4TnlEvMd8P1RY7iOX75fJp7CPqFAeQP04hZNP/3jkpmfECH5u/YMDnY+53s+S1dnwEtUWvre/Z0DoY+3zSV/H5lP/2nFAv9Xe3v7jYWOivU+6/gOhP0j6ojKfcv/hxfyU/wuOPyFKfTV2GwAfrm2ur29hoi+/viRzf7j08rKR3ZZ0HTGmJ7LVks2mN9Xe1fSk+nZySYKZ0OeL906qbuZIzjX1YbKQN/axCUwmoLavr6+G1OC3LyHG/Ec/Hx6B/OxyX08a2wz3ae5JoixbgZqsxISkpP2TBG53hdgClYh9zi+hfsrx4VRSnrtXA2NnvCS/l3Ol7UMmdlJwoQqC32T7UUR77ecxvaTxmd0nfO9ZWF2d0+Ebh0Ix2XDWp9lbhv8mYOv7pok6S45hXqeFFfhvZP35suMwflhAdgmWTBitwlh3CjZc5YZARqttJxVabR/WPaewruKiNdUNNIrEZXhKccFoE8aWelhvwq+bLkjft9mMuKn+FOZQvpjxvJ5qrKuYrb8vZ9akY0QUY9cyq9/SabDSbvKH7KDVYhdJ+OUVgx1E3jiCEMyv3oh7uGw8mtC6tHPK2kukHcFp1wazF2X2qCX6/We30H2IFfYN7IfHDKEf0/b9yJJW+25HJV/R+LUhBzMtnDf39mu1j7BkZPKWKnkvEwcquA+wSsqM9C5Rg/NyuA9N93uJZVWrDzGb8nfa1e4MZDzasRhJnCH7HB7A6nnGSvsgtk+r3anBPGwHU+p1HX91eLKBEFRCEplHz+Eh6+Tbd33SkYp3nsjfYhWouU20tDVoTZqywkTdJDiclahncYApHtrPHipwXwN3iFptHYF6pkvfCxghEOeSIzE7nNyihrUXs00fbw1xH3g0nx8YoaFNntRlbrWvZa2ehPdg46Q+pGWP3Yoxe1C7qSa6K+2RR6u9l5/CghDd3J1Wu/GR27v0nxVSN81lx6glLt98UxPsUWV3qqemJ7s04K2N9hJ1U/8afHlqtptqPbTaeJju73x+XsDnjpXrWPZjXl+7GVBPpIK1JF+n0a5yBRXSnq7YlsGzNRpUtRCjzzzTtBoaIzNhqlm+Nktfk6VaH0obora6MZhYjawbktjEmnH0qTpsI6ry6+WUrwCpTf1aBvV6z2agC5ms/gjhbjQs/yADqsLq8aR2CLlp8PR0Tk0nUCN604oCnnyt0Dm5PE1Na+foL+b07qlO3zy+MjB59ppuUnLJsJ6a4SmYwTJHcJMbBPdrXLtzGofrYE0Jf+xHjKmhKZ8HRytuVtiI0cdJu6NlwaMH00vNdGa4S7VY+YKbeQ5OtQah07GyJzu94muwqSyaCE9O8jsI9Gha0Qv4oh6POcwQlKdDuNX1aO23Mu9OA7wJFwJVN7jp8HjSQjrS7RIc3Z4GtlcygMrGqJHFKHyDDpXT6DuyO+uZwOiEd8yBi5Kid1iVTUc9adVygcC6a9wYcLBksRww4y79TnM3XAnBrE1Yx7o2o2hbqWzW/NLm0TxiO2FKU2nB1BzopsyGrou5b85X/ZcdS0LsYZj3jxo1VhgeIXRR3F0afYdsjAFV3zcwcM/MpVpX8r3+CfUPs4LJIID6RJdk7CRH8n3hDufGhu6BgYFWesQZfTsIPWwyYwcMHqrtdKaHviD3nWGVXNHdJFE67kmloR9Rw1FJxLQvi5CIR1u4FgTnVg17RiYhWTPQ6FsEgvDNlFgdyY4f8IP1lK5+AnJapG2Ea7p0OspPenZZgSzJoyu50LOvTy5LA1PealLRXAZPml6Tu4ZwoeV8Xhz55yv8sIhzJ7qNe01Jo6ZroGbASpcLrspAYzeNt/Y1Jp+kCzUDA6m0mizbK2sGyhxebK7LbHxbTAsV0nKoI3HtKuHLDRB7DqDafHDJzz+0kl7aNbg+cS6Fg/o8JVxWjIplafaUyrjHRXfx+bRGakVtZHdmXcmxdFCZs8XMApXZNNbwaiuzwcgRnzZ08mToSrNNnhwtsoh7Fja+T5Zkh1Q6jeuZow5N+qmxY6rLMukvP2ncC9HTjP6oxjHal97xntHoauNmvWqOJJsGBirj1cS4QLWlskus9W/bFe1E3c0sfn89zS8wGTkzv3ikSbTseQOquosBVbyppgJEqa3PV+mELmXrVuWoLr1wAdPvpCu/hKLFTca7w+HwmMzmDDGjjEklaa1nV/lQtd0TTLIC+2H+iuIZp3S8Apm+5eXlqXkuYkjNhpaX07SSZcmRPGXKTqQlllh1rrNAFaEkv8oBtQy7mneHQ6I96oQv93XnO4M8UI/Zy9QCEAMftT6TE24nvaZ1jKM/AFUGz5tZYrhiQF0T1UDpSAFQYZ+qLWU6Yd0MCF8SzIsB2MZviV+hKj0NdaKzWHyQU8eXTyEvYyjfVIwsL5cfA6jLYyih8OBey9EqfBmDVhVNzAtsYy42e2ikYitK/ZNZG9+sdXseqGWaa3IXf8cp4fs7WblB6aJojyruCDJiXcbITaE1vjFuFE0reV4+3cLaorOeJh0Jmz0ib2U2vrWICsSVXE254Hczx3OiBW3E8Iw+w3Uhy+gBkb+BLuaYkDd71A53O+qaBWoLBq+za4S7WOrs7HxWtZJxPQMqB7dasPDfRTGcJYKauALjvQKqc1jYWSQeimStIo3nxqdQyCH0klbRFeeh8Dw2zbAsG80DNYV+Yu2+czFk0DdGDAcQuN3Z+X7t0Pu5szh7SIVCId8bUJkgiyMH1F5NBgLVfQxJE/ssqYA4T5YBLr4bQJ27wJdw+tDYZOh7QBVrCAbn++AnAtUO0aH7kgKm8BjLriOAOi1WGe89kZPOm5BPepIDaiXtrxMX6vj7QqCONvjBy+Ws6KUOxvWWqSNHMT8DKv+s6MDYIirqMp9EKjXi9RrSPJHFYCL/GUYeqPyIs6z84S0zmMygL8dsDV1Ul9/i9H4WtxYTaN0uEHiRdc9MJCkxe8B1OiBts9nb5fhq4g2oNp//qqYK3mFJjbMZV9dwCH5HtPPEAxT8aoqc7XWvbt5sybf1jjZy76xPVEgNJ7HYkfBs4cutscFl4TFZZyiHJWOLqRU+CE0dsdiDw8YnH+lLLCYqYVgq7IqBt8q+4mtBRsflsRJJoKaFN7qOLVygEY+NVrpSEYvdOZIOaWMsFrsQ6iUr9BXeOd21gUrfRSyWXBC2vK7yoQBS1wHeN9oTFsTwSkrGWdZM6CjEz6UjZ5XonUSgzkZ47SRQZKl+wZeCZyvyt7JigFtZwZ0RKyGW82AzHPvOBIac2rqKGcFdZ6sx7Abkn3tURS8pOXoCUGHnzN3qS2LmGSXHJQY/2CGS2wolYw9rzxircyk53InF6jaFRwDVPYgm0u0K6VhzLNbuUtQl6tkgoDMV4Y+knXDOskcre+mq1xipG78G6nLE34zFeH5NP4X7yRoEKAqIXwr2KYnlxjDAP+/E5MqT8phSEqiVLtfFmNITduGDyT6fvisFqJYUJ8rWeQ5fDACoIxMVRk7SDrOrPA3F8Xk7bHKVccUw8Fumqtr0j8NxL/u8p4xuwqTwya60udALBFJgUCPgM6Rm/R36EVx8IfdozTP7Jcclld1tdzvqE3GzY5N4guZu44Mb5o54G9og9wKOVGF/hUkls9/EvXSiYdaaPpvSjhxS6SCrVEJjL+z5yORuvfRmd/cEDxyN1HygktbLjD6hYT4oxfAU26OAl7AuP73TsEB4G641FVejJirVPDGWzniwnc/AchJU8Ogv2+2i8d3dB/hnNm3udktp/Z2XD7t25+3CKdmTqna9r1NCPLGgN8/vhjRpdd++QbGz+witvxH/4t7dnVaNlYYEaio7NQmq+ykIxFuE9MhPBVPgyOTYjb1l5y5oat4saBO7dsPm9oVGcRWxCisQqNC+X2E4T3VJx3ahhzawYtSPCRQcBL+FDPiZLazgSOoemOWoVD9tS1NhuWp3x1Ted0TDu7vzwQaL5clQPtKgUqWa3kSTUYVpf1+vXyfju0E6u7t7WCCxV6UY2w0p4pFLvaCpm1cI0rJmDXQold6CAdyEP37o4J4E1+5uSriQjGqk+94yH5p4oJD2724UXrUKg39z98qwrD5SSJfmdt0N8m3Tdamv2xK3T5RRYXZ3R+FQ9pludud91HUmwVDw3FJOBbzsyj00ijvhl9PVkVLGSD5pkUnIdaBkjue9EwuM+khCPC6c2LIREaaHDha3JZGfiGliFROa+w+qaXGYGV1ijNC5bjbvLlQTXQOLOcJDrLWh9N4UP65EE9eiVPoSwKcoO1NLZQbz08JedOHW57/Ah658ZVY0E5ml6ivGwbyC/vIJFj4guDx/Wi9HoAMW++ZUIm02d3m5bYRDW2oeOwOChIF8eXasgCdfabrCBmcGmlOzAZ17rIH6ryGqT9+6MGGLB48W3iWS9sX6oxnzg2XqoOGgKgqBiebFbrO5ezE7VM5ynhLl4EmtXE1hZsyzsD0kTpo5F2VkVPV6aS5fGIXasIWK+75Rzp9CWA1r2xBr4e7hQkdepz15J4+Mr26V5cnISeAgrderaHfBw4Hb9qgUzqsaYwNspJs9aGVfHXtVZ55SGFDjH3GTgE6pab6ZHLnPJoyjiwsLpSX4AfW+XzV+UtTpM+HWwmaHuXuOJNzhREM8qTXvl9E7D9OpXL0QN7ue78yugQ29WRtDM0fQ448727Ka+LW/MIItoML+pyD6R0FuuOLShK62gGCfykgcDXBqNdMxr2QxUIy8v57jm3LXpPlxEuJtx+OZJklPBJ+KdhIu0F5wTQqYEjnjIDLN8Qc7jmN88QEqfpkIJhIS2aNYvfDI6ONFU5484n2OVD0+LnoX+sYfW0jFYx3TgLqtFyW34G/9A+FBr+YIfPxKRJmoP4Qw7u80KYoZQgSvHHjsRA24URaFsSpf5j8ZKhHVgNRPRrsiB/k7VN45fgxJlJnM6OP4h0hZZw/sY3njwuOxrRmykvw2E/mYgZgF5+OHvDjhAo/jaNiA7QfSsjrF9RevFJrIq5WIw5kMY1RZttUsjYd+OVlGrdQ9PD7ibZW/DH3U8Wfpv8t5ndNAhT9/Tx0rgs9PBbfy79KMX1GPjJOqMPv2d9LAs1OcVv15MvmeG3r1VPEdhvLe52DhsOQ72X6HaK5u/fa29k/XZOv29nZ391PH9adL/6MyKsPlL47C7fh+fe3lVoPeX/1T5fDXelDVd3jOmfV658fu/js5/3HRcgm+n/rH1fo/qTAPkxlL6XcGMn+BoeQHT+xPbHhLaelPkPiBqwwsS3Pjlw8J7ESJtH+pfeG+2x1u/6bBPz3iw5dHP537O8PE3vCPcIQdbfb2Or7KAZvYP/lcOV98F1cM/W0aaKUCnfjl0mQX83M1P0kKNlPL0hd448fop2+NPwotS7ngq6yxIBL7h4lnx6HUWUH0D4IffG78IJ+YxL91An/yNvgjhr9PurpluwK6S25vV2Lis2B2Bm9+zFXqx5p+Ov1u4nu5fIgvYZ94kvu7js+7zInORD9y+m/PjDchxc/qiJrrG0QKi2uRH2vGr3s8H2NwVqCjbed68+3KQEGWrfoaMd3Sa2KzST8mMWfX5leZCoQUCOTbdnKZI/1sJuJfRNXnMOB7lUuscOnYu6qP9xRooHe1u5vtr/RGlVUvVaAM7lauloXgm4MdGOFWHmRHzMuQuu2u8lMsn7Dzm7HhBMz2OvrdDdkr83k7ROXc/WuzPFOF9RZiQwHxXsE5qIadg5hAwjdVVQ1gijEbVcam0vhedsIKyBtZBQro/urr0eFbawKsAP8msKDop2Bs2Vw/OzubgvUUalBV1cvSJWUsOA6bkVB2ES5XKMt+qKqqEeJLql7LkasgAz+Yco8iqhRN9c3wtVU12XJD39qjMgGoYW/Vx52Ec3IKDqJIWR8mXbH24pjOpsgmVVdVVX1YoMN5TVanBWX+cUHdpL9hxCPoq+HGm5r0phGfaDOSbccgzkd8uVVgMWomjanyfof0Wc49qLQjBhoaCGjFGW94nuNPxJlu7C5dA2aU7qunc0mrZIKZpFAr5ocx7f6pR2VO0vZf8XPrnYiaymGYAxOIdZWngdLZcQgESWG/WoJdySnc9FUjJ8iAregrlwwseEok62kFNY/iur7RvWPdCmpvwc+B3NZvtT7k045mL0aqjhzU2URsjyifmnhDbz7LhyN/vkbkvU+akmpmz0fZtsESeB8FBQMkI0QhAbbj7zQ0B3+qiiM5llBFKphl5sNiDDPbs/lW7rHPOhYP1HNWn/Q5b5kt8mneFs3uNtnGyaF5MSo2jDaAhsetK6+NndifvGLE82rdP7Du2JSj3YKiC81fo9rMjnUOChQVLu5KXrNnoofi3f9exX9caJ6GGonkVXEjq1wKUdMwWd9/v2i9XcNYyw0V9ky9NLTG13Q5jTG26ff4LCx7lKcK6h7rG4xx9XuDg/vdDVyNw/00eOzRV4230fqunjn9Nqk7GxwcfBL3Uf8GqIn+LhdVWLu6nlpouEO969OWwkH1uqR0CQUHacNBU4fHaYTpY3nnucGwrRwcofGzI9UDjJ20g4NzXb5T8qg6HBx8ofnHHrsM9/DD2xWim9cwgD2X26IK69tQ4DlI7S4YsKo2vCOmrq6ubji8/CGdvw6+BMd7JdzN7uDgFbQku1RpnwczVvgqzlB9V5q6C16L6/waT1eXyzBOqrpCfvAfeGfOT8OkNkzH8ISw+VDBLn0nUe+EVrb7rWbbezbZGJzOPmmlm8Q2OBi2soRxu6PLg1u1+2UILFfG4HVtjkWIAmaYRAc2ry6LsvNdGMY4pNouO7OFGXUgxqetfL+u73L+OaERtt04ke9voEfYto4XjHZYGzpGRkashT0qTNI60OCIb+tB0CKxm5mgxaT+ZpabayjvHBgoqeTnDU04hTc/eJzOYBsLQwuGwCsjI/VfAxV5Z1J97HbooGkwDTLvyIqukdb7VjWAWoWEUv/JsfQUYKhpsJKk+aUEltjXzCpPNzBQutMesV8aV0ain4A6LSPeCceQrgcu8ifc+wX3200wtm7CLuUbLdTPmkiZU8gf0Dm6QWb1AgtbyCsfRn8lboN+co5HP14NlfuFQO2kx9BRjZ65w91e/sTWm3In1BmmdJtvR0L4+la4bz4eGDhucRcAFf5RAWVZuTg6zb5MXc4nYWNbLuAaqVtGRszMPSCp0myII9ElTf/IiBtLqNxs7tFPmm4kJIF5ej6dHh1Z66c3Be3/VKd/wulI1IhqchcNRsItfVIqf2kaq6pabShsYXbbgYir+kG611fVVzWD8VdMyr6CYEA1xClNb9rmReCKQNUP4FGvWiVzzEU4/T5QxRdg/sDQzciJ57u2GxaTzqc8UPXPx7BGAm2ZatrZJ5kMqHyTFqv2KXqaVEXH2KPuY496wfJrm0iFv1V5Y6hmZzm6MfWum7wA6jbNSlz+A6A6W3aDXoyjZzESScFldQ6oJeMMqOxeTeEmyhE/oskg6DXp0Z19A1S+XLTuRAaMUQEjAPVeVA3VsDsyR5msPWqinfUcOaAeI42bBVAbtayACNSaIEYOoKX0MC7GehuRw/VwlkpSOjHA94s69a8D+f9g2qDWU6P8WHogIU2mqeaXYXEUmW0QHw7biKwlDiy+US/z+C4/M9uag0xx5FDsURfF9EHDpGV7+1hVVWbogRutZnixbeyCogc1p+RZtbfd2Z0FatI38cYvF5jJAvXMk2Tmq3U8t7AQCWyf7MwCqHAoL3+SPuf8o15oBmO+HFC5mbNtCKSnJU7TJEKd8+9wweVnQC3zN+ErAv2YorBDJTeaYQC1148edYQJzE5MNPYW3pK5mokH2DnLyrzx5KxpdXu7Tf8GVB6qmddUFgIV7d2D1268TxrcSP0BUOX7DKhwRbxF11H57Y72dyhtC2O4dfjTZiY+B9SGTujUbdUN+Z6Ru18E6hazAwQtiVcAzeAv3oAazwF1Vtz3pSYpZvzH/ngf9IJ1RQr7/FrcpwIV+t6bwi+6NzZaBQzP3+N68RHSxpIqreNeoxugoDVxMy10zy9McNgYoeV146a1Qa5sVR1snBvobuIkWKYcsmvWAg+G3tENLd2OyUpjvfH+5ljBc07+sBGt39jY95KMy8yYbtRGDEJoY8MjXDG7eQhUCIvj9vjZVtVGcFZWMdsak09Io22ykGsjE7uko/im62pocmPD3/5WUxsc7x/Hhn2aGnyaqKB29H3vdEOfz0wDJa7pYbNTFDjDILoAU+cvqc2hP99YvfLXlDs2bjY2nF3ryahmBwXPu0sSYV+fMnLoGmJPpiwN+De2Y9XdeALUbnim+jbWCxfi0KPeb+zdXNq8PfUbJ7aK88NLiQAAIABJREFUaOthr2Zq47pu4cBpyXMgOo9mvn1rBx9glTXFysMw0uXv/fVMpwekV7UW672xO9s5Y/PYNAxgcXcume7qYkO7cDp76GqKZTZeeVLirvYG6q4jfNo8KBm82dhmd88/mPjGZbebudIfdbfuad3u2oK28G1Op/sqffN++TFGvds72cPME5GPblndbveibRa/7ni9hbt1wwOq233Gk8YUi3rwrsTd8aY7BLWJ7lScxaUq51NuEyw3D9/lVIgvqNRXAmM45pY86D6NwMGqgupbLaRSdTlCFQ0neHMLBwWFqqukLmp3d5WE3e5oYIxxtJcHiPrGzfjPvqOlDS/osKZVneP6xEzsW5cCuqGumM//qBDuk+z9ROoWLaEXFAMFed6DkjEfqo6mPTenEQCNcImoGFi24fZWVJ3DXvfhrYD33qWQKvxhfDOFOx9zFGVvSQi0ubFJksJ9eqsQ3OerUo27P3KFKKnPXV/w6GqJswbFh7nleAqJ0pCcG7hyu6cx7ueXwZ09+3U9Kma/K8XFO7XDI6vCdI9Rq5SlTuFtyimtN0j9AdImNS8pqK8LXfQ/m7D4zlaTORl2RpFhO80Cgsm37IP7G0kHPXlf90VBWAnC9ymW72XwsMjsWlkM4VmKGINTtrgvQQxLk8jg3jFSObF0PvAuJhZuZeal66wSgdXX7mbseH8XUV/Oshcsvr/Ksrom9kmSobAZ24XzjJMogUlkf2CFSoAKHt3yylVGHWLikqP6XRxCo460dyGcmBnrI5Lt1a7DrK3jnuvlQ678iW1kW6w6tggVBaIZ2RZKIHAUQpJl+CmQwEdwPgClNuO4ajUX3vyo/oI5DKezT/FFm7zTtQdmcllV62aNeBXyMlkjQZgHk8m2wWQOWmVt3DnAXOnqAuO7J5GdsOMqhsK8jFUBe9sQ7hSBnQpEHUKnDnzXxx0z7Z7+43GaV82fOp5pqEq/+QHMf6rc50wftoXllRI1DB1zmuRwdXBR4AqARcRu3Su3D3mBMhiH/mWSex+kZyLTt6I8cymszErAy3WOqTxfhbd8uUA+w+f4P3f+TaU50WwWPoLRTGaiy+iDQrJRn37VXlCj/+pT9Jen4g0rUaqznpNhs6v8TxT3Jet/SGTdEwhf9RdQTtMFMT8z2OQHpUXF/6dsH0xSqun5T0v/NuWe/SaTSaMo6Lh/m6oVK4Iuh/Ujhd9o/HWlnKyDMI77h5PlkLXj1fIPb8Yvrz7Hhky/ZpyD8diHPvoXtKXyBzWH+I+pv+gZIdn64EfiF7SyyBI92wx7y/1TA6S/rK5A3I2J0T9Dya2trY4/k/FTnkTwBwLG3e7u7LT5p1I/+bRXr/e1FPL8scmsem1ri9n3/LfEy+U8/v1p61e8hnVsbf12k1l5S0tohGd2l9/TjGRn5ebm5php7S0T8rOdEThjIKdMVho8cMa/d5F5lvljLm/BoXQ/9XH2qCDtY7BFoaDWgii+KlNw9v1gQLPwg8Sb5fyWkGImL/MM8AuodHdH/1DAV3ItrnIUxBQE+UpMedFgwax2QeJbkOvIzve/RXwR4FfGzqbaUvH4+p8d6SfxJXz4/QKCZ+PkZOIL1n9n1Dzz0REKbd7K+Ic7BI4jRL29PdTRHmtR8o22ZpiZNaOOfHWwjC/ZtgHNvTsh5ooPkHwITW/PnvMv8bRMXNxJ9KNjmg9Nc/gY3Wrkk8y+lbctPSWA3+Y56xPhG7ebEKUr4/jYh6ftRVtudYgdsstE2dDH+4bXtTenrSwul4nrFheWWG14eR97jc4VY2s0LE+Ol6TZliskxor5s0litvYPdjdsA0dWlpVgP1+QWIW67XEmsEAmY54rKB7F01wUO6zpYwXM1NaZXFqWRUESwfffS9OY4WVr/W+ZxHA2l65ErFqzq6Ik96FkLpd4yDUtmxUOk3wz2wLtxkfouXaxTIxE1uz4iZLNuwU2dEjsp/m9BT/l/PtOR9iyMUgfkWCdHtRH4IIuKDhd0kCjPrVM6kxOj5xMmKkv7KaPJDGGbcyl/ZjXDExBkdi4tMJPpfXwL/Uo74K9HbYubeCanFS/1+Wg/grvUgqe+mYl5BkuJzvGVFRfo9uIqurD5sXCNl48voTD5aW4K8AoPIY7w9jFQuHLglx84j7cPdEwCXUPXYS1cEjDr6oMyMQsaCW39dIQHCJW4vzlpTvsWdOGw5u6nfCEjVTA/dUcGI2GuwfbwuEbZJeNlofLR9mc1RoKROHS551uqPWkO/yMz5G52uHhgcLLWDIs0tZYiWzU6sT2rdADfwoO4fDpgngIn7M1hz5IXK8g2ZRwGG9yygskm+n6uxjJrTOIuG70Bbo95Pcg8E43DhnXvqgCUC3L4fAeKhHgeK5vKh3AvT/cE3U/JcE0TEN2Q3gUxZLpcFhbDVu3cPiOn8eq6TurPurRLQj37Fat6wpfIdN8tqr96jUxcMCSiKyvUdQC3zRcNbxczw0ND8ewae/wcA0DahtrFjonnA8PZ8NixN/2s00fB6ZVhw36Um5/Bn7w0n0k0CKV3g/MSAPGgdAUUQ6M3POkNBN8gR87XJcKZBo2N8PDDfUMD8z7y5Wjgqo/5RDauH39LBzKAKhnoSm2dEKdgUa6NDDsUXWSZ4VookppZp72Vx66s3vL55t54VRNpeAbrinln2+xUmy97PVtDNQ8CbP5HFDkcpZDhgS0U2NjY1GrhVuiftw3qzw5to4gCobZcJLGJFOph9WgHgayTWQID1F2X6wKcPEqmpPK5lXLZWFhXoZOzjTmo35cjDfapfoRM33hlbPlKmfYUD7/lgJrT7tohkonmwz9qAK9hZUUagBaWBcPsKyF91A/DXUpzKsJbPjHathHlPOC1IMFuIJBvnEZS1NIh+h5saircArtJjgMY6nDM6ik3EQ15WXkJV2eBodzZlDGqD7GPGsymoJJQ5gFcPevCdTACuy8P7r76PMpPQMY5c8OwU79L+TWz3LToPFU7GtotAa7T4cFRfdtBeHO9SytPok1wnt4rqN0mlQbaIeohDrmJpcWuK95V82vDg1gS1zsCf4MSx9LE6i7CnenAz5es07S9iEfVsO46d35CZ7XLk+5cAZHvvBWBxe0Q+id4rLSJN6r4SgOizHaBk5iUbYKM4ODdWTL3dHUNKmwyhKVFU5nC2xSda322gE+eXVU2LIL6Zk8ENwnxsF29BNT8PTk9d/CAIk59MqT2uzqGBy8wRrTsH57sKlpXpMg3nhn++AgrsGdvwqVfw0GjIMl5fRpcHBAcrEz+CqsDTY0EWVvh4sBNVLrXoP9KsxJM65BjpRe01dv6qCdNHd96FErgerYYClROxWjFbYTgzZfA/RuveNmuoBWjDv8fWiYaURJXg0ng4O75mSiz+QeHhwcMw0N0PtBi7xPn/JOqKYGmycB1FdzZkAycKk4eecF/6jnCbBSk3bTCI4vQqigp8rAxtfTv6fjl+nE1ZQfxuSBDRqvqnUpxolucHRqykkfSMmjCvax0FmFT7OIwDzcm8JY13Q177gqBKrBJBoWef3nvYlnZr3+SKeaOmHzxq1T5/ZgCLaYM5q2wcFDxTXfo9kYnDTRaWXvUhao+3WklkahYyD9wl41ONj//wfUFx5AjXR1a61WA4bvyTh6zje3kzmgmpktEsaa/b6UNUgZUPfzQ7jno6xWuHrgqs4HC3+yqrmVsOzlBqsVXKdxsg2rUEatwWlPf3+oSjzJ/VxcY8c+MOztH+nv73c+8QCqA6Fw23sutZ09vsn0OFlxXKBfE7SW992l7xTlzPhdG0AN/U8W5NOFX9C9tDMzPwwkyhlQYQOH+6AdXl1vVFPgnqIbtZoBxK98AmoLy4wdbV2lOJybasTT7E8HnWZwCkilosBoO9nQHvSPWM9LiVG8l6vo/q6mFlm8JkOkSnMA4eE+ssH8VpJFAPX9mazuZkbAoF6B9VeSKxOrd45ktS9Wq0PoSjSYrJeHy1ZXh3oKLgLkKZj5qXf7+y/CACrpNGQHvRX+M8b3TANziaX0OC7huxhiCxka9HOImFA4+kdCrEMcQfcUscOT6wKzmLTSTCx41Xv08Cy9lsS78H42Xn7J4zONO3nSuQksGDNZFehaD2bHhoefmFr+bhJ71AUCoG71q/Ee5f8I1E48cpkjX6JzZoG6q2mLkFMpAypDH4mhWTcAFiPR9eYAHv0YKpm9YlR5FwZxYoj0BrNKbZ3hZZf1Qn1B90EuAEilY5+00Nm+81s4/jROq+6eu7vtwbo3javN82A07s+QFg2zsGR3Ah8eyPK/uxPHV0xS9rLD2rMAqJKDRZYkAnUQ5qQ3dLfvVnu7MMB3M1B+BirGEiDsLs0OtfpKdshRB+1lDSoxX6KV6KTVxNp0F7I3MF/F7mrEVNHzEQN7+jB71KT5AKERANXMLu5i4RgVNQSuGGVtfOXzBUAduGIvahUNrbqG7EMFvvZgmJgFapO++yGyyYA6pwHOGC2N4oe7duPerce49iNpPboVfYb1PfXQW/pch/erbfjFDhrJggLXe4VmKkzudHc63f0gj4/IWG+zAvHHqpGGdLaKWYbcUOKxOx3/f+pRl43zntJnxdOqY2kJpkATsZI+x4DXuy6tgnfkdHv7Jb2v4C2VvgNszSEjU6Gh9ic3vWxWdwsz7e3XPny5cqOZaG/vOZbDNWffcBcDamTT0LQ2iLedad+1OvG8NK+s7gHD0VcooTU11N5eqz/P9iZMA5L2g9s6+bhzqX2UTra3N7ru29sNhtr2oaFl/dCbzpXdKxJ8tYHHVLsdlpu8t70UQMUNL2vXkTsrnCsZWQUDk3ShHV/V2vwNNrFHHSWJ9sry9Xb4mWy2tySUa3RB90LX29vRkPtmZ3C4vX3EMW57k0MqKTy4lj50qp3xJom6fUMrwjaXzoDK6NBTA30wgdaN9sG+YYVZbQymBtvbV/TVJ7QNKU2Gg9IT/UiCBMonYjO0q7q9Rgud5vjgoIuqGuW6ziceNr6ocLs+18GyHNsCkA1DwE2mU9bEZmNFw1h1BD1qp6zJyidq7fSljpPFq1gllGSpFUodxGetxqHUaXt74F0KQloPX2EaG7d5HU1yXjeEHYo7AFT5hghUNGcSOl0Z8+L139Ismxdg69UisN5GskExvCogdvPDWthceOcWJP/S4FA0WnUYPVmNhhejIhnqL2Gbdv+In/rIgQP7F1HBrTxkB0FxTNbcgmCOxhV+y1wKjjGpY4InLQq2EdKskmwjDz4RvKvEZ3mCAINivtdBpxwYmhs3kIJMeITgu35Q4ctUHazVgqP4TE/aphLTBGEd/qxYrqsCkCwIy+ddeHU4qogbds7Pw9IjAJWOnI8Jo6TWqVo5hzvk2FCQyTGd8ja/amhNGJZo0+0OUbbqpAxMl2uRfh3wMe6CsMGPMDmoLbNTzlElpdrzFH1SehTSWezxNJ1PwDOwZ5WeVhziUpaaRQbSZjw4WUixLjcGRV7nvG3ZwKJclQvgPA0H90J9LMViIOf8nRlMuxXLHqFLNo75kZ3zqKHg+gf8tPu8XjAdwVOpsJlpVai2r1H6slNPhZdn35aD8fJ5ZQ7GVqiFg3kxcE8mRTWXF6hN/eLz3aoPqGDd9quWzrWC8PJkpp7LQwVU1k3tT8M+OtW4S1ubK3rCrtIzqeuwzElTAbA4pK5IQX1x8+9XVGx3/b/0qGzdgmN/cvwxKuuwrZ2cDLVjK7hanitlm8addHLj4vEETxbLyUmFXD03J+Ml24gsRXvUayc3oYUB2J+dHD6fXM2+TO7YQxv2+DAey6UnY/b0XjOpbLAzQge5b7e7qLDPHpM5qtPcnZzqTk9O1mwdadURE1U9lxWYHUBk89Wd7F1p7c/9yzxquGG/mVRjDeXQbj86SWIrj9UGe/yhlh8Uxdi7ZEY7vdtWKKpnVS3iGzFuvlXaejebUXlOAnzvQkow7Zw0ocpZKnBL4z1bP07d3GE/9E6keQpHZC2plB1/bZiBbIxC0sqakW02AZNUzKbrHI/dQdeZhU3itFL/fDWpQ/kMwcZ7HbxxMiuHjV7zNLTLKouuzHKybLfvFhri8U2LKbt9oxJPjo6TqEJa3sldQsy8HT87pf364MvJjsFt5E5TsCs/wbYbtW0p++ackqyVMznQ/BuVrJ1crZXWYmc/HZS6drJ+ViZuBbi2Y98/2eqOH0967PZF24NbqhBMTzzXYlUpIKVBzvzXlxUgXvxuNqUQNGeFV+VNzj8jwDGLVhAmjzl4qpFLJPjLRsHGlSVIREIUErw9sIN+J+MclJKjxA/X7jgwFa3/CPZPF0uAb04y+COUkwORAxOD8rkJLxj2TTDaU7f32AJVpduiMF63x6w3vyQ8AyVvy5sfHENCPiMmWhTEOLQw5mgBX+cuSbRHsrWx9WAo8ockshNrAaV8ys/456I6JkbRnkGIqZ3ETymRD1dAx4MDkNXMzhkhP8te0Sieffz5wPpthVDOCjClZS+Vt2diQvwWR9LJWnSKKzmTe9PIc5PMqYcmJqqyTcxHFo9faEBU0Sc9fTr9otSvj2J12PbrtxxtHzDx6wX/Qgm21wt9d8cvFFBk/f+jgXWMsamq7v9H+C+Qahzx+zWvv4Dx38aytPp7z8yCKvBfWMvLZbxS7HHeX1wKSvyloOQL9n+JwQ8zc5+cSiOzJG+Kj3k0HaYWv6WyV9DRP3j49rlJSpst849uzqbp5HObvj1XNxx9juRup9q68dpPjPO1hUNUlg82oflHOC9TZuH8ubxcCRJzSfpm/6Lf+Ezt6oTuA0O5kQ3xPhKnVIr3UJ24HdmHtNe3ed+Scmd9xYe03Ilka3Fx0fZVyr8ljtdVfqOz361tby8XhGxIP3wj/3VNjcHLzwnchlQhzkJWqEy5eeq3LN76hvzN256K20/fEgoCaw7QOIu4xnL0U0HKHwfvggpV4aswtkp1ZbfCKix76nZgv1MsXgniQlJh0kVu6yBCmjAzhHWQb6nSIKVC87fx/4yYAsPMbyqMV2SRmlLmD9NV32T8tRFv7j/xWM5ak34hb/XsLdISwGrUH5HRsfVNFnWgRwRqJPRxeg4ZuUtsdpMlSSA2/W1ZpDVq7SY6wDIdYyblrwHVG1gI5gUwDrCjU9x98+LTdOVxsbnykv3bz6ObyfS2WAyTcYcu2slMcT9TYqzS9c8F6vDTty3Kt3BiIhs6VOizUwz5hL/1WDnRkJ3qjx4YyU20H1Xhh7AHXTVqwVsQ6KziJHPuWQTYoswgjuxiYj2ZpVl4Yxmn3u4YH/rwUGg/PRvFSI7PdGZQoIrpoKKzs1Jc1+ntXOxDZq4KxY1e/PTx1Z2rj8gO4nnb6Kp/S9bSOcQEDGLyDjnY7DOWchINWaDK66q7GFAxj8QSsr8sByO+KSuweVvJ9eV2/lNvx7yik61sFowztxfOSljmRnDv7EyweEmVOtC9nOWaY4uDKAM/XrEKpKRz7GSYdpaEy4cwS9Q5wHhAYBJHziZxfwNUThQAnSpbsBOhkpQMMobAuXhgPygpCmGBfCQCaigZ+Qp66KHOIRj6dRoRz3QSYwVxDrKwiwJqZyzKEEC/V8MitpvFPoXVULxo8uFtXbYdvG67s0Mc5zA2KDaYYkbF2ZNPv7xWy+qCVeGaWzkuio2l63IXBSmsiaynlbW0fB7SfeL035wOWPX9eJgpRuAWYZx42KbisosgZnxbgZwTO41SGpcYz6MKTC0vQdBTakroYQJj9chE45VDmvqQoPAFHwtqIdmhVIWrP6ihGrbidErkHWBkcrMedQke6dAgZkFGaybws5SASZlB7PAsbfXMTG8rYqC32MOSzsKSAOeurLEmlwMqFob0AKp8eeN4xUZawvUweM1T7xLGBc4+rtou7D9LKXNJocMetJuTLlFALhtW2rByDsdRsAMEdcmZIYYq6qAAant9vchwr74+3BeZxUlkvb4eO8LjmmQwva+J01E4dTwjawp6jjYygeEkYyz7DFS+cUQ0pGshtfVQstCQ6XWAe324Ptz5wAIIoqfeDiPgaYe5qBhTv8Hf1jfAn9dafb1ZxCNj3uuizt1DKU112lZxLWgIEwwS0eOWr53tog1yDGD3HibQE8GWkiDBidd2SwerIRzPkYoXBY2e6/CW0LGByyFdZXxFqhs7kN6l6y9xX5R2MKotwOyeJtrRsfGAGF33Ja4adGocXoFT3T6onc+MMR0OEzK0KQjdzJHdryBeV66flNS2ap7UNxpsofzih0FFo2FpsHfFUEb4cv9oZLgrjvqc3ZTW1IhKK7V1M6DCHvWupmbevyqr6hKkI/3Sy4L6yc9aU2yZeKDVZGpt9Qir8GkmdLWO6RlQn1q7HLgJJFMAiHKOGq5sEXvUngXqglDe2uqkW/InxS2xdQSvYcHXvVbzIhwz7p+Buhmm1masyWoKfPb2tUIgdSjXWnEpPGOGNaI7oA2wQy0w+QAql/tVbeDY22qi6dYgrKfG7e5WWBalSkldq5baoe/REDWfDRioqbXysbVLuEf2hItaW8sxRo2MCA267RAD6ow/jQKAAYBq/9SjtqicrcetftqScKpGjh+i2EBsgpaDQb35diJORZXA4+sR6tw6dScvOdDQYGurv5w/M1OzmrujrlloMUsTzHiV0V2T0N2KCt1x3L3K87KfniJs1Ur1NCudISWu4GXNhW+Wr+4XpP0jKmeC9DGdelBDbKA21VrPdrDdp+HWVkeBB6NAq0czgkr0kFKr4EMFxb1bs4L567SpNRgfw82sc1JzaxhLqKdU78FubDMVfK1LixoDqLXOaGvriIFt4/UrqM6P9UDixUvK26a9sllfX21t5mBMye+Ea2tr11gVz2bepNcpGFCVrmXmzXgKlopH1kpO9+nlSR3eEXs5jxUP7/QqbC5xzi+JY1RSa2etsTQ5lmDqmIb8QORIBKo31Y37/QBKFe1RT5mRj7qptrZP+xVQ8WKjH2XGA60fhlfq2sQsuxPapJ0yPt2PnZCnLIHemw9ARZP966xFthCcvvXBP+qtYpVYVjVaNSJzL1NJJy7zq6mD5SvRMKCu4dYi6vL/Y+8/vxtrrnth8CDWOUhEIohAmAABkLZogiCYwQSSD3MGc845sxlEmqTYzWxZ0iPN8ygH25JlOUi2ZPm1r2zLkpdtOcnvva/vvXPnrnVnrXln1syH+TD/wvzqACAApmZ3szM2u3Eq7qra53eq6lTtswsvU/nKNAWTrwdQmQr/ZiOx0tayZ1eAOk8OEXze354hVQH6+dnS4g7SnEM6U1YssnVCtUQ3Na2MAlL2LeB8WYHR7GeY/myW8UHLJcERMxPP909w1rrmZsUs6fT5ljhHgkIv7fP5HkG7fcGsyhEr0oyJUG9AiTvGRMap2xJLZqVepsWYryhIaZxnpnQtovyULejjLhWh5LZkjDZhYr1uVBBNOOWmKxI2y+nHGpfkUzHFTuRgEvT7WYwXSind3XmiHJhCPhQYO3F/pqCncKCb9vkCemHWZbYHdRTbgAWopO1JLoHqlQoNKqvK2pDPbpeqsFHuRtu3zi+LDQHV6KMh/VRpDmaNrgJVa97lM1gNLG928oxX/MRdoqFBoPImEg9CB0+s8ziqI8OIpkANaA5xEzH0V4zQeQh5RPNd6VEh1gF7rsLQnwgXjadUO1dOXGYeqPJUhgFQd/jZaU/sF6AAKlUGZnNJO6CW7Exyj0hQgIu3iR0Cqhifgixr+nm2TvURrtP87KcrDFSBEUCta7WjfkH7qMtXgQrFap5mYfEXlG8KArWOAVDXQidCooa0hcSWxPAMeaCKBoRHZ0Loi0WR1hH0N6jPSZFKNSETHxvoQK/rYQqz6Yx7a1HWWgJh4EzdIbET1vzEMwBqm7qxXJ1tq2IvpNYGT2spPsRqU0MfV2XjjamHCvAGDWcKPDaKNIU1BqjWUKIED4pph95jNyCBcUkNoDowr+jfYET89APH3L4koCZkNy4XQDtnWyBpaC0oqLe7tPlmB5WqZARqfvX4Eu+U643pUYNDv8gwCCnm2otS8i0m0XWg8j0sy9Ae1YvJ0JmyB93XEIUFXsOS+dvGHjmqddTaLSgMVLrwQ4FaoD4MArWBNLRkTAtPaCJxqa6CXkNzVFxTWu0GzKojlGc/ycioauSBCkO+tEcd1mDfmpm3ByKpaE47r2gYBKpLItimi6Nil5UiK7w8xX9GdsBnC/eo4/BV8UAFrtLRoxbo3OXl5XYeqOwRNLWjad6UQ71rzbNK+mEXO68JATUJNVwPA7XY5jnOyBiPAHUKeXz46AMfUkRTaMmvR2fwQikYJFrpaT8uL6Kaj7oM+LfciWscmskWELekzZhAdaW9TMJ0RkaGlWjaL5SbcGVkJDBVpxkZXfrgND1UwplHRF0CVx0fMB4D1LCmYwI+hGFy0H12r6I5TIXm0Gman1Bq3Lo2WetqC2VeFno0eS4P+TPBP81Uo3c46FplW4SlAwMDE7riAp1tYHzAIuyCDIwIGjhlZIcDrVzJwMCstpdrHRiwk7HCTmLukYwJt2sjj396oN2+HQjkKwKN+LSnXXpR0aYxHvXBCi7MneWvdYYO9k7HtKuXNqZpoEiTOT2Z7lPaUIqepK3k2zwDA43E4Z8n4xcDnVx2njgp0ONx5AbwxDoDZcqdQK0EOcv4N4eIQDLIfCCwz5nbEpmaHdyy8mxZATHiA79SchhJxUhyBoSzBwM1zDI5CzDr6onpZrVn1T+tJsMyURaAmhpIRO5jOYGJWJbJ1+YpByVeSaHF3JI46CCjbL5S195bgjlqC/GxojITD1To/l0BKtFTsTmqOjj5BESq5KbmyUIOaRIMmJ3rxDjpCyzZW5vJWCBwZNQ1SwKWauivlq/imRGNE26Hx85ltfuC7wE5RvsObNSe7MkUeg8OMpgmlWwt15ooLmhUOqdJfxbj6yen7I45AXMRqZfds+GNaiHNJLqQbkFkCYFCpjN7MxDoFYbOqucL6AgClV1rzRA3tkKPAAAgAElEQVThLhtbLovFQ0N71MASxk0jetRMD4CqGQnKtEveWehvpmbBz5XzUCqrnYqgIIrDAzjbu6zEPr0KoOZ3lZOGfqKrki3s4RVVV5raQZSAkrATZfeUm4nGPcIkpVnoYlbjsKBYhetQV6LXg7fyYbz5ySHeEO3zupfSxVzwycb3fkSfMohT0/EkcEttJrw4Ty7upQIIo+7qFGTpRQrpkBJC7UUkJUvKLtU101hmU4bURIh4e8oUz5RTMU4j79LQ94wyUsR3LuGSM61QzEROrmQxzTPbu2gnrb5qYlgswgxmI5yIKrvTUrhZnFNORgTdKDC/nGpyIqx50NZN1Eb+5UniIrRDFUxke4h8SDPFroExMur2Eyb45pi2p+Wt0IglytWOhcVGrJUsHkVKYXB2NU9Vink3rZVuW5tGHPNENwwd0EEEoMQ0X1JasM7KPYyipipMdWzoiPfJdgxOpxddpGhx8VTAJLYS6+KElM5RuaHFRZsrkamVG8sHhNyKKBUauosOYsqvKJL3ptQppbnOcmJbXDSRRkFOiXxgcdHKdTuNvA6tZjgKVFvq1cXFxb2UQgvXudhJYj6X9tkWtxeNpvSVSc1Eb86ivfUMCzJUppbmHB2avNiKCWC+DXd1Uvmyhn5ItX26PkkFoAKq05mJ09MdMHS3OT3dLGGdKy2Z09NVtOdixMXT0A/HGF0IzVV+uRsXaPRhUa9vuj4BGfow1ISobZonfzouudq+6ekuiaA+GNbim56mupYuP9LChAfN0UF1O41GN/RK00+N69PTqyqZoAvpffmJjHjYsKAdnt4UFIcYMJQhCNqXFKgqyiFCtEieRozGohqV0difnjQNZU2wL4ukWucLNJ5neDpbp7RzG2MNMlnXE+M4ciYeWPn8GEKhDDqNjjVc4HQbUxjkPV0lzuNdh57a3FajihbQ1JbGM92LlII1vGmUdDadD7v78y7jbDPLHndP105PF0Loh6Sb8qjEIhnPa3qzgF4D9CefEa9wNdGccEwQz55+spV44jEa0/okMjQPNI+3Sl1dr7t0GRJJnYZ66VoHe4HmP5ozGh31451HSHTuRS+NJhqHpsvYjOljD2UQVUBVUdqi0XggY+tURnB/xN+YUHziSrfRWN6l2IBS8UwumDUlUQbGkmZGsrBhQMAZPtZq3obDPUrfRl8SaZ09muxiCOAaAYdX6Yagq0me6mehrRqEaDApdCkRENQsZalWqTjqUQeab2WY6Ru6CtTLtFTZE8qrvD1HXGNLRGQwSADFcQbqybSMkI6r5PbyLpmHHVQPF4ygDYpnNsQzHBe8om3Be446UNldtka7S0p2mm4rK2tFKF+OkTVVUEVRfAZeYGAWLBFVGCLH+YUhdQmJhJaIlgtgmlbQRlXjkTHIC65giVQyMRUFSwiFpqI5Q3UOp6CMkI+/b2IwA3/qDqaiguSbSGOuZAwzeJjrusdoNhflPgyzV8lFXJ1stne/yhIfsKwLqRr2vFNv4XhuNptLk26JvBY8KiVCZelL7MuulfhaAkQJCYqEiBrba6nD8xUqS0goxpD2VtKapQ5yD/a21xsgeqZbkr8Far+N13Xu70dIesFt49Xd7e85qrqa4Krep+RmVc+r2R7Ez94Kkgdh/1QmMm0cWE8V0jMnYAsiy2NzyT3PnJ9mmA++HVTV1CwHp0eB4xJDzCs7u2Z+dCdrdrimZjOSgp2uufTje71nGvrwdR5vjumSGxua4l0GUIe35rimKybk3fWwlTU1vre9edrGCKJmXbHT8Pu2bZ6bpklP5UIp75BgWTW4UxXmIC4nk2H3jVf2ZIDbj8Swc/JsftUcQaLxkDmHSPSdLnylSs6jU7Q3JkZ7g+6eCWG4gOuRTw9hN+k6/INTB91NfHBKTJaSKOEyCcMxy2MPXt4zM6SrTdTMK11zgvYZnx8Bl44kTPhls06JoIpO7hML0wtDY1Yw0S26Yder4V/ppYGC1IIi3sHmruzZm2PSVdpaI/4bVXlF2ZWRFIyssAPbMkHK3UH1QjWLSnKbU9y3Em3+DNtHmvQb0srKHC/QywS3pUNswyK9oZRnDOpsvH87b2EdzSDkFhc2qZejkq9LR6N8r92Z1LXqmttpdO9tqvaZyu6dKdRItrDkLqUAYCur3W7jjLhnTuhxF1EjiMyBxU2VVLBEOGx1ux5hwf+sixJ0LRlxBnVRZdMQZXZ1YfGyraurTlaFmNBCq6K/NxRfKY8FKnY8E5GOPgmCqvPtLm2YEX8V5yKOXw1V1HeFjrmjh61S6unqqkcHkI4UXek5+CnGQlBurVYMmylOba5YHKA15HXEafV4x+gInzX4k2TkZru66LyRFbejwrSNEhSYYsVprs2UbQAqtF1dfiYF7lzKJEhsIvXjIa/tyoPeeUZX+MlBtNecjcgyyjRvOa1kuYB1JpWhgtquDvAXFyMyCRXEJRVNWhBldXW1i2kC7IIisCsPuzBd0LjTwp0VLpCpLE3eRIAXXGkN/ZG6MOIOtIG2DmGoDL3ynmDIJQco/SK/mCnuqk9ACYmUAyqwzBvbCqVSVJNFpGqDlzYxP6qUUIpXemHnSHk3NoGKFvdxKBy2hKHMVFnKucZLoI/KzvLqmo+oyVRK46gadA+o2h8jaiSmURUO+6JGHUFQ9GEn5Y4GmC7ATQtRLrHNMGyPUX6QuDeeJi3mg9nLY9DZ7tihHzueaozIxLLAaFV0Z2pcG+aEq5fabeQrkVHKEbMqhcaFgJrQ4BHSob8AO026gjNUaUuyVio3F5UEmL1kt6es0UGEXWwNNEGhXor5B1X85I1ZhQt4RMsjbtz9kRINNsqmWaaYFuhRrjMdsOOYjI1YuvdfzRRj6+g4ctsOaI2FVq+2iNjAVEkawiwZQTblSZTNONUXFcP22vqCByJNLiLyJ5I8A7VK6a6H7SlsSGHnijvCZpWGmsrsZtftxCMk+vRN0n+QX9yDBo1esoWMKeF07dNSKKWoB3hJ8NH1qHEBEygpGRf7G2kbVxS+krQ+Zr+kJHq6sFSE/Pp+xSOUbyLE2MYoll0og9+OC5VzAT9oBTidRrtN2Jp9nVRrf5Qk6DnD8TZ59lU8VuWNbL7ZkOMvq9Ttydjsxry8vIVhxpl3mAFXKmqalbfDA1VmrCuEmrd9XLZD5GN5zY270BlZyVLkncUAtYHJ28uYs6C7ZeZDQIXaX2+wyWzJNaCS1by8HTIvGJSf5bW1kpFgQvorHoT6JjYp1xlF/xoqs/+ETqEUaZV8kq6sGjuAyhSvkmWmWGpuT5wXmtYLhrAFmpVXr7TJH+X1SOrk1o56A7b7nGb5OHSQo7gz6SPKs26lHk1sxYmBFmJZlqVx/S3D5Thjt3lovja/0pTI1m4BqMwj0p3CF0p/mtVkPK/FQkbFgXYg2NyRB6yHiK09bUVN8xJw8rujPS9vTL6XVEQMBtJYbell1kkyNEA1moBs3wpEQJtzfrkam6gku/pJqkM+5gwcK9d8mtGEnm5RFxf1fas3210ArokwXJiM2zKOQSX83KQUdLozgXzNUr5e2FkNy8nn2gF7BpsKmYZrhWsWsk8bzsXQqCVWqOTC8BxgKTRFD/b5q2QHybBbuKdpysubsWS/1inrHFX5hD5qXhCoTGsjhLp7aJHqibSYzdZsV1bm1mIQnEE3FKJiN+1RZaY1PGvMXDZOGoX2VLGLArVEpVLpJiI9qnZCo9KR5SEeqOGTkKHcGwIqM3UNqOUJ6KyrVYUa9aBK5aEa/mHy2qANpd0nG1S5CeWYeANeBbogUAFZqoJGldA7U4qla2xCqfC4srJer+kBeqXyMVRK0JBWUVk5RgbYC32zWFwwGA1U5kyTyfZQkLVWB9jUFk+p05yMWWsGPQy64olKlU01rX3qaobtVvtpSTxBxXYKVc4aKJcx4gtibg9H8FdJ62rQ7+X1Udk1R2Ua1UeFml9vknsvH5EBN2Y/iVCZ4QXMPiKzOeBXgRbg2bwYko2R0lJ18yAevwh1Uh1e0AmvXpUwhZNPL6mLdDHN7gCTamrHhlsO9LtaWhF5HgNUJkOlclDVyVEpJkzLaQle215zTkHAjqBLegL7qJTa1VRJGBaFaW/z2mhEj/EYRmdncMbxKuZZjZOsVy40WK3W/ioZszEBhw3v6EnGKKDyc9RU8xmt9HA2WyGFfdRl6S7mYfNWqGy0JkZaA+UmjHQcD9Q6dXDoh4J5GKhh23jhDFQrD3RgStVIs43EZp0Jx9B+bASeek0l9HRUqJa1k5ajLbkCVGaFG80w5cM+qp4mslopUOlNA1CNjgM10VirKw549dBRE4B4SWehl6kAPugAHdo31Uu4UqD6zIZ9q0F6jidzzJ6baxqOAIMtJ36kEg3ArqPIMBRuIYIoSTwhW5tlwc8+mrjcS6AuwMgbiC3HzD8gvQjJd5Pk0dAKRwG9TFmcftrHltos/FNIw0Dhl6mToLE9P7SjLinRaB+eBJCXkymuqIJrC334qepkhA7tbms5/WpilOqQlCWn9pAttKlCtx9Jw4SBGlQSZlJ1XVGRr9xZoetuK5iRQs1vnrQWbOrQnnzzZE56ZlvOI9GCZrGYaddToJpaCgqWu32MoqBgqT+nslfcJ98vKCjosk/CNPpFj8BvXy1M2asryCnLJlFHUCaVkiId1oHE4p68wuSuggK61imauB2o5bjVqUMAqi7RWVarhRjD1GeiQGUapmHIN/LUMHjXCVIW1PQp1erU9NQB5ugAPwApSqzgxwBGYu0WtZUVyCrYGTrjyzyP0fQ5U1KIVMj8pRW45s/OJZmhp6wdgDnzKiysOU+llGFKv90+GcEpVLcJNRiQBfPNjIhi7nIUhpOR9HO5mFwXaFukdEhKvOhUhIHalFTkpgXVuloZ73Bw5Q7sj8h0AURQIb2AdJuz5xi2kajpJzJ8YyhPULhH3VB3oIYFk3vBYP6X3VASTR+EaKcHLAqM51BEXGFErdFAVWSfJgo6hHyPupDFlOm62uynAdY5F7M8dRSasaYULUKGMJhfE1XMq3fuA0dSFzfDFLYm0+5PN5KEsyLcbnyJBpUxYp8wEwA1AbLCRP8JP/GHy5Yk3sIsnP+4D7MbfQ0m9WmT8NsnHMm4N5e0SHJz7VBonRZKMSMnZIc5nejnrKcTNZLEsZ4JMt0B3cowsV4XsS+06Em20yCfaA/0TAyFo3AdHQ8EuibsJd4Frr8gEBidrGWLlybshomJdiZpccLNdU4MFCLdCpHX4dIkXw+A0vypgapkpAdQqpT1gZ5An1vrNBvacrKJFNPsSzoj24GeOV1bnloHZc1FmJ0s4c4DY2hXVgaXNoFXJim9Uy0ECu5R1KwkhqWMTm5UXBuYGQ/01MQMkMPEnLtrwzdTDpLdNlrKzcBQZn0Ojm5YWU9ZJ25/oE+jWaJvZ6cBqgCbiO/IIEMYlZ4NvsoAqEOkIYcQOhO4pAPNBOhAhll06wRe2CYvY+Ao1tOhETax5ceBglkNPkUhaYEujqxVALhBaiejgUGO7NemzyAzTFKS3EmiHMINMk5G+gCn2o1SxguYDaVqYkJPSum86PURm4Ovi9NteLpYJ/3CdqA/n/Gn4SCftHx2kp7s42pIRe16suHaZZkePshlhVJu4ZrLVZPIeh0uVdWWOW1pLb/+yAUTDs5omRZ0ZzKHR2ImrzyYsY9ZCjr2BfWuEpertLTUd9l4vsBSh2s9lUkyuEotRaX1l3G4Ay5e05SUJzRR86a2NB8+TSHJycTSwjjVDsp2kYK+1jVBux9FA2Ve6ipYwg8cU+jghnCFr4w5Q4jLpXc8ifDPM4Ir0dSyc7BBykndTUyfmeqcKpXZVfRhdrulO0jdQsaj28ewyy613CM0FGuLpNRirLo2whIKjC6TGkhOZ8pKiqTEvqIAUB2wi9q1Qtbbys1ohrELhnyJRcdhvsmeUpwSgiU9xQbewu0lcPlde0nj/VFPFG4GL8J+BQ5MoK4hQDxCbHlyG3x0nQHs0RkmWqnaK8qgoxlPKTDgSvRFnBqrNmQyFz+5dXw3ggMo8sOJmMRyG2I85wy7QUuxvl6c0mqlZI2pa1JCFRTT2xBaguMvvO5pKAhojgoLLs6xAWwWiCr4pTtWnJl++dzyDOmqfYQlTRRiwC/whcoJFR0qpIffa0BUFl0FjSJvH0+5WNeEIw/vCh19fZmJfVjik20GeF40NarFZwoXFKryZbtCi4u0gIA2in1xHrhi0VJciesC9NVYvsCMsha2va+vXiSqb2Pzc1uvKjyx4rLcJLrsGtjUVvX1VcZUmRXnl2XQA9ZYsayrrwA8c/v6hnG8WE7fgkRcATfWUVP6+grRolpGjPyU+F5N0YUmghltTqhF4cqGWgRvsI3hcP4qKw1qp7AF4LRJwZnOM0WBl+loE72KzS6axE+j01nt8NR+X99gy2UaMO9Zzu7VQpjB8qJiXpNzR4g1vOyk11T621RsswPfKfjf5BrnLFWTgbbnqiHdYoztGTAGxTx2z8X2ATNVwrjXWO/lwPCAnN81VtNY5EyOTFXewOZVlOr1+tE3sGLxKr1KCdSenOQPR2Zxr7Lo+5YlUygUwanPfXO8W+lYwUtpjyIhISEydXopRcSZviMSgFHQdm1S6OjXW9vk34tZdrkxHQyb+mDE1Llx7yea7XY4HDErLzcyjgfGJcBknpmSzUa9PmaJIyKXkBKf5HRJLLhJsziSkpF0Gy22BavFXHLvPpLdlxvIyBs1YY9qUNz5JknggPRXFeZpsrEwmrq8vOzE8gw9xadnGhpv+ICx6SIVb37sI11nUyM94xFBlctdIhzK0bXsk0jyl/MvUcmm59qrRB2cC8tFDOVB3yLpFR8+IhtPFJP0s8hwJkVhJTa+w/436x3zTbpL8bowE44ellGMdDHiI8Ps7Gz5KDvtLioqckjd+YyvyK3mLEVVTBK/aYXDvZieoiI1kXr2BTIL0RQVWTjLQKRDLJO3LSdvQ5s0bz7N5XZBW+MIrNzu7IokFZi63UUU6vVu1ZRhIwAU5w73n5yRujrVFBavizf7Gl7/mnIcEW+qBGaIZb2qCnvGC/K1yqqqUnll+hBXOjnWU53KKHbPa2sXsA8trhF6JicnT+i5nQY4huRjgiVY3TTDfR4BahU5cVHrRMxu6VTt8jgMRZUR+2S937gtKh6VG0+7DDCQU28Z8S96oK0nPjFOTkK3sqOnmoORvCo51/1mv1C/qbfw/aiX6HBoyN0v3xfMp51CZZcq7RbKj9H26VTsWeWuNrqhWIcDZgeD4mh20V3KTM0aRnd3UIEqIqcq7GhuYosr07KSm9tSp98FUA3Yzeuewsamvg07irZipjq5wydbWlxn6oWL2CqcxdCf6bFsSHIdnekRVnFXXAKxEghQYGXiJOR5YoASSmNnVxCo4rNUqOxDJcNAlVKSbEFzp0zzBc0u6+SBOh7LCvoQy6swIMbky4UWivkZJk8HoHrlACqvktYBjbNqtUOe5hhYZ5qk2MlGF10HU1CmrQq7vPAKu7g3LoGIBCZqMHTTI7vnuZYkv5/2l4UOP3TxPD5mU10yra2lKmiKktA3nsPUqihToJyToEe9CtQq0hZIg43YxOTdVD+oGOqiAKpoKAzUUbyzVZdU1LU2NMwDqBlgFTwDvGbPxe2/nKValBGnt18CMqu6s7OzQX4uyM92dHbDvSTb53bTM4/l1d400rTUaSDWAjGzJa/Lme3srOgjaZ1N6ybpjKipU+no7AxEiQDa7tm1baSkc/mJZ8DXNtW5oh0lpW3aE/1hW9sTeYcgqchen1Ct3s5jJSedTYX6ziwmt5wAxZhLkNCToNjpbI/iGXfGJcBLQLvdSKlfCyWbjiG4JvxN0AmrXsPIrZ8eUxPlo0UiX4DuMQLGc7Xa3GU7EV6USfDWr4OOpj9Kjn61pjFPO9/Y+Kh234zkZld9Y2ORcrPELEwrEbqU8zukSF1ZMKtTVncKTW3sOjFP4Js3zQ7si81y/CdQtIe9+RSnqHLizvdRAqETY/im825GUbWwUOxdACUw/oVKFv4s6LDzfpqsbaEFW0/iloW29IUFzHAvybnA72/RU2DYioWFqoocOJN8bEFFhkSQochQOBeS/Ck4snwBJVRAi56WAaKfE6+HjYEmLSzE36kuRRp3vFESSMyayh6+977rG1X1eGXeJwnMQSFWie984hSXwBstgcpRUPMbXcV45eISiEsgLoG4BOISiEsgLoG4BOISiEsgLoG4BOISiEsgLoG4BOISiEsgLoG4BOISiEsgLoG4BOISiEsgLoG4BOISiEsgLoG4BOISiEsgLoG4BOISiEsgLoG4BOISiEsgLoFXLAGx6PIAdQk+S3zZJE5MFL3MMiSyuLnvlynf+/BWJIFijuu8T66npHGeT7bidAzYsepdW3Hjy8MHIVjtv0JsQvBDrgKbDtZibqfMs7W1R1FWCaj/OMp/e04+RuKvNlz7YoxNuFIdxdEaNdjxFOpZW3sZ30YurOFjTBx8sba2Fn3+R7Aykt61Ne9T6vXGRy8ak20mB461e0ja1WiEp5Qha9UouZaHYS1aqbvKSJYdlP+8Ttp7NS7an9moERqjTMsHdBqhPsofnTbKLVAEwZxnkrqvAbU+7QoDRScszzyVNuXSgqcmujuB7Fpd6Gl0XTRThuWJeftabr9dI+y4FvqWBSQlZpDezMSo3kEggk3KsKlVcfBWwTDls1BCZuYOD1QmJXOB3AZUiYiWIuDFflmAWCSQCERiiYg3iiniiw+ety7r3L9ahz45ziYDSdIne1mRiK+kWBTMFJWWFWVmzm7xTeSLZCTwh4AqEchEMNKJ3KgMahRuOM0+ql/juUgyT+dYSU6wC0USWqkEqzmxfSzmuIBC20yQDR5QpArCCdUJO3leoiZpHtrHu5/vh+2cB/8gh9B9EosKlvIoNzZFPBUGauSWCTIzG956oOJgMntbtMQSW7sz9yZK6ZmPYkH9jLUKDfaN7yoEPU3zSQyb30QJZ5gL8nDNkDAdfEAfumSxgFJQPqKhoxDTY0dFMAqH3FxG0zjRE5MxVbKgGgWvlMndYD+RdWiyzraapsdLRxJkfTumHUZS13R6CmiIevVPamkVIiRakva0FdYBgV2ak9Ei0ylckkcmkyE1kgY3T9Bkak1sGMUz0debZlrmAcuMDFG4MRWz2SZTeRZTn2wqV0gGTabkIPRpXMGAvGCzqYme1bO8WTmuS9My4s2mcpPJilPQN6WcRUN2abowybrP80pMyRU4EOzUZDJRu97i2idwmaK/i6w/3FSZHkFKrCCnaRlGblHnuqamLlSnjRdlU8yDLRHVN3UIWJaKtrkpB3ZvvZb5ul4TrC2JBW17nmP6CtCOMkJIFO8e8PWRJO719vBoFtTPO50NgXAt397rUNRp02hFDic0ESlnP8ZBeh6lVCofZ5m9UrnRY5OSIe2YnpNKpTgOManRIZVy6jkWJ4MTpIJ1tWE3qGiWl0R6cn5IIlYVHOtFHs8Y0+XxeOZCwThHlCPSXJWQFGUWFyVLhcYl9ORVaVKYgeHsG0KpuqYEH2lPpvfTOmQXMyl2YtdLhVECl+EU9GSHRdnGMNtEh1rpM9ksqxqOtMLLUhimFwebo0mjeCRRdU65wceNwA/zcG6pyczJ/cyBlDgS2GGkjBSwJuSMcqmU3vgBPfirmxlBEVhIcSBaKg5ngyumj0/R6fQlHGwrFlg4m5GzLcPiollqbOVwOHSEuizgKR8SM5mlNqnQ08Ey6f2osxBnd67jlCZwH4okZmrLcQ/Unqlit8eDs0B1R5JuM7HL5dRy3WmRDakHkXoc96ArmEtQ1EQd4iWjVOrYFTHihWy51KKXx/T9waRv2+9QCf/ghast2sGRjLVjruQU8YypsqJiRV7J9LasEOFq89J2frkjt6KiQzovWuJK2oq7VOqASEUGKor9mlFGW1xcUTHfwDNKN2pDDHmgZh67lR1ME2xmboXLYaoWJ9WO7sXFQ2e1Zqm2xsWdCDo9Z8W5/WQqNfNJpZK4j4cXa3LJSnHxICkXiHfV/uLiYr4fDPJgs864juKOGRkFauNyXrbS2eNurTzzqcgZ7ahCqQykYXExGUDNKxpvrljQlfLGY4JArdz2OwtzHS1MepnQkcBU2IztkQJSNm2VKNEJPgOGzWK/eg1Gv4uLK8+SyxhBQfl4bXFxYrgUek3RuWtSNjUXTPFiXZZzy4hHfUyY60yos8UAlewUF+8oW2RN2U3FgTljIfPIcVhcfGpsYlKeSE+LK8ajgTpqPCouzrXNCfzJ6rGDceE+m/XEtbi4OIgJcuJYU0VP/x5K9i8u6kPvUAIPD9QR9XFFxZa8JKfYwQ0Wn/fb86Jr+na6h0KH6YZrn6dph3ONO2nT6dLS0jwwyMowg8JHFM7sgXpgMm0nGXYwS+jLfI4uh+mkB7X79VmMuKxjK80YxEG6rjfEjwcqzK+qYceSdItCofylS95J+90CYqnq6KhRrmo9s/C2851Epm2cFsAek62OjlEuWUSPQedzRX7E51LMQah/m6C4I6VT4tYYiUdDXJFnb1k5i5vajJPuT+Xz/WnzxuDpuEGgspUdHUPn6hbc9SJdT9aIMdKfgutWyC4cgLrDBm3OOjtOYNCrjJ4CfO1tLEU3g66stAdHajdBcDYKVOKGyxTNtcuMdon6T7OEcx0dHQsWL1teAkdHf7ZAW6ROxzgWA9ROGucaZ5hZiEBr24cJsm1tSAQVXao0CwUqpjBFFcFAelw1qJskn5539ZPDKWEdVkvaDbyYgkne1t8h2KGMpjwltTW1RgYFHms3JdwkZrAcdxu4GbAjwCyvytSc8f7GHJYH6q5Dy3QJcVhwOU60Rfp0kzfEMwRUyVbRwr6lLRQYvPRK+UQFpIQvZ9xpnEVEO6HTrcxgl8wu0gK7u/ckzIbtKlBFJgCVpxBQ0yWuuYKCnc39TVQhSOwi8aNCWcIx5lTazwVGlxQAACAASURBVPM6RIxsaJTGV8nN3d3Z/OtegVxvIUs08JKigIr+ihpHllhpE+8CqjM5wPa4NN3degKgpi92q2FlruCSJabTA9QzMOEVulGbTg2Aiiaq0rr3BAlpACq7GwNUDOogTD9mjSIm14aOsZ6E2D2ihu5wtjalgsjQP0/9T1ADSstTvIzbsy8FQmPfThpyBGIqnkfwskCBWqeexqgapMHgkJ3ibkzAIgg3n+TewyDJFrhz8PCiR6VAHTXvNxcXBgWXbkQ6nkJAhalhwvHgDoXj0hvEmddmDUJQYHRUMj2j0UBlcht9CYxsYVuAlz6kYvP4BybIIwjUHl8Ssy2vY1ngSuJargUsa6OQ0aapyWNkw7RHVS5gXE/KpzXzCkclbRLJAdbO8sZ4oKZ0SokxdoDckmNsSUH5xfYQUBdUZc3tQ5dAdfr8UasEKbrtLPaI62H8mvoKXzXZyZet1on6+sdj56hWn69HoepK5U8tZ3tE7GorHpwkURsrWTpABWN71PKy5ubm3KokZnZFzGiNEEEYqJlFDf3VK2GgelKCMinUX1DHSFoImUGg9mXDMN5bTQnNzSp172FdVCNgP93d2prs6cEZ3NmtoInak1aLsbW1OpOpg4Xr1tZsjJ49ak7V2q82KAbtpLTy2CLsrhgdaN9uTdMd1cu22s/lM0ereezwQnNJaXNVH6Qk2SEDMQO/uDk72KOyA8Q1tt7aOpQ4Jbe1anBoAJPerZJbW1vRJzWrUWI2wbgXsO9PosS2iMRFJlpBjabNb5b313tL5RcnW8Q+N9dqixr6GQPRgAHx7BboOENra4lxhclqNXBFVnkvswwGKLBkDlOFRB0/54iSxBbRt7aWcs0V5aT0IL1TmjzUKze0llAZ+EUTwoZWD9E7L9NL1qRkV1LE1Tn9mlZ67jNZStLTEjVRQE1fpefVa8qVvnSLhwq3tbOwxU6vBmV9r9RU7dwrtbfuXzKtR4GtrY1cfZXZ3Cw4lffnMT7lYnMXbsqpcqtywkOqc2RMbfO2uql5K19S0HwovWhtrWC61IuJgrXW1qYFnoFO00qb+BZTUrdFiTPEp6KaUJ087cB9RTebz9tPV87mm6jYCUyj1xEN7ispL2QkuQ0Y6XUdTH15+VB6czknrZniU8F6exZ/m3CjxPSugNwS2MQuj33zVEwiv7W6GoN3zzZNBIvWbHvNRkbGWC6TJedD1lCtnG44jQMwoO3boYFtkaqKK7tpOhX/1nvaCedK+gSGWuJpiqCZaatGiNxGsrUtpXBpyuuZHo4IbUQ6xjhP5ESzul1Oh8tE235oxhsuYVmK9KRcC5OwpCFVSYg6f8yom81Y1SgrmWYIh1uqCKfFfBSpd1uUxLGqnUCBnSucPdMHO8goIOkylTOD0nz5LMtU1FvLQdmpKRlN1FHeNVVebs1fpK7L9GL/CfyrGRlgbulDa43p7BCtVTVb+wSnwM+1CrlAng5LJaCaJDvBkgAEzyRkbJf0c1JDHuurRoC7vLzpkufb6Ujy+tvq6gojlWf70sQ9dXV09shW1oH8rKKDXus6ZExmXXMzXHw3Ismoq6NDLIyt4u0gt0VQSBOB/Exe0BFgfUEHPXo8yWYJDvChoiRnG9aS2e4SOu/gC8jFsJcIj2yug5GNXNTV1dP3eWQED5yuBSqk3LTUFSa+hu0MWlCXWowfzI/9uMQUxDOo7Ok7lfAMaI9cfFJX1lPXggJRQ2okFvwkfktowhtmztAW1tXlMFr8OkW5dXW5IiYd+dkcHMbO1PL+y8TUX9+bTzOwyFAppiJhGCf1RxKFXMGBGL+88IIy5D34CQVF8tCABPDNkKEK/E2AB01kK+pyBeLKuoQU+CmlSlrq6vJw05qRWbHRONOCDoI2sQ5GbyP83hHXUbeuvjj1oduVtDcudFHwRwjyF7PBTadwoKT7tLillfa8/J182EpEcQviJFwqvWbODghxYtGLUriM8PVF+b1Q/qhWvhH1eaHGXM98YDQW2ZMv36KuJ3iukMxSo9F45V3qOqMeGyfl5JOvQayFGDQJ/xpyvVbxkDdSAhLs1VX2PfTMm98CpAPRnSTZ7G1qonu2r5zYSmxftr3yYt+xAuvpXvdLI+1CzMv4SyvnbWQMJY+Hqbb45SrMPkwlX5jLyLVNkBdmiXX19fX1TcpnUYhFwqeR7A4wK4JdoKhyjX/JehqrZ42PlKw4frECWC1Vvo1aiL27KklH6zN08YOnpLP19dzInEQ8vE7fEO9NBbp7Lg/l4bbc1EpFkvZZyrt3xR404UjoVL4HZdq8fmHHhgfDDBEer3cyT5mouTU+vbyDj8s71Y/cmuj5IwoHLu/bPLf0/HyQs91kB6Vd8nsKs+aZTge3EUqUdDaomYjM3JPOOc+9EQ8Ws8R4v1GxQE9ITlTFeraCK/kbtsZrDCrp2/2bRBf+W2tT2AXtNb7PkchkoUdOIJPJRKyEekV39YQSdxvlu3zecyv7cMQ5Ce5MUT8b6eL46DayCZ1OFMY+Ko8sGIZzvtBVjDPf1wzBDhsLSJXnT3+k7irvWKjk5Bx3/fYKqrAgwWqXU0ISDDFhZcfhPVqqAfpkLYp5lnBIwPLbUqjk02mjKAqo4isSjM7Oto8nF0YFLEsreF+mC3seV+j86ErAa/W29PaeTONeiYd7eaoXR6qT39uoYnO7S0YDTM+KJfkoA1GZvd0Wk6Uk8UnyVm9vtklF+w/tfG9vM8tuBjl0QbJtcI5aIINMOLKQpCAYlwtnRm8tXqgUwwlwB0nbT04FefNa3M3C3rXy3qDsQpGjxF1tcbWhhgfcGrikI5z10wLhEC9Qvth6Z3NwxbpTNIlFbVnpC70LAqhZKobbc2h6QWHwZUqxjPQ79WyG0FOY3karjOOym4IPApvZ1NsnYCR98ynFSIUC2Upce+cjPV50MZdu/2aPp+w0+puU2t4WcE7vl28yCWNGaTI2Yut7q1gmsSl4WlGTMLi2mti0VbJlu6AtClGW0DJWU/LIj0Nk11F0l1gBGfc20/p0MIn4DWmDhtNv20Z7e5dpJwwlXxWW/7Tz04q2Xh99Ctn83l4vr0AOjdmMnuSecCba6LBMZ5MVzTyDVMp8AUnaOyfguiLTSNZX7RpbWSmic1TJYQORmlYscqjuhClXKvXkqqEOOtaD43uxJ5RIBxmq02grtFDFTrhOgJpxuB1TKXSfCCHQP22rxjoQoQ+rd8UCDSjoSmBHB9qapYlMSiPRFxmNyfL1cDHMOUdsRQ7hIbSkLJSDOxqp1YTjOPIIQm2kdSB4WrSjUFY198qg/ATlSynZFrOVZlTGOg2sX1LtrsdmhnamukhXJdsTag4ZtmqmyKS0FrKMYluIfOSA7ZYSU7LD7MUWlY0jA/ThSdyyoK4jPVo9MTnQsmOGWdDQpl4qO10WcdUhcdVGB2Gvv6RgOnObkOH2VXDgdGPaNCLPSeokDj5hE9dF0ye2QpQc6Y56EOjeGYqcY9hGXKXCqnydlEjn/ToirWZ6qeQd+xSEYdqmQdwZK16gGrPmR9pJjku2E82kj00/M0mlFs8mI9gckRK1OXrox2YU3R6rxPPgmLRz0JbAeYooj6r77vIqsXPhEt6A64iFnw4Nm3xOps4VNTWSefuIzf6kwqtdl06srmpwY5lqXX1FpdyakLXGDZ16WxzlbJ2Oa9wu4aSHdTrSmVGpB1B3ya53Qx0cVYKK0+JD4m729pLmpE7dk4q2EtJYANSHKHNbPhXY8GbSb3Nac/1DXKMoHAUA6ce2eg860DGckGp7p20CIszuK+4xKPMZNm2n2OuzbDKJptJeb0U1GY7k6zFK1+qxfNnnreL6JN4lcshk6U0+7xxnyWAuHHneQL80h8nfKPd62/eTsEOFGg8IkB/3XDWBZ3FrREmGtm3YQmW21RsVeQc2OnrcSZKimFkuxgB/B1l1Nuj6bMq9gHe6XFo7YyeVgtMhrpcyapK245c9ILpN74l0LYp3llC511PbD6BerKOJJpXIm1euThePcFXOlFJbldd7pI9+KrfV094egz6xSrjv9ZZ1y6u8p1L55HY50WW1kPOKipy0RlGKXTqwvaiL3iXW9pX6B7fpFt0+Kd8Yle8z4u3qSm+Z+Qjd/gpY0ZvyxlDorX94FTWabYwaf9DDkcksBCQZOVdJCfatA0y1sqTE7ShkxPvGdKSvV9apTHlJTGKBdY5dpTKYKBWn6wcTGbZPx3eMQ/IWpGNO5AUM00Hac0gTfJkj6zQwTDtSGohgzwpkJhgQ9oVjMKhPhFcNMJ/KEjUYmCz7k7rDzT0OisZpj7C1Z9hknOpZOPbJQKT2R9IzCet1ET80/4HDCxSxzJWxrGxY18ws6RVQfW/AXRh1Bd8mUCB7dIDfpBJXIEFSeyS94LWnUtMoUIWlJYOblnsAdTJccf46T550kAZ2aLWOs9DuMqV7l8mm/Zc3+LVgE9lHaEBd5A3po17mzhLiDVe8j/4ssYo2sQjd55k6XVJkKcSwQ1u9rOaxHsqxjTmqZEXpnJYGEFJA+sVO5SDU/C1cbQ3BLSsiwr4aDmeCs03WqI6bWbCkBjnM6tMZ8Tmqk1AI5o29EOSbNUdFNcM96ircO+WRWw2vP/jpnLZkJY8nGZNbcKgn0v4EmcWM4YHZIKfSETEczNQc202BOlgqXuMeIUAQHMGH1D54JEvoAAHU5hzyCCUkeWZp5xWmndDLVF1wWNqTV4VjMMPzdPP88VpGu+iGdaaWK60GpbUx7JPqbIxcAKq9EyElnsNIvqMD3Fu2HEBtSQbCLuyJEhVxQQXDDZWPYWVjeXnjAG6qIaJ7JL6gQPUHNZ/blEGgMlSPcK3EhGI4fM1yN0mK3JnR296Zlskhop7RVPmk61Su7Noim00gj0ugriO0mawikuqjRohXnJZZ5pjMBpRMCA9UbqtKWUa7/CCdRpIzviIB1B0OJNMc2sTIGtwSp7kSBW5xAeitgEqq6y7UNK7KXhuVb54f9lA81UdlTtCjLnpo8l0EvXlADa6j8j1qzpUeNaSUu75HcZUSYGot00xqzqItSTJLv97NK3EVmPUUsVlpc+JSCtSeUnGzEEBlxzTAFZanMBXAW8xuCKgKg9IwVbygxMMdoSBQE0V1ZIUG7pkiiGCZibBSXRCoBgB1maZKFLAFASahq5x0ip0eOrtMyTuiEUE62kaVeaBWEXTQF7pESSvXl0MpiRmxVebk+MyzIaBCWROZRMkUqAnl49RzTiJAle1N9xxBn3SSCmFH1Ybfm0lSdBgTIe62QymKkCqv9BBSENfIrwCVf+tvJhMoMVO3FpWX71EBVOgyLTbnZLgoUCt0S1aKqz5LB98MPH6X5AVQFWmDTBCozIBL4rTTYWkDQNVttW7kYNwImBIhkWNV1OQu+PBTLvOeEFBLs+tzWjxDLCPYjpLmZUGvzXHR328WWvuHesbdtv6clcai5jx6n3jSNg+UQq8WzeuV9+f6V0uNzmai7m0+tNiScAy6o79fg84glyvq7+83cmcbStIYaClXNiwMIqRBTsov8vr3DMr+/lWFr1Q+c+IvJWlVLY1ECd1xF4bjS9ohS82+AVdvu1q319y8a7ZSRIQo3ZPsz+3s3xKMFpEVWZVO0yXrpAX293fnu+y4jLm22BSXlYaUDoRz4RbJrR3N82r0qFXcevO6Sd2RmqsE9+aRfn+6yZbRXDmhvqBAnWheMBhFkrbmSvMB06Ng5jSL7c25RlNvu5nMOac1pSMznKu/XyXltih3FX2du5HSm32mleZm+siEaZiQ3hLSmSLaUVqPKofkZj961InmnWz7cLq4rXnTnt0/wySsqlF3FbRFgaYQrXHCicwBobnfqp5fOSonSiz3SnbN8jmM2wFd9ZPTqZbuk8izXjynP8vylRpzx5TlXafNXbYT1qk7bW6ucUsDk7o+tLqucyHF0d/SPKW0b0bVcJmgxisHWlmnuVnMnKzmKErrAn2NBB+6CbZHkK/ZG67Sa77mZvPU39aNq38VP6u0B+SpnUbp9R0YuU+zs8v12ftMrcaTnZ2W3J0gynbMZCtd0IUsTKOdBreTUISLvxs/y4JBvEvasrPPC/CyjwwT6a3gdLaOnxEm1WATPlFSZfNL8uMdF2+5XqbPjau8vO4yBo5zqtAhvUjCUjXXY8DaA+trxMs44crzt2mRRAnk5KlQIik9jGQUbyXTSAy0If1V7ki8yg9rykoneIGoWvJmtgYulSQFarNE362ZVdTyWq6mZZqNO0Wocp8Wh1csPLF3AXUaGrBQD+2J1IFJV+kqtkkuJjDWbJTpwGg9DJFQMozxyYmtjCnORhOlJVJ1pI88EJaYCx2ObEPqAdIXlerlXehKs1VO2otU0fvikPZrL0s6hEzHIGPjRROiXMqBTMbJ9+W2EUXSKhUqSe6SrDUGi4zquvPp1Ek9mZLBEXlXn4cIvd02Kgn6ReYolZJt/bKQ1+yAuiQlaL6Ffi47VIwTIC8m+iDqoo62TJYV5cPVu8Kw7VoaJBsuT0uDWvLYbMdE3k513V4VI5hJWwqAH7OSNoQMIe7BMhg2UJboWYp0Bxh0WzrqZzpy0VukdHQMUm3MaMrb66/KkMi609Iai/fS0rZZRraTlpbdJWLYxCF83NZL0yf0p5VPRw9qUMymH665/UAxdXS0YGzLpA6EBOi1I0BLYXM6BuvyGUHVzDp4pa1qmYTlxrS0PqbCigLnETTrhT8t7Tz4aK2k5dBsNxC+PgTFxmYWMEkdFOAQX6jA5nHKLe2sQMVf04BANm+lIVdW10kT8pQycCI7Ta/G4jTWBNJqEhVeH5ADJsFoel9qYfQgQpAplBpZJ5bsWDapHemcjfUdC4e0iWwSWthB52filn5aZl4kH5NeVz2JJelzBE/3QqrO9Oq0tLFVOmtmelRpI9GPXVS2t8eZtDYe/NSXVpkKjhcj76Bt5AOirjRVkNoWV4eLC9KMkWEuGE5z8XTpCAeE7k+Qd5Ax76bx0DgN3b1wiZe5EAltZ/t0YVTIzc5giZQniGfKX3kvHxR0BTPzUTfzuWdoiC8vtTC3YLkRBvDTP0rhJJHI+7gyK8/wuXWQA3iEswTLDvv4a1ST+aKikjxf0THcX7dHsEqXgyeeoxq+CRMnFZY2P0fWZ83CrmEZnXsXPuV91pYzmW4p7s/hM+d79zL0zINanqddkpSB0uWw4sDzMLh/ni6imp+vun/6dydlwjK9P23vToNeS0skoqcX+yCqmllj6U8v6c4UsbPeO5M+RySbon2OXPEsr1gCgpSUlLrwG4EoJSWJvi8EiXWuG7FtdDm1Coffdq27OMWb2AOT5NHFRavzHkzFGxcXlfetqyRFdAlPQUkjWnk/Upxd3LYudj8G90vFji1HbsP9srz6VPeV9QPVrMpoNKvbQsymjBbb8CXjlFIlNT9z7wqdE3vSZeaHcuC7fhI2GxLm6d0Mu6KuKVad0HXfB2XLPmEPf4co8JQnRvG52blB39exwKUm1fct42ZGd4WmHJ3ytNXiEL6ZL/oiaJcyLK9sKoYz+DTBH5pEIiw4TiOILs/AL4ZCKkUQNFRlsqximoOVXXaMlzzCYqEFhNODA2UQihIlJqZZwxlliXVRlrbYlD4b9p6DlUDRNJUkVD6tT6TAIK90lT0pqL5JI+8xswhmu/tXsnVuvgSqIFiX+qLUsETQ/uCCFdbGEg+27vtQ9RweJodRLX5UGK6ChM/Pa/mGg4JXr8mPJomZhE7h7n3LiOVwH18tv1SM1dxqNVdwnwyvPM2KxWJIr/EYO1jJmsVi4bUp2QyjBeqmSV1TORcWS4MChmgVTS5LZ4eEmbJYnlRbGpMgsmEkt9gcZVinOzYutlMsCepVCLsIIxEhbH4DQkrzGHHeiMXS72R7LZZ1VtY0xauTsuX9fINh4VYgWpZ7o1pfo0kN7FjmqfXbaZPliYIVzw8kithjiwVb/5I64zZf4GWGc3thU2mXCNWSOM/SgraCBLVTuQhJnKLUBlteUSQRJSz7AmUU1aJmlM4KqEXcMCX2TgdxuRwCqqRy0jOqYMQVbmKzWBqzUEwCJDcEBihwqncKZlijSJLYOzWVgwIr+LKh5lXGO6amqH4qU02X01E0LZOvlURUNptDKzhsOXOKqqayIhJMdZH9qamzdSB191w23ZsJObPpU1N9eN57gkyreB7B4r00aIG3BcyzR2oB74OII0yDaaN/lzk5NVcpLcl3lhYI8qk5VSyQLzfRG/1m0OicUWqRCjlz5oJcWC5Uq/IZxSgsawo5KUzN6IhQqEweZprdVO9TuZJYiiePEwphdFaUhisol61KFnIctWomnoAuJMcrUIQb10Z5E3MmM2VHcqJvmynn3JJ0HWei66hsdhCoa8lFRUZb0AJPKOcpZ4JBFahRrHh0QqG8UdFkJxZjBXamhBnaSWye6GajB8IZDgqyauMww27DyqmwBMNXXolDqEmeZwvonhVnc/vCdcI1YdZolNtss9BISC5yFCU3pJYYPZ5kI/7c0JWFVqwrhyYPGmJikyaxfcVtK6pQJUoLjGzWRGW0iMVOFIgSojcwkoYsciGXnMhCK08olMKGUKEZUkB/JbQXY1OjJAjUPFomfTiTqj12odnVzlKVW32ynDhOLvEBK0eUYAwmyaRJFkqhp8Is0yYmzzOPaMsAL76qtLrYvMLek1RtxFa9ohc2T5MntU5r8jYiZoqSgxpqfLJrP5NGb+HcYOHaEjTS1hsswmrYRVascCS56i54X2PzUgNmoYno3RitKD0vTineJKdsodwa8HpPPen5s2TP6232PJGtuvYKivcbSvK9VmKt9+45kphhael8MRQWZan2zubpXVKtgBpzfUZuA29hJ1TjxDVbrnfLYwskFElPvd5BuzU/qdMtEde2PqECCPWoba2Ny7Vz6ligkqKTXWtROtPW4S0u9iVrcxfVZCL/zGGbLRvQLM7OpuERicilQi0cn4UpVXZe2d/hPZMuSRQuzyNvXb+yTTBINNt9NcLDSGrmQrk67w1YZhmfvLPF2z4gdJ1oRvrKk2etZHgJpoBmZ90Wevu7+B7Va1QvLkLldl2736CfnZ09VzD5ypLe4uIjnZdpUto6mgegsxxhP63bLfZOpaWliLeOoB1q7mYlWd457EsWeLPQVYkagkDNXDoxzdCuq4DUFGMPRN8uGdzWETNK4DtenqHi3NaJgDoW9lFds8f1ugnYq5yt8z4qOma0AX3yrH85ov+FJzDD3F3ptZawzAWX1jQNxQJnCalP2XRmrjZ2RGp4zTV2Llb0nzIZywAqKmBJEzOnnsbZ2WzNflTDrmV7pQEH0EQEzWNHubS0wVMqThyYq6qqWtqDKqitFjErllTNOk1SR5qZalIPVT5bEpPRSDTjVVUpzALnWil1EO6CLSEnE6WaieJI08qgo473gN5Mrf6IjlkrEOo4eofEIMNQj7qnrEPcqTB66D+FfTymqkHENldVzZa6zVqorElrGb9rmMlPXl2oqjogvJ4hrRfoRH4sZpKGNLVWslZV1ZWt6+nRdaMV62SSCXDHuM32Qz4h/yPr5j9qqD5gq0k7QjI9+lTdjKCc9+eQAS3EIYXGCrtDgcoGOOFO4/4sGZIxddVBLvlKM6QFQ5KsgWprZwlHg+H0V1tuQv2qFtWZbBmuVfu86uShcBIzBp5CQz9G5aIqGjCtM4CZjUyKmBa5mVYoihKL/EFf0D6qC0BNolyrjwF50x4+7YkGKv9oseclrNNMvxJK7ORqp0nvCTnNsI1FMb3JmWiCJgJamwal1Fyo+D9Rj1VVNdnxLL4JBEzxmogUqDsjQ6AnrGhhHNfSTlkIRyutmSXXgZo/2IBU9ilmlR+bjAMBtjivFG7jJCAZojJqAZcSb9GQF2qCIQqo/By10NFP+5WQOVM+OQxzh43OdhK1p5+D2UmmRb2a625UMIp+WqJxaDxqaacXfTwdqU9UOtqIoaH6YWUr7zgEUPsw3kYDVTDJazYmFTLzRtxOVlZtSbXPiIwHbFpYYzZRB6Ay7byaYyD4psFdCKKAWgTu1eoBv4UeXxIBKgTaBkUcjsDYe6bEg4oabLzq5KH9ctM4AlRjA12orZZTPRBhJ9ShNknoSQiJAZgh/qD7EqjaIdI4NGS6Cagsk1SER6sgjQ2anWTKNLV5OlcNMTWQpwE1XR0C6hamTbCH+kTYTQU4UXhZldfrkHUmi/IBrVzlbIBhUgNtbKGFPkRN0JVcLkGrK7p7GV4fNfE01KMKVtGj9jYijunPZmdM7TmnR/m43xt7zVCU7I9MsJgyXp2v+CwrYN+ls7NuUplljgIqP0d1WtJSWSZ/N3boDwE1ofE44NRaKVDF3bid6L4KLRfrnVsAWBTV6OoETOaaw6sK6w8uq8Ndk6wVQE1IO4wkTyqnQGWbK2W5tEeVTUtpjwp9VAAV3yDQJdwa2qMybCcVRaF+duZ0YqLML2BrKI4UbWy+g0552YCIMZTiESmj/X+YZKrtgrac/MKDzDr5HNRe03ig1ulvAqqZwuAJKe3sHPdVose9DtQ2jT/IOAxU1k/cSUzxQBioCSWVwQT8b6YnCNTM5BrqdybXQjGRJx6o7O2wuwQqGORBGf2JOSGK72t3XpQTudVYnYAPMYi9ocFkLxUXyo0NDQ0eAHWeaBoaHGRbAsOdDQ1ukp1QYSeniVuc9Lyvl5iRSpfNFBqtDUenDQ2PoDjd2NDfYOuM9KjaAVLa0GAmx8UumryUjGuZceXYoUFq6iyY7z9V6xoahpkcCwqESfDsy/cdSc6c/KKt0mWfa9d17vRnc44AJJyZTHQBwGPW/Shd/KihM/1SenlGIjQ0FJEBfHJQupnfCq4bQj3q19CwW9xvc0+NNiRbOiM98Knc2tBglZPRXJLW0AAR1GTqLCfJeqgsDudgjuo/tGgCbEF7vmGzHSVuyycqM6qtmlRxib1heq5RmZFiTG5YP+5v6PdukxIqlUNgrgAAIABJREFUI0/DxmVtqjgX5KCSH8+T8gbo7GoaNlobLFJVQwM6q/qVYbtyqq5JzDjbK/Wt7RuDmKO6xn0XKmGDtuCM2IdXgJQoMpQsVOw0LApGpQcCTMEn8A2Cuh8yNU5kjssdZ+yOpmSJDafPcJPGisFGdcP8URFtfRFXCyutxGUjjlSkcQ4kr4WTXr0qWucKsXKd4mlKYBfIWeIT4VFhe/toP833BlBPGahuC9jKLCurLNvInmULNeXZ5absHRk7qaGaj4/SGUlZq5DYV3rw2QQhA3g3Jee9/GPq2sR4TrUcuexmlg78uMtUySxI+Gp3gAbBIH/hGU01joc0I40GEW4t+JEFwRtq0Ao3osMZM6mS6N4IfvwdPFehaQZdamnw673aauLpF0Z/GfKEWMrxCmzLYLTLOrWBE7YWiythEhe0XYCfmV38mCLAFtXxyqqtspQmqn1q8bGJdjKSTA7TiI5qaOLVeU2yICd4eoiugPHxb/umKhGzwet2qtJDCrCkxIuBGGQ0U63YECnKlpBBqipIP6byy862zKv4q6odCx00OYqUifiMhLQyihU7QqTWHhGdKqC2lwKkDGEp2EaMYyluIu10Ynmss49WWZhttqdCYXS1DaKKfD80jfrX0qlRg1NFF2gaN2VMnqYzpdJUIwaveiHm7DdS+lAD3vF7JSuQ2twMqt/ZbpKaKCM6OXlDKEYumKJD91HCP0fT/Zc1FFfm9sCjzc3NddbipzgfP7m5SQiTtcCRAe1QPw3piPRbNDPNkIt5Ab6NPzrI1dIg2Uh/VW5ui8hJo3JzExFUEXTm0WhKggwE1KbjJ4lJ4OPOR8HCP8gzYAK5XecXVL80TBW5WZKy3Fw+f1vu3mklvSv5p8nu+dykAuVJbv5JUX1uRTg1vRZTrrRFSbj68OFFRm6tLzevPTf3mKwjqAzmTmkSEIbsAL1i7oLZC3XRJtLyjqgGrLapsbvDmdMaoNFhgogyBGEPQz+QDFNzB+WQixpm8Y7cNsTkwYkSWR8fhAKjqDl3dagjnREMpqUZ8qHLuqrV5p53+MQFp9rutPKMxInJ3khnnn9egI8bGjpynWjR4W6LjDKi36EEqyBGE6NYRzn5m5hbzNcgpw3V8LG8iHgZRaV7E53sud22unoeJeQXqyWv+EhZXDqegV8wT6Qud/EIp2LT0YEzWroNL+IfvHuVV0eanNHIuiNTqCC+LuFC70j+vFFB1lRPlNdhBRs+hPddlSaNSaLPPuguGQVTvBu/7EARqOYl3oE3UU75/UWGfkOkN3wT6xivU6wEJJTeM5wyLNqc4o0VRNz3FkogSpm0drfwvg1gM/lh+L7JX0I6lp+uvQTGmK6mR02XX0oJtzNNSaevCZQS0tMz6dT8eUmc+Qa9Nt3VCEFzViiaTbnjptZUXTKpijZjdBka60iQ8H5tsmY/NuJZfWxSyvObva2amRmcoBPWMIU1rPJmZsKtDkfFXLUpCZKUp80DjjVdNBN7qVAr5j96jGF03ZPRtZV+PfQZQ8Tl6oNQlnW12hHNMNzEuzg2z1yE5rPYPzSf3JX0zYkrTl4MVSbT9OjWaqW76y/jvKfOS/ctjvwSqmCEl5nV68ZHxVP8/b0l59VgyZKuP9x5XI17ml+brRw63YruMBYO+E6Q7TuQ+m/PrR0t0pUu6XJvT8HHTFALF1jNKA/PGHqNBU/Jgugjs3Tw6amekkLcKGwOJSk7bY0x41Y1dXvezNNaPrJggFq0CFKmJXzX38zZXt2jR49Goc0l6HW4Tx5NK6DT51WuKxQKvh8RK2jnylLNS5lCgZvbTOoFCgVVgpPwfr6RbOWYFgHLhWLR5oYk1HB6EZ+SFfDvwa6zZVoS4G1asuDNK9GJiobg5AETyiKGXwyrq2EvShHzoxmdKedUH2APKfT27vfx1ZPR7Onz1M3moKCqUM7QJaRLK1rWbSYG2xOKYHdaE4MtLMtOUtDW3UCSqSKszYLqEBnSR8UjhwqKmZSajKaMRx2wYIUqLg+igdiwsjRUBdszyc2HBchAle/mAVlWrJ+m2Z6JgtqHULsM2eGWlY2G5C1QSLbKcRcuiT8NMfpmXMZgl9fWFvQty/lFN+qJjKO0UW8cZaYRoZxLxtmLFiEnFyr1LYzTRDR6ix5Dtbj+Qp82FhBnGFdHa0r10DbKzCYr3RZ9Kc6WP7foqZUx2sJHdm6gkg04bBcGoTRaj6g9aPEAz7Yi+XTJLr/AiuqGxaIvOs7B6rMU54PqGwsvZcKewj842lpaE4Au5OjozlodOzY4Cpo9Hm0WL5WPNgobu3Dbk3pbNas+lh1u1BtGR63CkVpR0zE1lzBwyQuVzxsr7R91YumzU8mB8VFUHAyuIIROBsqEen3a6gZWjttoQXVRNwlG0g52d3dXSZ12anTc86hXW4wU2eejDU/aYFJKqiZKGDhiqi72F/m7naNBgH4bBaaRIZNFv4X14dHRcoPqCA9/Ui9lHxxeQhUps5/SMFir6qDXeYFkA5cOJ376JKwPl96kSJ0T8kSivLGSM4hcULdm0mP3Beuvpfr+RJqGzZjQb09ED/3N/ROjozWzgC5bCFbT0Q9jnUG6hLA29DvWGjhwC9DE0QLKCR+ZI2T0zgkRn+4V/4wJW+tqnzTOQBt3tDW/fRgWB1L2pI0jIyMbDJTg9CMjq+bh+hGcgjgyYq9mUsdJK+IGZYxkfaSTn6Nqj01U1dTeUaGnqqpSvTfShEoY9YTpTwpUiiMpAVrGbeVzaWQdSCcmsBoJXCZnT236kQHOVkTGBHNc6UinVN4D/MEvFZILyTh2WoSc0MckDFjThJy9RpsGZU+QkGtKhNIqPFFAlezS7R5i6IBSClGvjIwsXJYDtU2X/GBkZAf3uAxnp6/idGnBko62QrkcSSUy8eo1OcKOYXzgDYXSyRY71D/pv+M0wpWoOSlJS2LoPtAhxfcjWh7pxEalkVjRsCpGUk6MIxOcMINxetR7I1apKrrL86nRHoID1GuV0v6RNLVfAqMwxtFiE5EONdeY9kb2lOeR2pw6kmHwlJBZllmhjeUOcNrgilDKK+Sz9RqIKMaCa62S4ADBWZhVHDNDQtKdigivmmTS75JrIJFiM21Oo5PxwljNKU2RtcxLdTOS+s1widqahoeHt9EzpKZNhKqUoQvOQ53ZDp9YXAETiYIDugtqqobSLlXzC1EVDidn2E3d9k4F1Enn2H2yk5VVp2sPx2OcHLa1HFUdV1KgFh0c+EswoRpOTZRU4NRytkoThSs+jzO5FfoFTfPcmF9d4hVrR/VZKaX9LfOavjaLF5ZNJ06zRkhHwvFQYkb9IHEn5mdtEK713LvsbNLn1C5sRR/bW6BzH4BsVib/YGJCEqkT79pvCM0vykhrIKUkWSDrdo1mQWE2Ag1Jl+OYphVl5RsMm1lZTUp51pLFf042Trm+PPt8+vhsvdVUyGwdWHR8R1ynHkeBJ+idsjU+vhSveahArFgiC2ydZlkiTjq7NIVOowts48deN05ILTxY0Ipr7dD6ruEqmcQdW66iSlc+P7wjnaMPQJBSRnBi6sGsThlg0ouhvmpwYDxIyBptpV1lvWV2s+dAjsfmkpzKtNEdOi/wK7tnsrY8MdpTx9bmxKxCMepQftCe4bAFmMwVt5zeWTE0bjMqq3nry5e83gTHEw/nlhKqgjYc7I8gmidUBqAOooaeZBHXBNUq3MAuqoLG66OGKl5VjcRenYeKij2bgyXkNtiBUeaGounFrwp5FPRoZa++mdGuukpL3dw65rTu8aiU1FmHje9uXc4eOWolNhRtUgeaSC57kCxK7E6YIhMoSGaoruVaS2wOB3+oeI0NhyJiLlDCud1mfTetSYiOSr2oFaOywn8+iHsSQ7uPQt4yqNxWSJNFKTr9xsJCPW/QLxjFrgtTg64xgueYEV/IvagxjKQNGJPW9IoExxNmk29ByN5grb4wmF7QSY3vgeaJp6S01Mh1ptqkaHWpJWQKPZiMHoPObkMjLWmq1OUqooqKKcYltpIqNBzYOmn37MgPJqW/M5piNAgyThlzlbrcXPAm1fMP+/g4GigejH45cyq3+LzsoYFKqNYzxnuDPxP9uHOUlg/wA5uzoJ5ketfFq5pd13F3yVWB0RSvlSY8eZmBPXsKywzjzO4ghYHaptvoCfT09CQxSRYME9eASrWIoVUMi4dUSiH7qD3hE7MpL9bPywAuhQcyZ7OboUHWuFdQhh6V6ZDP0DRRBKCy3WksBaq6sumsZ/hcVg8TYwedkuNTZpR04r09Ka2xluseMGJ4rKUM+4PZqzBy4UTZrAizIzxaIArUQltnFIJpaMJ4CFNMGb6DFQwZAVR8AgIyopohGpOGBLLDA1VWEgbqocm5ZFYkmJ8wXdFA9cPeWZAmw0DlFnqoBIsF46qCnrbRnp7oelCgUmX0QBEOlJ4wUqBK3Lo0D45BT7XJq11GY0l3ergyACr/xe4CKfDTegLEfG/CA5Ud7wewEkpvBmorz2MpBqi8LVCERwH1KKjWV2WmzKlJ2TeLJpIz6q169fAyetTVsjLtoJ8RjfMyyITi9JAWuh2qKtiIhQxCQO1iBHUNTQBJphVAZVLNVLlefCoM2UetV4bxThvqh3pobVm7mKnQD1cw7eoabR6ALBikPWqZuuqKLPgeFUA15zfpFnBPU6bq2kluSolKMHPG5JvpUoqfNNVy505nW1tlpQhmT4NdQ0J/63Bb2xpvxTbE88hMO80kF4BaHDJoHSktoX8aHqqc2UT142dpj7qd09bWNjYXSZRvdiBOu7wywJ93vSY1Ot32YvSoT9RlS+aEyx61x2BKL8aN3RRWU1W0AibTZWmBwyeYJ9s05GC20FyS6/WXVdaEnw9aShiozcSTk1I8CR1fhu2B/tRkAiMacpQ58515R/5IdTrk2wKYB7TK/KSmrW0iCFT2JNijyk/ai8+lk+hzw+RUlvJIZsfxgRvkpo8BanLoCYgCar2Fphe7rBDD9D3OXAoX9IquFza8jFhV0n2mrEENw432J6xgUG6wWq2lxVB1LLVay0kvzN3rW53VRGftybC5rdmctEk0aXUTO5Ll4DR7ldUg1J+0GZGy1sCtt7GXlfeTTqi8qUTQRyV7Pvxsn6itYEAsU+g+aH7rSiR1HbH3dKsPZoUDmdXybKvVRbraiWvaLK+pSmvZkpPGkdkSTZtsU2o8yugUmpx5fneaf3MVJ1h4iGnmuIjXuQyVnVVi3vetlurqmNRy4kE5vZeVgmM/mRadnDqnJqXTDQ75eMKZPLvBalXrai+TsVNym9VaQsoroW5qNeAjOomb1KtI9YZ6DZ+/5ehMzSM274JVB7uQ5mxZ8H0RenEMM0k7JaLOTA/pLJfKOqycHi9+9LUyRNrqZC57a8MFddZGtRX6pVJDN05pHuNVbpkts1BltRrNR+Hk6FGlRtVaEdmFfdTueqQXdicUng0oVdvWWa0vmwhpTxilySjYltK72J+6pCnB1cHPQMPc6rgihA31Wj2OhlOrRr3o9/vHhedn4wVil32l3b/45gGVqVQZjsWS9iw8zn0GkB/LH7nrnQaDFU//Ag0xVPX0GwwN+dsGw2wCExhByKlYXENjQM1MuxWXhgLxIi47+9BnXI9AT7tRQjxDhbIVi5Ds1UNDclGBV/5kgwXvEOyyQU1choNI6naDoWfQMHtmmJCJt8DNYKhIODB07BgGjqlHbje4XF0sI9o1GJLLG9rEs8pSg0FXVMYkuvdbDca0tfCNoNfNbIzlpXXQ0UOxoMPoSGpP1WzYUTSWGhYL0aIBkaSym5ZhCESSsb00YLGAqXiCa3+HQLxtGNwxGFqW4K1u6zacLpFHizxzgk8GxMcGOSk5yMOEEA+n6RxfiSWWTbo1hl48uYJcyPDJGp0uBikJIjaczuNnSTGswsVgaE3EILK6y8e3NSCgISecGteZ6p5uT5oKN2ofUY8Gyx0pXfI0uQ4yzGFkC9nG1vNs/lyFUJ6efguauCRjugylpGjCj8nBJSnWaRPOso4MhpHKVTjXgzWgMoXPYIj+zOcy15viiADmSo2uRwRDrocjY0JLS8z8JqElE6GSrMqWQGZLSwvGt/zqVCZgrUEoO42jnW7kEqoBNNlCLpra38Mk0WGMUqEEPyw178wfr0K96REU8EnE/pYWOppllTeCVABQFEk61jGRYDciHWhUZIwzqgYx4dST2ZKQhEaBeA1Y1s8XiIjaltRQ4pS2kAOlXbru54hV05vRpUSaCFYCv0Tsl7XnNVOZYnECUheHCw3yT21BEykF70HQff33arWu+q/neF9CqCRib8LLbTmF+3XpR0Iirpdbjxfinrmi8ddWCF6IRzxzXAIvWwIJVsxwuejlqpddYpx/XALPIQE2ZwMU+RztOVjEszAJ57l3SEE7v/70EevSdNodjJ41ik2kE9mnkyIp81lHf+0gPe7uTSdFejr/CvU6FWZfpozEUKYKkvZ+dzqTWp66jfrSpPyxdbfFI7zq8HA88Y7454wqMIVeJu7Ov9FfUool2WeiDSld9nwGCsmUrTk8jH3juZsHe3x4WHh3kttjBZNqzRSNzru2Yn17phtjig9BGWFURCURb808S3Oicj6EMzWNvixTmoheHwkG3fR7J1B7DwaT7+59Eqrtcs1LAOo0PmqPpQS+g4kNY7b3Sq6fAR6Tpn6Np6hh41z3jEDtcvEyZec99OS+K7Q5eg0DHWcFNBHb5Jb6r6SO8oqu84qKVSQTbp76C7iIgkZU/P2d42q73T4S1WsVjgUf7TwjF7VFcn+Gz5xSvLm11aZIrCmDpGS1W1vU3Glip8OpUBRoWZlitRZ6lbR+VIkUqqIw8QYFVSik8oqYodKQ7rTytpLFis2zQx6okoL6YOMoL8wFoM8qho4rMCxOStk0U6AiiOqjxrKnXloF/uut8ByCjVYvFUVJMFgPltfbHA6exhqpmri1Ai3gU6MSQV5ihVOGnalIohtcKzqNkKg1UTuUsgpjkkwQyhVU2qX5eP1Y6hBF1w/+BCuVKdWerSK+cHoIjsqUEQ8VaWPbzLBT+tRgUEqaH0luJnZ+5eaIYKig49DmhVPsvbh8YsNfEomCYuDVjOk9uJPEnX0piZnRMqoxBwcrUWJR251ZHypyCoviGrODMydKlkvtcs5+KsZBw1wyLBYWsqcWod6Y7ME2P+v3mM16KCjjQMlS/4TZXEQXR0PU5Toea+Pdm2OUpqnwQyRoNqMEDP1swYpO3pCP50EwbTGbH0mYPrM+r9ts7ubbn2SkQM0wmy3tzJLZDAtTYRLMms3mgzZWtHsK3pNdArYO1y3jIuYnWWNj9SJRXeu5mNU2jY21UOgJFhB9Wq6AYdWk1CAmebOncIoUk6miYzPdkU84NpoHkuAQH5v1VYvG6JsQLjly1WZmLukqMsPjDI3I1J+5JrtHkxixaOFC7yoQs81jYzUus7VeAJurudXm7abo71G6pByaYd5nmEqupU1fuoyqyqaKzPr1dGy4y6WI87RHCmQW9DSIGsaqFGagRRRoElHBGDX4ekmS3uRyNJaqo7dstIyN0VetirH81FReWVviX5x0FgGo4vbGPnpLYCJV1LPUQM2pCjo6zTsJcIh7SlBONsqRpEyNjVVGcWck7WNjo4ksI+46FI6MnQ3ywgwWXmcw94AbQiSlBSKRjNcNp/yjq3dZz4dwrFNNSxhB1WTmmYWenF1OXsYsCW21+flOdG3l3GZbZT6et6Rk5eyIQ7nHpC4ZCVQfhcKjSOkrUI48o15xmlQObrAtFaZ0qxlpKVDbkjmhvNzcBvtTagTZH0G1iJhhRlRIVbBwfnUifmEMtFxEra5RPakQ7akdI6WcJ8GPvV4ilMoHMtOgeSkVSqHlsgC/KVkndIsyXShZt8MyzgYl2AuhYLEBm6u0P2GK6VffnhWRoNMo1HvkMFeKUx2RXDqRxOTPyKWcTfmUHhVMzvtju51MDdW9xdyi3UQLtO9n0s8BECRfZSqSNRAJ56ZNChGMvtBqYZgUlTv0SNaHk/Hkym3YS+J1YluXlgajnn0mq1S5srS0m0SNpDmUQq5cwLTNGs1CXXIgzJIqo0tRCWER9GgOlHah0JICLT2h3uEwJRdVabc10A2mxpFzYMo1F7mOPSaTAxWExnErKih3N0N/wwEGXJqITRo3ybkYsyjiU9oKSxdT6IEOrlDoiRLAmpCYizzJYwBqkdmU7DFlwHjGpNFjMtLH4GWQqH8qddQSyEvOZPOL5/uakksVTEo7r/CF4pyNvmChx5rmir48d2kKlKk5zWZq6mZEyYhJTK3t54FaJlxIzaqzR9ktLSMrqaltRRaZ4EC6t7a2Q1ZhaMlY6/XuTORpJ8jEaerZEFQ6w0DN6yRWBkCNOhSUKZgplGSe6LVsrn18rx1H0Vdmlkmz+1Kns1cVsqx94pjJSs3PdFlrU1PrIdUBspeVmtqOQ3wTUos9tbT6glSYcc1JzmTyq3T7ZXt7PdiO7A/UBdZxhnIuqS47GiBP6VHB5OpRy5mOqdTUEwB1ghZY4JJOFc5wq22py9jr3yDja2sq7PXT0oPkddl6UlNTKXSttpmstqJeaI/1ekWp7mq863BGbThh+IqD2oPOHlv3ReqMrYCZEY6lpi7o9sIpMM4VHo2DaTpCEvNO1w5hL5l1ZpXq9/YOsyqKsndq+wzUlKco1W+hc9SkHvNkTWqHPQeaOHPLJz71okC8PwHZlO9AOUe1mbpMLU6GSTGrn6stfqJZxXnxXaQpNZWOhmES1OkWUnv2UbKkiJs424TWW4dltq92Jzta3SKc+iGuAfUCM6JXwCqk+MQl73TgpFEcDH9px80aAuo659ZzHiVV3oe10WsFh16mqshRff1JqSQSX8MbWJ2zyLQ2wwrdFK+CHrzQ7YLRrvPQScgFZA1FBntURnbgrmw3JEd1RYy/ftXlWknWwkRaFhj7STfjFU7BNSbMopaclmhpTvVifX39hXCAUaXRBz942rSktItGMjnbUPdUVqHLry7kA5gRs8vsNpOSlFwVBn1n8j161KghhPLINCbhqxoA1QCtPGBNfsI8koO7rKQB2OUoaaKAmm4O6fgCqKixorUXPf0wVBfk1UBSq7AuWK/I7yVQ/XI/BnRlPXOoXK6v77I0RmN6PgzbBKpywBfIZp9SLoluukedmIw7hg1dDQUqk2BGVBkMVHcSuU7q4ZTNkiGdy+VSwsjIoGuzftqDWoWpUH6B+QJ7XIKb0cx/NhaOodcalyTolbgHBUw7SWMPbMO4BVO6wehkD+f2OgBUEwXqglB/KErNxmH2l4rTEGoYqHMBSrgRAOr0teKDQGW3HAMDA1B1Yi8T7PE6lDxQjYgbGChm83T9UBJxL3ovgUqVfkNAZSqJUkMeRRgwEGr5QGeRXguta4xfsLnYyIaAKueBivpSoApbXQMD5TOMSkX9EvpSyEhcGfhlvfw3KToInLWG9OBGiHDcV7NXw+R20uQhE7HUeRudu6NnqACqJwxUew/ylAkBVCWVzwqA6umh0qoN3UvKMrEoAlTIVDDQy0jmIJIJTTViB9R8K2jCMF0CNZfzM2yFdFnRXwT5NfYP0Mc1TC3oCykVzE0MDFTb6SyXWvGm8tuhQBXQOSqig59lJCTn0Ze5HKY7e7NyfGBgMYtJmi4HwmGhM298wAObapFnq1B+TLNOW9Hu60BdUmICRUnixitMsQ1AJZghYPcMz8JLoaFwjzrPlTFJGWluLYBKdd2cZeiarPPoI8qczLpxIYNSApO3Ss4zMugdiaIQUMez0agOLqQ1TOPLSBOe527ao8KcMr5+zEiSrZQVFBRkFgKopBcD9IDaj4g8C3AEUqBnUNMu6pI6zQVlfcmwOF0lb0WNlgHULOE5NGD3aY86G3ztcqonFPQjuRxmTz2VAsmtUURKXGgHbpkxp6BgjwJVXNKFfiUjkRmBPhteMjICudTKa5kt1KNmooBb6Nye2B6ZOEf3qKVteHsaIgCqsE/G5GyZUid4bc/UDB4kIX5PdB2S/Axepj7IFDZnqY4v226sRoIBkxO/zmj+l0DNsvjRo2pamBkjnoikfPxEqGoCNS5o4614C6r4ZQkWB3hT2lkqZMRl+nNAlwVQKXYTqHJVFRnTdp42wy9plwjGz7QFJ6skVwGdYedJkTKfz0t/BKsjqcjL6/heB2quI4A0qV4AFZ/bMdB2P7P78woK2mogz5dCE+75OeFWinn/WHlATTAW+RKZJ2Qlo5raR2WsmsVN6KPCqi8eFlBzQjZ/3YquS3NDNrd31N/G1pCSs+150k17syDlaaB9asNZ2hUncsPClFWNb4LGTZU+37ppEEDlVn2jpARv7zMWZZXPR8GlyCZDkfwIWCImFCntr62HPurmtoZMokcVGjrPhcnO6c1ujdU6mcgILuSG/oUJ5QCT0EjcVrzCTTNOX2Xyss+XABhU+g4t0vMs2K3M9vl6cVbEEUz3+zLMZDKXaJY3bUSfgdPqCyeKcFtvItG+VS8t1zRH4o6zldkzJx4y6xsibp9vWNqYSic105NqssdUOlSVvtwish9Jzzzi1F0l0EcdtmpKR2R9UuNAs0ZvVSmpji8zSKh6qCvqHrPNGl6bNH/PRcZ6ajfUj9KnpMYOX2WDQRHFtUO555vXuPAmVOnD0fPJHYW+XvWoz5eE+Y7c3dLiIK1+RYK/l5z5femF65oFAawxE/8SUQ5Udljlo6Jkc5fPN6Fpq+XkW37fcrQuwQnnzt1SyTHpTBjFnK5hMvo5SnVc+Hy+ucP0StOGL99X7mlzmkoyfJDpbFT1HtJ5qGpqbpjIHFJttY2qVBvTOqjMFkBZk+gX8LAuwDipqQz2Udthsp9s+xJyiHJsjqNne0ToADjKTiZUwx+kjFFl7JlWUeouFvuHVCp3yYaWKQMnJGsDUOeLOOJuY2Ggl6dt8FRke4J9a5g/+lh59b6ezIwSmxIrBaObAAAgAElEQVTzsPkkJkvTiMN4d73sBs98EuOVJKOTumewckCvQ7CcWRNk6kcfEqQnDDtEXShAsE91VPX1tUnzmmAkTFqPEi43XGrstRivvdmq/iggtTWgMACVkNwNlR01LMRXqFxjEVnFk8HU7jjwaHVkRXGBajfhdnyKNGQppxqy5h68OpM0lRof5Mp8cxwxraMHuyRBh5Ek1/lkBb5FVdchmrQgOaUtU6miZS9Z5IPaapf4K6o4AIeG7EMBNqQoS/JwfyitDqIGk6NwrSmG6RKKdCYVJmApzTOhc6ZWo8AoyKXN666AMiYxuVWqGKAyuVSA5HCK/gL7xNbTRg2yEmnGZRMe1IERIJbyqPqooLIlpMqobWkJKUI4WzLwLGtbmllRBmAQRWflrS2SwpYKdn4jo6Ul5xrLSNIU3ESMe0jVUimgc9QcPr2IBoDoaNJMcDJEDCkyUAPvWU+WY7Z5jD+H1tufUNZSFiXTmPRhT36QqZZRhNjjDifSMDrsCcrgqKBJ22hQS4tPwqR2juDZvIlkF7BHekNEOjKiSXlBGeFlKpPKiFIFZRhNrLelpQyzn2ZkyaE1wve9vpYMzBV4dVKIIBqmNKe3xRtmcEUi4eDbrgUt9FlHgZQyEkItzM+Cr5bqBGvxJR8uqGFIRklBGR2eRz8EUOS9KN+pBae2ltSUq2XxN7HF6wSfllT8xz3iZYoWvQK6SW3z6cVGn+r+DCJN6ST94/4Y9gm1dVY83lcoyFO0orSMz9CJbn534/h415VED+F9hspHFxfMpjhwCY/Gozrd6CRvh/u6jvD1kFta8pyiu4XbmxVc7watxNTJ53K53Va+o4sJpx7eggX9HjtzUejWBY0lXEv0GgO0Brfb5R58jTWIF/1yJMBKxJKgZalL/tQ26W0WWSX109MzJxiC2MoqQc40nSa8WYTWSCQ3TRDerGrGa3OTBAROJx2sH4ruPRI9VIH35IN5Kk/isyfOe2YJJmMznTGLUpeZk5zPrCLL5wXDa9PJS6Z3OZ5dJfcubm9d3KFS/ZLeAp9JFOK+3Nvm+EmJiVP0heH5qff8fDLEXVJEep6JUZtJSVeNIzO88MeLI0pP9DLUvZmC4fgdidmUzK1zaufnKmWmuR6yR7nK/o33n2pg6OS5iNXeBq3nYJdvk9N9mpto0mhULtwUce+wAbtOWBVMfQdQE059N3DcVNqlq1HhkvLZoG+Jfn/9HFS7J528I1uOxeSwO6Le+ARJwWLmOWxSv9EkSwgSfZ4kCTcqFvP1Z3OOqDoZJVFdcMVK0nN0dFRIQyLaoZRdlIQlHXqvKIFanWYViAkxoFmeRgnY8bhOvPommCUIGEFCGxbSsNiVkMCvVLGKcJeAAtOnYhavxPXr/uvM+JAEbWL/3UAV80+MIKiBGxSXhEEZIL7EhCSfK/RQicfW+TpdLyvhQnfT0CLKTUqL3ofLcWzDBmwxdqlwtmCkRbH8xAnBGrG0ShAEjRWF6scISv2xqWN8U8K2pKSkqB512LbBJyjcsTfHpHzjPAdQR6S0xohqn0Bh0osa+moojSUN89eamgA+oD+xEPlFFVOPoE61eRS3qGIEJkLIGWCTcWqaHKUP5HBNOVhZowThz85vMJt3JIwizaw3X1CsZwa5+iOiyAiG0Dsm6oIbypqiY7UKrrpIIrhqj9Podxls+qmpl60x6/ahElyTbTaruxhWO+apHktEIkG91Wy2UfM0gmXK1wmjuyD0ImLqz0zHz4aYNhHKpJTy5ACqbIr3VyDYyYfyP+Ja+M+hh5gyNpG8VclKlqn2pll/wR7y184OQIVhpoKWnPKQuIafIQo6qLPGJ97gr4WMdk2qPoKbglVcCEeA5hPNw2WKAoighOzUNApbwXVJs7VlHKKnTIshkukokTLH5rQs1PjgrCRRMD9ZA40o6O2Nu3K0vTVjKV59Ab1J03zFaCGgfBRTk4f92ppJ7qJmDM0NE85pP0Qcmuw1+2QyGV9MVk3NcDjBm3Pt3cH+g3pup17S4PDs7CSXFkK1xzCnk0ulFdlCwsnlQljw9OuFcrmcuDq6OSJFkNrHiJ8guUmOPZAFDTayyLiCYfk9JxK118/45WahgX4zpdCX7FRL5cDLHtdJNUoPIzIYwZaGVC5VJTBOA/QkOelSRRJsrcrl0qFIIqjD0J2S8irGayFky48ETVCDQRAhG0ymm2vs5/oBhG25YwfnWSbgQZJvmznih72mJRfBpq9kXUeMhe2EyA+SOqEeylVXUvZt2FKFBr6UyDfFVjDjA/lyi5/QDRyci5dRTa/24w3Um5K5eAm/JTv96j6aMGTNr2xnScfPUdkRpQ4WZcm+xM15dkzQ00jcPdDM7ezsTKOvvDBDgMYNiWBjT0g3hqKAKtnmBa6iQIUCq1yqK2QXZqj67ZNavkb8zzm2gSRibTbROc+lQtyfNCfdWKo2wkDsbp6tWdCAukUhu6qcg6ppco9oHJwg1fUIKxwViDgOsxKv0mIxWRYVjLcXO73J1Fzym0azxLAJyQg83U6xpM2yxhbKTwT5WZv24vRpUp6aWlBkDKxr2qD4uE1aMxvIKDRMbZtMrWOxsCzfK2MSVMrROSgi1wGo3bOz1dKwBhhtKGxP5WpXAVTRYLEkoYOOL+NGbUogm9pQDFPKLClfTt20e3Eea3VZ6qMiXbu41naQmpo7Fk6Cq6BxAAfXO4z56SgN88LFlWVxiX5lZWWcm5YdyGezUobIBMu09mdIKlahUdtuPxUVXjj82E5jlyhQGfE2eQSVtNlUxYxypKL4iXqW9jtNFKhMUpNyT4Jjzy0rlxUTP+HGV1aqpYZiHadaWZlVK/MmTSvdpHMleXraRdK6GL+ukfbKIaDiUQi+TFWoYTDVubOyyeYeOcX5S1R1Mt2IPp7SCZmDdqzbJGtXu6ayYLo3Cqg4hLs7NdXXjmRLqGHqmdDLy3TWRNIic5l2rpEd3PceCqcKzNCALasmLc65vSLSuLy5ssyWWIwwiOqkLQtSuqd6PfXRpHREoi1u5dZSUyOcqI3aw9T1M4yPXmH2ykqjMl9sTd6bnWkQnkYYhBm97uusJZNWoV6ogWriSVopm+h2pG0cjqwKcBR8F2JWSM36Dn3CqLE93j5qpiWHydDoLGq3uwkqaFK3C+rtI9AwS3a7k0eyotropy9TUPNjZA1YDnfLKVD1w11d4zxDWi6lHVshNJ703kq5gU77MhdrGGorL5aKHR7sBygJRmKJX0kogwz5OdIImrTpathHhYKpupbpNMHlWRMz6fpxq7smqNgXBCqjLaoW+6mG/4huuqurz6HDEAorsBSojHjGviZ2Rb/7wTQ6QCsqzhcMbWkx46hNToWZSR/JYBYNkkGal50iech6Fag93GhIBHV0UyM5GqjQoN3Dpsa6UbYO81tQ/4oBasRkLK89NUWBmlzqdmtgE5tWkieRqnFBR6bODZmli7Tj9JMWdNRmazqNZUsIOQhNmfnUTIujAg7JIt7ORCVUkTqassxLQS+vOnkCoJbWNLnd6ujPNKLTv0536Mu2edJZW1t7Pr7PputLx8cnlPYWABWDAg9UqiYcBVTbNJO6OQxNKrfSv0vMBYH5R6u10PyElIh8ImrY4YHah4/7Avbk8fVxelfGy01ItUqlF6YdaheyV+qlTwKlpUbZdaCmmzpqa3dHx4F85pTT0Pz1dKeKklPd6D8YHx+fhF3sQ2qEvQSfIPKmcEvaafySnD5xKEOdZuSBiiQgXrtuKwhUptDRuWDi2vh0/I/INCAI+qhBbswKPQAqywPVIxik5kyZdg0F6oCLPsYgSZE+FZeeIhoH9TqJlZjHYQoesA32qNijDqqfkVOWByq1j0rThugqUCcFxWZD7fnOWCWm+ZdUJYcmjd52qtBXU0jKsgHUkPoogDqX1p8Sek74HC1qWkeGIl9midUswaOunuQTBZXRKVBdGiUko1mIZhFM8rp/Q1rDmRYrfV1PaGYLHX5IOc+0DqACQLJuef26MgdBx5c9qjmX6XVUavMKxkhHJWcKPe2+7PqCvLzWmDkq36PaipkTeRuTeEagEDLempXnGxKiO7mkRxxG5g6NV+tOa0OgzzwjDgK1uQrFhpI1O2j/xySkoJcbhzbTgohJKloJRjrVR6FUuKS2HAxgjprvz8vL29RZacQjHX1To8qYMPCH3nHE5odSbEFzD8JkVr5HhUVpzOCGozojkWmP5kH52/REDHxDlNrlTg8DVTqFqCklBUFu2CyupMhOe6weJe1RFZ01UKHNYtrS+B7VEgCahgrZ7EZUKy/Pn19MleEh0wNaSIiCQC1AE4dNCrylmfPZxs5w5OU1hyMlFmL3ii+gkou3QSirRoCaNuct70+8TIvv/njtCdkQD9S5qAjqLNRToKJAr6YO0xLaow6jdgUVaMCbRYcqm9ygqk6AYbvSEqiIlZSKC+XJKlXDjLoYQFWrVGnEKvCW6hvWVehkE8pJUa9oUJ59UUNsI00qjSZHtCM/9flOVScQeumsb9gWBdSCUuL2O/UkeeOEa1QVASVLzLjccOKrs49F5FC8w7kDNTPK87JFolmcUzlgYzzBYd4dU7lDAxNNK+gv3/T5ZkvGFfXZumn/EFWaG9fN+nwjqlXFhbG1zncMHbgd6KNVLlj0CUyNebcixefaY2RLqkb52lonbn8S3oq2cQ/y3Nloq6pokulSqXRu1VAhChjFAeBROGUEDY4ln29bNQf75ftQoZXKU7tUAR85SVrUB6zEolIZ5Hh4dlUlSoNqQMZkVVOzk6onjKwfIlVly2vSLXaqdKdWlTHpapNKZeRa2G3NNjQ5d8014if6wbIBJUnjO7ygNGAydsU3q9tniyfsuVm+NGmfolGnmvdtWlXBp4lPplCRzTlqyLdQ37jkmy/VFDBnjRxu2iiTPqCsZjaJW7UqCXIECjUa1eRII3collUL9euqFTwxl0RruKbStdROW1qchSPCzdqJtD5fpW9kOzRIXKZ83Y4JIlfppd0JqEfKqpoQ1x5eppIthCtvyGcKLNDntQ7kY65dTV0tTAV+F4dh8baziQZYrfgYJ51XRDSfBLU9iXL7Ukb0zBFStY5X0tNhg5DYrGqcxDFL1wakrfzoGGz9FvjUDODnQjtLeVpHoX7vG6IuOsCHqQNApysU9BX3UQsGKGlFDlS9oezdy2o76cqDzVo8SwOIEJrvNbAeXko0PWH7qOp0dGBtsHpL+T0CD+KwruOTJ6h2W/lOtVlnpniNkHOCjoKlm4wfdnPRhx+KuohnmqjrXfKubc1gMjhUMvypKBiJFfRUFBj+tT5hmHXK0romYOd5h9VahjOEqLPBz4SaaO1i+oKRpapIiewywjTqZuYI17Fyi8NVmwddccynooHKDCnL/EIAVTxKRQKZFlIrvgSTXohliZmDsz9yE4KmhicKGdkEuLrt0WOZZBvWkqFUS00PPzrDT0ktRQH0UN80oJ5PtLPFYd3JtowMdDvpQ1m1/ed0OE+IblNEnFddosqM0wW8dyRmZDRlD1B1zzAVZGdDp96Q3QrDDzVLAWYY/cK8okuVfRaRYzjtlWsUl3BMZsbAckYbo9i8qPZKThaOYKQ2qWlydiwTCSS+jCMUwOShxJkhaq10E67sbMwdsnhHdkNimA9YCzoaslWYHbLD2cPhkkZjRmGamG3G5zc8sIszMqBBy2Rm5GlRg0C7bNWWlJ+RUYtEOzz7IRkznG3wUV5P0UgIF0cLoKRt4y+Rn4K2UBJnVkUiJgAFGRkzwS2WcJrcZVa0j9OraIUyZgowzRjJPs04tNK10oFi1Ggsg8qEJ8qrLnsIT2mQEnvCrtA1BW1MCVwMq4Zr+3eq/fR7ofnxSP4rqV+XN1qX9LIOaBttHrtvKN8fwELps9CVuxQ+ZD6WxZVEsZF3+cJ1CV+RNsrJ5+RPtQ+7ggXRSoDCiYM5ggGR/InzO9eAyrO58cc5q/MHgjef5x3kfrUuN2a9Gvhcma4yCd4wGgp218V7PeQaAz5jWJoPU6frZbycEHYS61Uu+o3o+0B03Du/d0N38OLFYZCP05sgATHovdGwHNvrG6Yz9ftRWx+o7X5p46leqQT8Ty6nPa+03FdV2BUd7ldVbLyc+0tAnAnCpP1u6oucQ3x3wnhsXAIvQwKKvic2o0bTz7/c3lGAH6v2lPpqQ4lEHe/J7DXU3vjltUpAPCs3bVWYCLWRAZVRdKwsr2qJHzFVIaWEdRk2oWyQX96RDW3QIOwFbqSlwxEH62u9fe9P4bXyg0SWdU44nOJAabI+rViUanHwpPe24mrG/yUR0+5xWLIgFfGqUIMQl5bJM8kn4fIDxDJZpU8GNDMimcx3qb/8/sgw3tJXIIEmepYxOtN0cb3dU3BidHTCLAhP0sATjjOZiI0eL53xZIcf+tP3ONusUm7RMj67VAUd1UosqBuTHY7kSQUj6DZ5HKa08NzgFdQ+XsR7I4GJIFCxV1NObcRmnpemb2sOZuWuPc2SrMSQWU1690gNxCFw83NUQWevuLAwH0N/zYC2sLBQxLC7mmGv91CeKq4W7mZ5+0k27VzjFJfAg0pgIAzUeuEqZZxnKiz0wPjeoMCzyBqgf6rLgT4qIkJA1ZbDrDNPG9DIp5RqH28qKXKQGXEJOe0uUhMh9knjFJfAw0qgheOHfmzBwxo0qE/T3mKUFdh7BZ4zNnshqbFEvCLHhnkYqJVuqKHwtGHC+xeoQto4SamX3e/HZXxyBPoCcYpL4GElkKovrxTDvFVxi9IKW1dJQ6ViKOSvKZsF7jomuzmHJKev8LPTVFNxYgFONib1WcEudaOfGggDUPnPb8W+WnHpAF3j6vEjXlLZEp+qPuydeq+5AVKnZmHnEylseW5QnTaXboCds3nXSHK+x9bsPsghpPOANGZWG4wkragaqjykyJJtMKxJYKme4BDy1ZR8S2NLZeWacI4tJaXLlX02N+aoWgcpT3qvRRtv/ENLoHhHbmqF0UM2b9FaAq1gqDMerxFlloc0kBWF319Q7M9JtEFB1U0AVIV/xyFUVZfhLHq/33+21p7EeM+tBpPQ1MbmQf0yjSjnAX+t46XZyH7o9sf5vS0SEDUHz2NCfbVl6AYryvJTyypFzWWFZcHXJYzkfgQklvXwTapoD63yB6cANEyS6vfycUxCGW8gVeKvxHpAMCj+G5fAw0jg4QD1cJwepmVxLu+aBEIIew6g3ZjlxsB3TWbx9sQlEJdAXAJxCcQlEJdAXAJxCcQlEJdAXAJxCcQlEJdAXAJxCcQlEJdAXAJxCcQlEJdAXAJxCcQlEJdAXAJxCcQlEJdAXAJxCcQlEJdAXAJxCcQlEJfAK5HA4z/5zifj9HIl8J8+90pu5btcyIc/+4+P/vsvfiNOL1MC//bXn36XMfQK2va5T/3r1376iz/+7Esoik2Kf+EYFuvn//rbYWf8+uwSePy73/vmF//lrz787K/cDdSu/egDU+5bTk5j41zWfRO/4+k+/9e/9Y638CU276u//JeP/+wXn33MMDcClU08ffLkSQ6twLn9efrGYXyBPvMS6/82sf78n8eH/ue7X49/+7s//9q/f/srgOnNQBVvWegpP6c0/gwGDO9FEklUsuJHj0xb1C9OoafpiZ5qLjkq77vm/Pwf/8W71qRX0p4P/+lPv/TR3/3sC6HCbupR2+ya8lM3PWk0/fTwgg79BWs8FcApyjw5LdRqcSKWFkQNxtKrNm9lDkcVaevXThL5LxzZ7DJcnYM2Tz4rWTGcFb6Sxr2JhXz+j//pTazWG16nr/zeX37wh7//Gb4z5at6E1CbpD4FkwugsiM4BB1Dv4Se5aaUknIxox3X6zQ2m76CeWQzGY1uP5vgSnbYbDi9rFXca3JoNEAmOGdZxvH7BIeoNGpFJpwbSEsTOx/10Ot7RZ//lV97r9r7AI19/OPf+MMv/uXvxSzr3QTUZc5aJ6pQFTNJVkejDUAVjwg5ZdWY0SVmL7jDTOe2sFoitlr8hYFGfY7otNZEOPf+/liteiUrtU1nykVdK/R1+E0dUdsqWABVfgJzc1XrDtL7AO14u1h8/ld+/HZV+HXXFoumH3/yT//kw9h63ARUrYfITQ2PCnGGanpFMoDKyHr78wX0NOl0hx22DGVTi0yzcrinc4kQIFCUTNZSkKrHPmo0YXqLcy4Zp/GIFiQu0M2JEpJL8wSCugY5+uX3D6g/+7/E9AxUKnG6VQKPv/r173/w8+9+4lqCm4DKFp7v7XWTbhapj2iPyohbYX6LAjVfzfsVicwxsXiUOqn0EYBqNKZTxhtyo1QqTRsJSBi2Qj9KgxjxkrombdZZt+6Rdw4RovLxoe/Tz1/FgXrv2/34s9/75Ef/8jvhF6jofDcAVZy7gLf0iv5sCtTg8pS4JA14BVBTSm2072TLtCoyXwwaxsGqouRZnuWMpxYhKZIWRcuphTTQ7AxTjLNwdS4h6VytwLm/7x9Omd+LA5UHwtN/Pvydv/34m9/73cgLVHSWG4AqMklhDT6puzwMVBYDuUrGtGVbytgpeflmR8eRMi/DdtoBmjhhJLmOho4O2IjrUR4hpMsgdAsxyKvHOuhRcok6uLn+QxHTpSED7+FhMt/+lfjQH42429y//d1//vjfP3WrrG4EKjc/M+Um5Wzt0tGkdPDM6jwiunltNyEegXaIP5NDlcWcAoCguboGCkvSianrefBUcurlaRdQB1BN6wUinIetIWr/bbV8h8P/Jg7Up9/dxz/5ty9/+e9/9uHtKW8AqmB7f7F/ZK8vwHoHz7r7+/u70/vw21Nx+mRWwkjamv1PjnIXrViQCtJ2M6UKWoZ32YDu87y5ud1Dppqbk0R1/dnSogBikgBzUvIedqjMb8SBejv8gjFf+a3vf/yH37h7ceQGoN7NVtI+0I0zpgkZ8vG0TQ4vM5y26okr1y9gErfV5QnY1gJsCTkoxBEJJXCop4PT1sv074XjH+NAvfM+P/7s73/zi3/w6ZteoKLzPSNQJf4hOtDbpltatEE2M2GgKqqqzSStA6hka09JdgFTWe2gOCVkMHNWTTSrLbzyQHTh74X7F3Gg3nGfv/CtP/roRz/4tZtfoKLzPRNQ80+7pcSxU1dXcMkicyUE1DIrIaZT/sAYrKuq2hT7DvjrKAUwndXUv/7e1Deed1nvV+f4tz++9QXh1VXiDS3pE9/+h6/9w7e/cp/a3RuoIu/6tklYVD5dG404bymZxBRUUTxoU3Z2OfmopA2lrqauFTAN+9WayfboXPep2O1pxBVP6Nrus1LZtoOcP1wt7l38f8SBerOsPvynH3zyi7/+rQ9vjr0aek+gylJHpMScXS+IfR1KmZW6ctj8hX6p0tgUjBIX90snsm2cMgRTRjsjNZ3HZrtaiWfyiwMO6dQz5aCJZbkOIl/jO/xnzvtiGf42DtSbBPiVT//lF7/5vSitk5sSRYXdC6gy54aSc2RnCaIyUqdkm9tTsFkmYHhZEOqsUs1EPqZRtnYE/WJvg7Q7SXIl41O9IqfzaKc98YZ04nk1UV/cEHFXEJu+LZVbq15Df8owf/nn8aH/6r15/Jnf+MMf/uqngpqmVyNv9t8DqLJ0HFdsz84SXeUgORFqlhWbNs68FhzkkSCzH29PQsdyCNPigI2z5F7N+BS/LLFsQKnkoHCAba+rlKXhLFVXn5iria74ZR1mzrBwrf5XUr0k7/fjQL0i2S/87O8++vLff/7DK8F3e58GVDb9aEjDZR9lQdHkCmUtKWebNzvlmghMmTq8UqHDyw8N9Rimibnw2Toy2daQRmkfPDo6KqV6hbEkLmx4ZoaMdlWpPHTGMnp1vp/HgRot7Mef+/a//+Y/f+MTT3/Pj851s4Z/VIqUM2w2qW6c28kmyEj6hVreWRcBYl05utP+hcuADTtnjoqOYnybM+XRuhwFZlGEeudKrwDVeWgjymcdwX1DnDI4gZYNH/U+Y2d8Wz3vHf7hT+NAjQjr8Wf+8Zsf/MFf3es9P5KLuu7sURPHsJ9kneFVo2KzMeKsbKHt9ELdWRfpalPGoGCt2bz87iS9ppEMpF+i9gqHm7xJY53RBfbEApXNV6G/Hnq2IZytbCVBnIpTDUoi7bqp3JcY9tXvxIEaFu+H3/qjL37yT//pw7D/Wa63A5VNb2ol1p3Bm95oGMEJFvOFys6OS1RiV/+CEGlDpDtlF4ltyf8MlWFz1zipbveyQLY3Gqhs/hpVJbCWPQNHbD7U2Ul2H+2Y2WMHkVavR1X4mRg9b+KvfDIOVF52j7/y7Z9/7eff/e1nHfNDgr8NqJibWojUeotanqCa7k85DrFNekmZa4Q0LERCxMtKe+6zdKeZW0pufCM1kmVDGaUcIB7VmyeA08rLAu/hEPtq7NIGOiKI69bl0u6MSPd/j9wPkuRzX4oDFYJ8/Gs/+NGX/+hbT9sovV3kNwMVMMXnJavFEdhFc2CzrMApN1sYFciWNRAyGUnPZnYrOXqM8b0psYHYo3COLrAzAnQ2v1/u8E0TY8q9+SFh0riG66yluwPiEyG3VPzqYcown/goDlTmC7/3l1/8zm/Qz/Ofm24Eqng8GZ/jBSKwi2XfZaHdaV3MINquJGQ8KoPfSMhUlD+Ww02+SaLriA5n5/iPr/ig1FYTWUnVlj/LRmxiUlI10Uzzm1jAqT7j2ea20VV5EfeP40D9zG985+P/+nvP8QIVLfcbgCqu7JYTA9Xyv5mG8VEpWfFGR7LzHmLvisIli1G6N8ofnfhmd46abMTEDKsNIb/4JJmYO0RMDpl6hi46w+0mmi4+g6haWJ0aw/zVeT7ztfe7R/3wW3/30Zd+8Ccv0pnyN+saUAtbuoWA6W2jpCSjE72toSom3jmhJOUVkZvPNqnU5ZvPhNN2l244OgO7om6sohyzOloNcmsHnouEcXV7pIynuVJOiOYgwKcq7lQvZD0t/cuK/+xvvs9A/dy3f/7F//Ttzz2AcNCx2kIAACAASURBVK8ANXUtmcse9MfAMLoUwYyUcOX7MaOoOMdA7HNBTPBp2V452b61Q45mF3FXkdaIB/PTYTXxI0CUs0qIZUZA4/xk8v4dakonKeGBjq+2XPpDngFl8srp1/7zewvUx//0iy99fG+tk6fcmRigCsqMRN/Pz+puzlZ4zpGrd108JiclGVHpxVPPjlPGryzHh1phYgNFum2trCC3gTP170/xwYpV9Q07quEcsVe2pzU8YxacGo15sbGv1Pcnf/yeAvWrf/WXH//Zf/nMQwk7Gqj5+5xlJuuOXqvARKTZPbFFZz4SciXRWkniAscz96foQmuIHTaEgsT2qUlTILCCpdqGy/rskfFw/NOuKU1KilNZYGb4rJNTbvQOjNcM8DQ2Hrye9uFaN1gfCJHzaSyfO/4nf/0+AvXxj//mpx/86qe++txiu5YxAtTmRYvwTpgyFKcXVwbRxBGpfD56mE+YlQt7owOuFXlzAJZh7YshmlRz/aUcp2ztarncQ1WUKHNuznkttCoNb3udi4utnBwfdkndpa7bSMOFyLN4WnVRXLy+WF98vIxvvun3sw9DP/vv7x9QP/zJf/zoy//2kw8fRoJBLmGgtu/phaqqS1jcVMSxibi7JLExWWkctxc9YxWPCuVTt05xYzPH+jL7sBJ7SRr7Vl9udHVyw4YCYnNd9UlG9/aAU5OHUkPHJFmpF4lvpco+UK+bo8VyRCrFr5TjYEXDvbLRnMoTb0nrainP4P+L/+N9A+rnfuv7H/zz3zzvDtRtog0C1bekJ40LV0AYm0WwZRHuR00j+disEqLvjYHlhlw5Gg3cWCZ3+zKbuncH5pomiO6kKaMtdgrCjsiDU9XbWSQwgaWlWbplZq9JElCSVBhXrlb5en5WMd0UQ2N0q1YqDJJtZCEfdMfE/TrH6JBvvV9Aha2T78BA9BeiRfAgbgpUBVSkbOepd/ITDHLCs+gejqbOSiN6fwygutLUNc+LUzAUiCWSwv7WyhiefL0CjtbrgXxM6Cdn0DrosdSsS4l60hdKWuH2VESnuaebzRkL0YwNkBUqlUp12iBP7c/cuE+/T0P/V/Gp3id/8bsf3lPQz5Lss7/yfz8Z4ITZvF7d7RnzZjnXxpUeN2EZ/ak/Oo8YX0WboldDoyPv52an7fbc60nZHfLoemgkRNBs0g3sbDV5d4WTvvA0utgtrY8keR6XuPBki9KqLUhC5U5KEihmELmb8W+9Ny9TMBD9D7/5r9/+3OO7BfKcsQDqrM4+dvfbj6QtWVp6tW+SDQiJPeabPaxLKQeo/d7nJ9G0RnN2AweR2+O8naugedu+UyyQsDk6YtSG04m7ucEwZsNhz3kVUHSCtnRyO6Wh9ATQ1QHmRubf/eP345upD6F18tGv/8XDj/khqWLoFyUm3ilyVrGvIdWX9z+UUQScyueiM2Yeyrnnnp8GuQqW5JbUG7or8bn05EYYBAPnzY3LtCYFNk6fcQnzSmH2A+H0smhJ4vLh4aFVLbc5QDUymeypU4Fv/G/vA1C/+uk/+Np3/ssLaZ1cCvlmR/it/+ZYPlRbLuXctbEJBKIJoVBfFnObmonwWfejYpmy6Z1q2436+yKPNBCbNsbXXkEfI0m+gTuI6Gmz3ea2mFQP5klIX3iyQ/VxLRZLWi1e2qIf16ul/OMX33mgPv7EN/7wg1/9rYfYKL0qvYj/6UBNKJd6jhMjOahLXG2US/vSYwLTraTphs4wJs2dnswji3Tyxg+sxBfC9SsT5Guc2LoGvYM/cCAU5ZdbryV6uADWeTE3NzcAexxGo3GvL0Fy2ZFfKeNPv/yOW0p5/Pm///hLD7xoekWG1PtUoAaWpNLjKxmhNUdIXywqM63PsR8VzZedJPaqm+fKomTp1RlydE7qZmvkpLUyOrSF7ER7X4pb4J/d3nZjLctYOrWZdCNW//5L7zRQv/r1f8Wi6Y9finRjmN4FVCr4HOj5n13pzcRbwOnKFZw2kJKbURZT3O2exGP1Ta/7fAZRcrLz9pw0huK0IRbMLWTy7jwPFevdHh8fgDquZzTm1TLE/te/+Q4D9XdhIPoPbjQQ/VDCveRzB1ApTivGiXQo5TI17+BxqvLGBGZCPf88JuQZPWBgyL0tz6b89LaoUHgHPl29srTfQl7m0H+lPuz0ED5sVI+3XJkjMcwf/PRdBeqHv/MvH3/yH+9h3+yKrJ7PewdQYQdn10ykp1f60+JW9KeGrJjiMO7bB2NCntEDuxWLt3bI4nNhbHFXmYv92Vd7eCwBaEoLriZ8mf6k6VYd/fbwiprAX/783QTqJ/7bP3/xH77+cl+gom/XXUCVzRHypPkKThNg6VR/Ra9a0kkMV5YFost4qts57rZFvrK+lnxYaLlz5M+qFjqexM5EKI9tot6+MhhcY/2wAQG//4AUNRyLo9j++/ffQRv+jz//b1/+6D/+4nFUO1+28w6gAqfyoB3JqEpUwPCkvjkqAE52WUleYAtI3Gawjdy1+vRI6IstMNanaCQTsdPTYLy2Bjaum9rarnRxsZkf2icrqybCIV9E7/Hn//WdA+pXPvX9L37nKQaiH1qud7z1A6flZdF9Ay07Ba+441c6T3ZeyT3bd3zRrZC0jcvNdwJRZrDchTXtuHzpSo1C/LUdA9iqJ+6Jk4Dg2twxug4P6g5sNnIk+fIJ/+m/vFtAffy7/wW2Tp5qIPpBRUqZ3dqjFs4RU6RfCJVbOyDlrqHC6SBFd88h76h18aSQK/XfkYBhhoW7t8dL2iblT2L2HaLTahcWFuagWCKtdq2uruZWgC4VsaPTPaxb1JVtJsln/HTlw+/80bsEVN5A9C9e1QtU9G25Dah+WI88vrowWFtEpOV0EyiatDNcUZTViOiop7olBS5p6fT16WV0RvE+dxbtj3XnKaW345RPyuYNg/pUeuiagjRLFVlZWS+5gxUXD5qJyY8H6Kvf+bt3B6if+O7Pf/jz7z6LscjYm/UivluACpyaH13FacrATTg95Gw3bifdo1YpZ0L7/t0wxWzDob79VcrrehpOw9WQFM7P989UJ6sJ1TN1jVIlU0E48uGvgKpDupvJfO7P/u0dASq0Tj758R/98gsPL6t7cbwZqIlpxJN6dX6aNMGhP72K3jWpMGRuSpKZXlF/fsvm0g2VkeS5udmeq6VcS9glrL4Ny0lTLt1T+tMYdlB3FZVtJevxgQoHJVPlZHsKk5B4tUUxWZ7fI/aWy5PbfvuTf/pOABUGoj94FgPRzy+3W3LeCFRZGic8vpohYUh4A05lu8rx4AKopEyjVgrxyhu9JCROuXljESokKWtK6VVdl6tlUv8MmbkpGGGSCanmqpLsLUmjglmFov0EtOTQEXnyTDasEKfc9iREZXsOp2hIWP7/+dIv3n6g4ljyn37tVz/1kjRN7yfZm4AqWuKKNq72dAoc2UcPRI2lhG7lmogRjZ1uSk41RKnTYTPgckYpGz4dtOlPr05qeQ6BFZ3cfZ+1ghZVrKWfSPniI6kp5/lHb4m29uzsbF9OOJ2u9RTkvdrkSFHP6VIsF/2f/+//8rYD9cPP/8dHP/r7n7yuMT8k++tAZXNmuZLpa7dmQkgsOddCu6TmdKbtgCND7VJiak5J6dqVdwf7p9RHBqAWg+zRtVySvBMPUc7ciOCriXe5mZvH5sJdoantaupn9ouHZ0DVclRUt//o0fKV7Y1n5nclw9b/+h//z//86rZvrpT+AN7HX/n693/402/8+FWu7d9Y7WtAZdv1pOSG1SYVcVxZ5we/JKuyXtJObaa5nhAzj+MUnZpf9azHt6CcXC6XkovYglnF8pyOcNtt9+oM8Q3KdaBThoVPyHhbLOfn98lydydmTXiupDujQZqKnsA8P+P0//N//L/+r28vUB9/5nt/9vFzGYh+fpHdkvMqUGVNN+OUORnZutazJQ0Ra9OeTb5K305Cq508UNmsZaPFVH1RmI/l2LVQ0YnLPI268dZd9OgumEryJOFhON/suLaaC35s1i5nuqKFcksL7xksk2T6R0Y8dEmA/3q6M1jbeoEkTNeafx/O/7//8X97a4H64S9hIPoHz2cg+j6yeaY0V4F6xBF1zz05aIfwZTLHjWSJVqVDa6FTUyhQxUd60uBMp1OARIsm3D3n0IkA4Tj5o6ysu7aaoFuYXPQkCAv2kLsIYZYNYxdcxUdmYk2/ZzWfJVkm1lizRpXULIXJQQEr9BSF6VEi7AOwzwJXVuz/f7y1QP3cd//T137+7U88i/ReZtorQPWjP227zzyN3q8eeiflNVg8T6gQhSuZotM4T4WkP9QPOtX28CCKdzSOa5yvKI5CXDhX7FUCw6bB7jKqQ11eiWAky0z0N88IYhk9n0/spVtYztTcyQiVo63G0tLS3TNsdgUJK3VsLG5DD5eoI5TiuFTzv95OoD7+yZ9++aPXt2h6w32LBWo6ppvrN6S6KYhlloBTQ8EV2KXo5modEb2VU44eMx0kUU9Pz7V1g3BkzHWZkE0+IFe6FuafrW4N981Myt5MakyGl+5J6tmcoKRHm0PkXs0dXK7uyA1TTdMgdQ5nl/JzBz4V97/+v//z7VPz++rv/eoH3/z9l/mp3rPfr1igCgra2pz3ZdIB9csLdKexNCYdL+WehCGVbrJ7Y+Pv5UtpUus28hjFsENeFc6QTVz3Q3k4w0u5ZrVlDHWCSlWdnRqjJjuMWmLGt1M6onGQZM5kFHLJ5s7dNtD//N++9bYtT9Fjyf/r7331pYjv+ZnGAvX+fHo2GnTENXl9njiDaajqMvhUfhLuEe/PGylhx5doGhoJSb6cU+w0HNxrPeuZynnuxImoV8AZULTvr3U2nLa3t3uxJRto7yluz28uzM9pzg8+n+ynf/NbL7Q8FZnuPHdVnykjTtj5+Mt/+uIGop+p0PskvhWosbOvK6zYEbznqyevdadINkO4KDu/WwOXQLvC4iledg8KhfgOaexV36mn1OtZo7/+8V+8EFCvlXeDPHr2LjuGa8mfLeC3v/3zD/75u597tkyvJvWtQL2zeHEpIUV9N8iMqXBL9+9Yebopyy0lJeUuNj56qDtwSxkvP/i//egvHnDoZxMZVoA5v7g4uo9YsVU8REMe/9MPvvTB3/7yw4fg9fA8ng+o7FTpWMq1ygCFkgNy+ZZ/Lf72AG0tKLihFZXozk49Kt2b7PzGJ18QqMezs4MSRpzat8woOmZLZnPPFwVjk/LsxP3Z2VO+S8j0PBEzoicbLyYGeiz5J//xzXqBim7RDUBlC71Y5hR5/dHH8kXngfvKukw4theK1XsrK9cxzLBrs7OzzVv4qQsnjrpWqR2c1B8V8M44v/eHLwjUAzpPFy+ruRGmCvZbiZQrysK32ZoNNV4GCqicHnG9WCA07zCyBPSz4Xm84lneDR5/5hs//eH3v/56NE3vd69vAKrIIyxyMn6hVJ97Iw8WYw8lwbVxuReHSzlSbcob9pLYap08edQO4Y7ymWN/xAt5g8QfG/Zu+H7wzy8I1Mw0YhQl4SuFEdmBfH1qak1entTUOjSfq1GfTtEJgGTAGGCYdEfp7pBqgCk0PNlt057v7g5duzu3CvQLP/uPL3/09z/78NYEb0LETUDFoX0B5pyQejGTsLCxmQADqru7u1lM8e7umoRdWLLO08d2dNHSk7K/uxtBs9MDHI5k3ghUptC/KMj3kMUNEcOmr+3u1jJML7ju7h4Gp1stwhxeHukQ8rSY3cpLx7gmSU/PfIZp7Zsg0Ct1+N//9QWBykxW61sKzTO2ri7lFHpJ9qCLYQ5nOrrNfcGpUYWyD+PfCkfsSl01UyDEucSKCUIGbv36PLaGjz/39X9/I7ROYqt1zXcjUOW6R16sbNcx9dlyvV11MW/WEV0zs0q4xsRDjVKja0xlnOg9l2swGE1cvte3Y6F7ViaYGgt1ubGFZa5IjqRFeRic1s02h7SoJwsHVhGi5Bp4qLdYspBenGrlbGr5lLZfY8e4lmVUp12yj2X3lvj+7ld/9oIvU5N9Sw6rpcuRPzwAnCq0zsQE9hDaPgXBJ1j8qAiTezZl0lCY0bPJiKfLYRuuWDOQdC8BffjZf/zm1/7gr960RdMb6n4jULc3imalGlKX0shtJ+ba5MUJwyRDzAxwS9p6eXduTpU9LVW8MQL909XT00s7j+IBdKjzIq1We+21iC94bwejFqR7zDlqtedq9XKakChXcydIAwX2Gj/0pzosR4mVk7oRRcmFWJEgzhNe+yDmhka8wUF/+wcvDNTNYo1yYUuZP7yKdk7CorBKcChUc53B2Wibcgf4ZdiTsKUtxcA0e2i718D/BWidfOlPf+1D5H/j6WagLnDEmkvqiqVDWTVla/JiJld5BKDi2R3UFbefzHJklGHypOP+6JWoHKjJebSnkOT5Tc1OLyK2LaQXDehqxYyki3QnVHNNAsyu+G+iFnigVhjTAWXR2CzbWOJcdXlrhSjobab/+rcvDNRhrUGfcAKgpuEdd0jJ6crYw8P8ASm/PMguuvluQbAdBipzsOO1mcPvVLfL7vHnvvvz33z+Y8lvZ/xyYm4CqkcdcHHVzRSotmSlw6wZZgSbcr+zZIRlhuXJZvq5UQ9eplrro+skmLTinF62Y18lX44OD7slDUq59FzM+NVLtAvIICpmwIOJFNtnc8LfwgP1iYmfWjXNstkko5X0dmt84fxv5/X7f/eCQGXHN5PKz9gTZeommZUwifnVLglzeMokmni1tMTSNCpNhqnBzWEFEri8pXpuPTgv4GNu/Pnw1/70yx//7S/fgjE/VP0bgMpuSSvKWxMpUIWnhfn5hS0p6OTKy1UleHYzkwuwV1iYha4xoIwGarrV6ucGUgQSwdYexCXGmSQxEmIF54VlclueINVWrRWIxblkn5kw14rFijmMUxI21wzb5syKdB6GcRUls8wmcciJx2V8u6eozM//7QWBuqneqUrUCvbIZO6qurtvuK98im0b2g4oHnEnfSlMr70sKOYa+2jfetEB9awQB3307yAcS/7Db37vdx/fkeRNi7oBqLUeabEzneklVV7YdBrue+KgQ/kTwp/+nKBy9Q73zRRVZPadkd2+vrDyMvuI9LYSMz3dyabHBMnn9qzGtHXKYx8TlAkdnqkZabJnYK7cXFyrJub9A6N8TJylOi5Xjnis+cUum6fIY5QeMLI04hgimhsNUMcwfrM9P/3BCwL1ZHX1iYSRza2ujratrrZynK49Xc9JLQsp1Rw5SSktD/WddWq8yppPqTRqt2/cNAwLCp/qffOD73/qc2H/23G9AahjxAiksf1kULC1WgQdUukjtKWS2PHGzjD59LwxrrvQR1/ZYdyJnyExGNDLK4lhcUgqH189QA+s2CYj0RLAUE7ko4J1jhwlzWOtmspU1KqBsOWzCcwG170IUyarOUzx7Opq48Q2VgZHuM1CU1FstxzN8e1wf/N7n3/Bt/6YdsoCAS8jwbmYtRJG27OU1XRpU5atyKupSY1JfKMHx5J//OW///yHN0a+wYE3ALWqFBNQprCxPgGXdHpYKH1lWr08qjRl/iwgYhT7vH4mf8gDYH1s66rW5DCSrabglInpmQDYIsSeT4xN7LKCo4lBERvYmxhoR9yAW3Y0m4cMlevRI3wSj05FQMEU9oa4RRi9Xa4v/NlvPChQr7beqoqejEa7r6YM+r/y7X/42k9fhYHom4t/gdAbgMoGvxNBr3pJiWVlLuul77oD9vx2Nsji0wUVk7XYbmopyw8FPWPeGEZvruerf/aNlwrU2pje4Gly+Kd//BI+1fvC05K9kfE3APWGevr6+zXTN4SHg8SldqvGpQ1773mlXwiQsXsmfjuTfe6T332pQH0GqXzhr/7g4x+9Fvtmz1DJ25PeD6jIn3cNhpE+kN2ontdoumJKQWwkQUxMyMMy51NLqurUm+KCYXfnvz3fGxTziS99+40AKn8s+T98+ytvkGiesSr3BupdfDONVfNk+64U72vcZ370qTcAqB9+/n9/1QaiH/yGPwRQ8dFoq6476cHr9g4w/N0vf/q1A/Vzn/r3D/7wG594mxZNb7jzDwBUtg/6kWlYkorTNQn800e/83qB+vh3v/fNH74GA9HXJPGiAQ8A1HT6CTG/JfKilXn38v/ko794nUD96rf+9uMv/eDt0Dp5ys1/AKDWSJfsysBTynlPoz//8edfG1BxLPm//vAfXtax5K/6hr44UNkzolTPvwNv6C9D9H/xxV97TUCF1gkMRL+8Y8lfhrTu4vniQM2wEy68HXVXSe9l3C8/+OxrASqOJYeB6Df3U71nB8MLA5VdhyWxrGcv+P3I8Ttf++1XD1QcS45P9d42rZOnAOKFgZqEU32X4q/8t4j5r374lVcN1A9/9vcf/eg/Pv+FW2r0tga/KFBlo0qiDu/Xv61CeHn1/vRvfvhKgfr4q1///tf++W8+85Yvmt5wQ14UqOkaIj1+23XxbpDLAwV9++NXCdTHn/3eJz/+l995e9T2n0HKLwrUU46kXdMCeIby3/Gkf/OjVwfUD3/5t7B18lap7T/D3X9BoLL7RDj/DMW9b0l//5uPX9HQ/9v/7acwEP3b76yAXxCoWw6yFB/4b0fHL376SoD6+Cf/9mWcqvfh7RV562NeCKgsU2NsuEtP9a0Xz4s24E9//gqA+tXf+v4X3zQD0S8quGv5P/vHf/Op56evf+p/fvv5c78HOb//na///q984prUHzDgMQxEf/DmGYh+wBYGWf3yv//wgxehL75I5nc/71//+Qdf+/Pfe/C7dskQBqI/+tEP/undW426bGHI8fkvff9zj+P00iTwB//y+Mdf+vZVqT+U/7e//Q8f/PzNNBD9UE2M4PSljksPXN23j92v/t1LA+qHv/aLP/viu/0CdXm/f/bJ//rbl5644yVI4F///iUB9Sv4VO/P3imtkzuk/60v/+Xn7oiOR724BP7TnzI//tHXX5xPLIfHP37jDUTHVvjFfHGcvpj87pP7p79gPvvRp++T8v5pvoBjyT/6j5+9a1ontwogjtNbRfNwEd/8feYzDwpUeiz5b/70N17/seQPJ6O7OT3+5Y/+5S3+yvvuxr05sZ/8jQftUXEs+Te/9peffp9u3O98FMfpy8fzF770Nw/Yo374rV+Hgeg35Fjyly88voRfxnH6KiT9lS9996F6VBiI/ocf/qfvvu2f5z+j1H/55Xh/+owie67kn8Ab/2c/+qvnyhuTCafq/eijf3mLDETH1P55PY//6qNff5+mOc8rpxfP99kv/x7za1/8ixdl9OGn/+CL3/n9d1XT9FbpPP70x7/+TiqB39ri1xYBiz4vDtQff+M7H//q771/PUscp68Ot3/y0S9fEKiP/+LvPv7Rv33+3dc6uXZTHn/94397b9aKr7X+FQf85KOfvRBQv/Kpf/3gn//be6mO8fjrH8Rx+srg+rOPfsL80w//5PnKe/xr3/uzj//2dz58vtxvea7H3/7iD+L96Su7ib/8+HeZP/nNX3ue8r76O//y8Se/97vPk/UdyPP4b772jx++A+14W5rwOx9/5rmASg1Ef+37X39vX3njOH3FCP/0Fz/3HED98Cd//6WP3sITdh5MuB/+/ge/8eGDcYszeroEfu+DLzwzUD/3W9//4KdvvYHop8vm9hQf/v4P4zi9XTwvI+brHz9mfvKff3x/1jAQ/R1onby3Yz6VFMXpe7gcd3+QvISUf/Ojx8wzGKD4wrf+6OP3TevkmtQx7n8jjtNrYnm5Ad/45GPmZ//5np9RPP7Uz//4O7//Jz9+z+kX//l7n3nPRfDqm/+Dbz5m/upr99z9/PCL/8d///Nfed/pz//7f3/fRfAa2v/XX3zMfPreQP3Nv/mn956++8E33nsZvAYB/N3XngmoD/xx1cud1rwc7l/4k/j89OVI9k6uX//gXQCqRCQRRDWTDVJUSNz5tkvgUw8KVPbmo2duCX442fVM+7vEQGeII4tDbulfnN4dCVCg/tbH932Z+s2nDP03YkNcWdMbPLf+pYgN8HQ+MSy2Phrz3lj8Syk0zvRVS4AC9dtffiigMnTMvdoEwaBS33Y18Dn917nTI8Lb9VKhVKmrB9OrpdMMN2V6zvLj2V6XBB4aqEBKgreYUpYo1CbBE6LLeaD2XcVhkK3fhiNEibBGcQNQkeLmTA9UozibVyOBhwYqK9FulpeA0vqbxcEmPChQbwRdEKjEWHkdlPEe9dXg6KWX8tBAlQRWyjnavxH5gfPhgXqjPNh2i1wulxJl3Y3R8cB3QQIUqH/zyXuqmHz4tJcpJunRAU6c50k9kxgU0EP2qDeKnM2vOTo67Rdue2+Mjge+CxKgQP3GNx8MqKmmEEwJMTeH5CNZXl15GAix+RU3Dv30HU6yrvz/t/fe35E8233YhJ7u6gmYGQwGg3gGGSRBYBAWwCCnRc45LHLOcbEgoAUWD1hgd59E+UuaURIpUuRjEHUo8lGmTVNMeqRJHz5RsvXkX+hzZP/gc2wf23+D763ununJPcBg05u73y+mQ9WtW7c+fSvdqjr1dJtcO91twmdi75oMHuVrKLwfpjzEEqiEqAdyAai5Tb3wk1ZBe9vO6uraotZEUafF1V6q8iDIPFldXei583bT/brrxspXNxXFtNWpMkKUarj2jDLojgCoQr/JUbmRlZ0ODVaVSr+d+rqi0u7l7cfyh6mov+y8IlD/QYwsKlEVtrOa3LS98s49E1hUhIe2L7+mpqZpEo0e4OZtCdwJVLLhoPhhnPauppr820K73e7UQRS13V4M13DHYAA9vcY/RQVp2TVLWhjKd9qLympKSk4KtRSayBqA2qemMFRPN8B3YjpFZp0NvK2mYUoagAjsbH3ZpfdDJD0C9bf+5U8ry3GENiohVflcw/hAi4pMzmDVD/ip7cW2AAxP0bmiZ/melgHHZbzEYQFSeNDey3JcykR7e/uVCx7ULsMV0lYOihs7vAAAIABJREFUAnVHuIG/TRCMaxggxL4gXJe2FwkWFcKpP2h6aYqq6mTszfG9Z3UqVXU2vaxFRpSITq323EgP47+fvwYQqH/9P8YGqCoVADWzGHGg34WqH37JvAWhiUAFa0emDHgHKEIoscc6eGZ+Z+NZHgifp1aqVK5dDcezSNkfsMXwloX3+FIgOIbReJvL0ig8v01tKLKuTeANbRSCzxCckEY6CECBylnmJWwS5tn7IwBwnL40DcQSqNSilnahe4hWBGrhhQZBI1lUEaim5TlALH+sUxH1aQaXu3tw8LoXwKg5g1PAW2H0vv4A6DArdRp4vWWbNlORiUCabV13inUVA7yu5w/mCwWNM0safhBgDjQygbhmxy5zCJGAKnazSPn0Cpv1TIgS//slaSCmQFVVNXD8WC2gTf0hO6ET9DAEg6ppudLMFNnJoGhLnRyaKOX5Y6iEHYCqMrdeb5xK4rjsAbB8jdlc2pJerzcP1PD1Q4xqPuGl/QWNZiloampK7kqc49PbEiGEcYPVpG3rqbqZ03TDujDDwHQlpEMbtUsLhlYAag20ECCUcXLo2MZy1tEvqYDisgoaiClQSeEMz5lK31fl5bVc7aBl1W+Xpn64MUlTqOb7DAuflZ6co3ZvG8CiElKezLErTmgjON+nmrJqoVM0bjNdOhMLta4XBk6za1Yl5iQalwGomqSVEZfLlWNOHOQMmyN5eXnuS5bj60doRojzxrAm9pmMOa9SLaZ5NZhRBKo15S3OreqKn9WX4lxrHKhfIvhjClSVug2Hp5IGB9ufDRVS+2Zvrs0ZGZSAqnI3LltuW/v1RDUKQFUT/QcblzqAkCauxhkEqmuQba9j+lZaZ23AqgdbqSoEKt8wPkk5Escgl3KyPDg4OIP2ObeZtj+JdkNThq1iSnlFL9jkCggOQGVf10LzgGjrNrHPBhQHqqSmL+kXgfr9v4pNZwrqV2nAnx0733BLetCfZUsQIsyF7Rk8F4GqMkKlXpInBNTtZtUSUpnLLejU7y3zYwgqL1BzF8EsYkySOGh92wqVu0CmLTt93FimWcAUKWxV6huevXKryFA214MTD8R4t2sVY8SBigr70giB+h/+7htlYkcYngImzuNlA8UDz9vuHQJXprHJRsdU4Zb09whAJYJFNcuAyuxfl8PAVi6XsLg4aHhdgny8QK1pEbgRFQD1eAPNLZJm5QgaDsC4tcxA+/YCUHXzNVxShXn+umTrlFHpGqdOMjwjB3GgCpr8sv4iUP8ydkAl+iGslAdnoAmQ3ylat1nWViFcqlRHLAAVx1QRqDqVHKgqtZZRaV/aONZi0XAGCiwPUDWrot0lTEUBZxIdCmoGXwxDMwJwSsp3DccUsnijUiUecrbF9RTTWKHa3fpszmLiLQmDBVj317yQzPuXVVI/5NLGEqi0a62jE0lusJQpQjdHpQV/VGneX7XBUaCqRKDKq35aEjn5PGdJ9RB0poCgjZpWCy1OCknjloZPEwJkrBU7sX0LnTb3KyuH404QBD8DlfbCxGdn8VxPZ9V9Wi5a+ZIh+zgM6vK3diEKjRf/86VoAIH64z/4Rpm4kap+Rm826ylctVs2NmUEgQWYueGyZUC1dtOZUcGiGs9YTxtVRfRGphxGqV70DwnU3zgE06AUqEmT8Ev5Ga/Y7FMxgJ1AHMIYzW0JMNRq2BGAihIwncnYMuBsTWXp8GOy2RLcTBcA1dSHHOP0pWkAgfpnv/2NMrEjAJUk3l9d3RoRTszwVEkKDqQCUYsqYFYFFlWzTGdGBaDqRku4mhwwlkj6jku3CwC3Jd6r8i5v6SgpWFQvUHUD+WliowLSSby7zMu5uMpEUGrGqTGFP5Cavh0fiWS5np4eNbesQNW/Wy4kFv/7ZWkglkBVFSdwXKbQUNRNp0hApf6oMqC+pm5TAlBVzh4ua2OcDoAy3SXplY5LkxeonUmeNmo6tah0Zj9x0HJPR63Afg4c1VjfX4j9eX4rhyqfwlUOVPbQBc+KZ7EFcPdllU9cWlEDsQcq7eszFWUcAJXCU+447VrlbF0AmsTGIw1/2FalMr+3cmzT6ShQ2wyXXknK29mxNrwFWsxGoJKW8WQuewkf0JFUGPBP7cO70dGudrCRLHaRKFnvR0drcZwfMucFaunKbiskae7D0f4aaB7E6QvUAAL1t//sW8okj1D1ixY1sZjYq8GzhAI1sdMOQLWeatXlI26GLFk4y5ReRarrYXzJlDatInUwDKXJykUyAFBVuqJ8E72DP9k8ANU5eZMLbirZcJ92iabXfGCgdxgKbaSMbLm5TTDrCuAmIlAt+fV3duxxqYsacBzhUhiNVZbfeKjPRwMI1B/58RgCNdk1fm8/yYfaGICqM4+X3RVvgc9dReVE/oJefczDpOewmalIQ3jx0LGxZ1rpQBTeW/JHwNi+kqEvISdxqgEtoUAH4H9KyGSZN4r0xvNr2MKBAiJYVN7WXtGCEwLE2DKB7jGGe6n9+/kUQVwSJRqIOVDT5npLX8AYE6sp6VS5FpLZ/NUUsJkzgyZuwtzYC2DR9OwVVqSC8x4Fqrp1MUkDxLIa6/GAU62uHvQAl+Oy5pYbWHxNybAAFpWo1LVrqRBBxKbwGu/oVQp6bzFqtWMCnpSu96MrIVjhjQnakJ2YlBrLSpQTD/P5aCC2QM3kc3etLK+ZKTNc3a/ZSXHHrqFnEL1N0YG03VzZjn6kbEp5YcdVQbuG3QZFEOfSPdDE3LtXdYlTR0eb0upACkTwU+3B1wKNgmMgII041+7vYWALybJHXy3Dp3GIV1NGCNJ/dLQBn0fuHcwGwD+i7UsX0L9Hu22fj/rjkijVAAL17/6TwtCR2qjmo93Z4a3d3bP5vtfVOgSVrvlq+nRXpFst032G1zfFRFe92LV51ogJEx2Qdud2en58qsZrKSkM8c8xvhfIU2/rCrtnqaerZqWOvtpmOc00XsEgbdXOa2ADflwHhULGdMI6A+B1HgeqwrL+3IIhUP/i+wqligRUojcbdWYgrdaMI/Vg/HRmrRqfIIF5E66NADjYgM9shloaydgy0um6zrZaadvT1oAbWAiUAobwSAjk/cu4RkbWU8HwptXXZzYieM0t9yyXMYBB1HUjJ2IfK1WcuC0eWhXbCbZ7OoHgZRW/+lI0EFOgPizTjH20LL/+3YIIJs1hZUud9O8ltCwDgOo4bMhHHxPLh5GWcpwR0HU1JXGaIzq46p7JF6t5LrXViS1S46sScaDVsEvnGh4mZjzWJ9XAJwcq0eW8xlV7KeBcSntDTcOeCl6las4OACqjLiyASpzXGA7rxJ5R5yB0zCx9DLQi1CN0PAGbDJwh88YM/apTaK0CAfMydFH96klUyleWTwDqt/7o9xRmKlLVr5CNTzBzx4Fo7zjNwQlQt7wZGQhUpvv6BlyzuJLbt80C7AipzeL4zBPo0Bunrg/kfbFep2rymE6vctnvgfUPRcUvApWOdvio+ou+AaD+9J/+DwqzEHug6lqXMsQqn+MnKnWMjoENeb3iBAB1cn+QzkSl3ep1Ak71O+sbFo6/hPX+uu4S7zQVWtECZ+GlBfv7mrlrN7AWGcsS8Cb1tV19ZZn8lEAlVRWNExRH2ckJCQk9MPhESaZiP6A6K/asdNy+YI+uysbghQVWE5eVsMjgYhYEZXYZMBPotbmVtgTYsiHswEkkS0B69BX9aqv7XbLMfiU5+4RA1RdupCbhLJQm9yoH1urliXW+16Lq7Dsw0+rtTGn3S7GZwGeVVTg9RZFXCo9euBOJcwu5sbm7dciMkl19StsV6d3i+IJQal81UJmhgvQLefPp60DqJwIqozeax8fSAWKcydLUBnuf0YF80KkXpuCNslrAspZbUdOMsbEALKbBkv5yyFsQxAV9JfaA0SXegfHkTfltnR4Mq5jJBGhYaLJuqafMZ1BiOqPPFxNziYjWWD6n4Q5F77KY8/90DD8JUBnGdb2wkADz/jyf/W67C2EHVo5iVGbtim+gY5SwVkm1A3FmJ6Bzr7nannZ40UwSj8FmFoyqi/ZguyA+6528L8ZUXYGN5Zdfuj6dguUpE6b6osv7Gclfxehav7SwC97hpdMyNcaI9SdmA0D9xV//BwqFeHBnStghSkpFe7o4K/T0Zy4ujsTZI+ml55cY17B3v4V+KOC1B3GwP182WwEh0ADTomCKbmFYK+lycQnmUDnNi3deboQYT6GXxTXcFHl4xuziYTgo7DswfHjKkQdmhy6J5GpOHyZgzPQTe0YfCajUYIrS64pKDHT6M2WiTauFznpwIoVgcrncE5iJVTHVp/k0TsZLPbVIAFOMRyrHDLyhoPciGzac5uuX+2XciMpdhi3gPTpJFjyNhzylX0gooUMwFL4q1XCuhj8TnLtDBHz4Y/xySSXtTVpnbr8+Z8aPA1Sqf1q4xF5eDcPz0DStKbmvogtNghcOyWtu4DSlW4WEOMsr29MgjqG05Fje+CKO8i0DxyZPp0KXi+PSp4vlDUCS11oDUWpiPmsaJUg9eVe756FOsEwFz++jnxLi6MSWDgzFtSQ+RMZHS/CkDD42UJmTggaswvmxoUnPCFOwHGrP8018Qa2bUTEdYpTM/slCeQkwU73ZYHOfNcOCQI61vfPpMZHErXwD39s8mSePEiylKJ+J1lGIpYYtsBQ0OjEOaVkpxdGzkyjTUxgcXMSWeuGD5U0NX+X8GwD1v/r1X1KojAe3UUX+4CelPYeygunMgoEI5WuGnVLS56EqJ/pZjMKxJV1+zTvdBzTN6c2vTRxvmJsulyOSMd7CIEBq99NshoopodOX9uXV5jm4b8lTDqXL4j1oMENn8G2oAI97TnSjOCbCpr0a9Q6JPI7lZxUbgPpjf/AbCkV6JFBJy9tXt8lQWra9D/sRtKk7heHRhjzoNA3dZkIULmsBlrD4EBkaQwtlPQCzmv/hmQ+KmaL7GnhXYPeJEbMbNJA5b1+9us3keev5q30FTUJtB9p9rve6OWZS+DBquVsBbRh273wqHZ8gX/TNxwSq89iq0YA2NYducFYNS8xQJgRsKFSRqj3cM4XN3IMVVz5RSNU5tsjgHVT/4Orq81J9ibEsC3T/Cp83Mboxt95DZjA3UD2UjMobx8FTcJShrElLSloKwTmEfWo/NkF3smB36GmqkLBpf5SXHw2oalfLOk5n8kn5mdW+qArMKMl7Db2klGWnvvwkC+KkJzc7/OOYl8CSUjLULMiOk0Bujskz8PjPmIOJhCcgpqqlpQ1XhUnEDsomGYInyIzAMK+p5IY6HgYP8oin6vJ91G3qKSxjfJIsP0K2GEVFoP7Erylk9uCqn5id1XMF0JcwZaWfTHbiFrvhSFt8m8VZ88c77a09qRApdXHEr9pX6RxdtGsCKLYlF0lbWEhM5wsA3tnrdZENnRRD+a/e6V4o6K2BFQVZlLLBoltu/OXz40cKd6EL2dvvxhFgv3ePv2Uqx8DD3JAmbUv3eI6fHwcA6k9+941CuR4KVGLcWIbFfQCqw53RPGjfhS8tMvqilDO8K0qs2sqEAVf2YLQ4QMCW12VY7QJlTdV62rsCCAh5i+/oIQIBER/94OXyHE5EcHxydxvSOo6xr4RvpRLjEZr/GQwVe5yq7Gc4AbfSJrqFw5DqEyTyaMU9jsETAdVHV+qdjXQsWo5vKpI0KP0Gk35yDtqxV27iOMJ+Mjfj2bjKi290QRXIMisflaJsR24n4J3mBj6JmJCs2CFf74V0M67HhcaIvgNECQpUTzxm4EMpxEpfjL2FhzSI+RbHkXu94yhoCDyJx0QFn57JUwEVraaQO9K53kM7HVmru9se2xcq5xjppQH8oCu0tUupoP+UQ9jgVCKBJUyODryjGAaztie5+UthVIXvLVAbs7FbGS1mBBIobBsfh6+IM7TvvqNnYsEzYp+dMAQHqihS3fwKKsB64fTIGLMLcMJt7sOdt1PXxC1iUKSq7vHxHThK4SuiJwIqKEv6pIsvbHTC1HRWmEj3Mg2lPWoFwEu/8wjaW2vqxDlY6mdpOLYHgpvk9Ao4TU9uM3thLBrcIvSiSk+mq/5CpfWw53Aihg0zwyaMyLJCjMNpQYEqJuK8FhRQMuJF/MPSD4iFOjbv4pJI6ywOcAgJ6DtP0my2tI4nG/IIkOMjPHg6oFKtqZ32t9g6gz14ZqCcJPAGzRi1wUQ3gOdTZvUV4zEUWRPy4yHFWCTRXiEsg7LeuXw6MVBOjMM+Df3xbL83QROM7iFwHqD9N2tuyYDv6NpIehigqrexQw4qSHBHl6CC0JBho2sQmGtewDZwonqZ5rI0gC6f0qyAwxcTBID6j3/hOwrFjbozxfSvttdgKeWuDVREaqChRSXazjGstzcv2gezDSXzwv6oonhQFEjGD+092DPjNFt+RQ/x3VdzcKYE+9otBhaixOJv4V57GYjGGWYHWmW2Cr+9kaRgQKUSEG1RL6AGKHfe56OKhUiATO3JGDSR+d5a6dMh2vJ2WoNxWU/gNRYTqR/EBID6oz/zqwqjRglUOCDtTNCZ6YNd1hgIkRoWrOP+jI4OJENX2vZeKFqPGRYu8FQUSvxgRQAaE9GxDyB874kUIrFoHxO6mxvyXm2RxYVkwgKVVH3ADQeRMjpl8R57CYnSHDLd9NDOJO9En+NkU2gWBXzGj03z08Z/QqAau/aPQWf1W1tbF+jb5ulehcgxaF6/T0d+sFzZiWu3GNADR7xg+hcFn8vUA7HbLWcHJ7JB/+v1wqgnjvztw691Ay/RdwDmag987RSmY3xrC7SoFEfmHdQAkmblg9dV9uFySDExWfifVINHBGdaPUqU8qtdFwZYGrbOh6RnUqQv+heA+jc/+98qzEI0FpUZGW+woHV8bwSS9XhCp8W07NQL1SRWZs3BJxt1F9in52wJG47AtoSuCDrA2ceJRkVuIqEl8X/DVCfAcRXW/NzMjkSpjvWEUT8r9R+eEgytbnK6hrZRUN7WsB1JDzPlF5gGzC/DNzDWIuxHD3GZYTq8nJu5BHvWKOf1BYQEoP7rn/sphYIqBypxtiwnIaBMqScKmFPzo9JuJQktBSjXmtPAzj4yMrvOgCub9GLEfzISC64O6lnNLt3RWkGqyoJAwzexbhMB0b6+UE5NFzzyxmVGkll/oKK1A2nmklhNehbIy2XVx77Lr61y0/nlmgHxsySOqpZV0KAmfQvllMnolfaLvXoaoOocR8kwCM2bTCutSobzqE7V9jksUyDWNtsv95D2alc3lYCNg9LuwMl12NjKfg4L/Jsq/LxXvLEfdEVU2qVkGLkw1Lc6xGXIPiBIPIBh30PfmSn8aNTOBZCmYOAeMG69H6JHGzxIgOCRiL52IiGD05hy12D/QhpGf5JZZuMMpt5nLtgcQf4xBWfxRT2NFVDliiHqti06fpTxdtvTGw2rFVSqbv0glcIUnKr3R4KCjeiKmjBI9pLZay6kAiHq7dfQPkubRk8C6WHYVJW9JExXPaZ51OYBoxwExJ4M27bsBNSz2v0D8OvLmNbCQfDsFQweyTWkLOXgoYSsEfcG7kzMbvat54nhdG24p3bukbBYMnjkL/dpzIDqrWlIZwcsF8WyPTYHxZuftgTNM7W4RIpSvnDAjyeYhDqSs7ZMmxN78rl/AbKEwAGByKCE9lm8OPZwefDF5AqwNSzk+bezRcQAULNeeTAspkKYItxQCzRQtaDhNIsoj48dfqg0kCjNm/k2C3LLJ9TCzjICL1I9B09Me3nSg4cm8XnGA6D+1O//qELZIrRRacmZh2tn0ReULxh8nacMLxCKFDaKG/Ny2Zl3/r0kkU3iHRxiDlZkxn/WFEsvrxH3ljSUHTgwMwKIFGYrfLDiS7RcPZ2BecEnpGUn37Dpv6imsLYIpNH0wgEwrdBGrWnDJOR2OHyS4d4KYqjbUkETaYMvvaoqvICTDhpWYQeur5IAqH/+7X+sMGuRgIpsquvToXXK8aWjhXZ/GxQ8GQQVmc6QxnEO6/ybpxLqKnC3VI6v8XXmB6bAgNlORQbprUKiMSytcZyRDUwTgQdJa8/TTMn+HSXj2/QkaJ82FNkZ9boVpsnoUH+sLKoTtiicxLkHy43b2/I1ontu6rjP+sbg+v4yn8YUqFAU5gGcMQXfyCnZ7E0k1RBd4lu0lYAIK/SFggdnzM8QioakgDlsNFXaW2RgaagTIkvYDs4qmqe6NegMQaM4WBxIOHGZy23zmjUMxZjbakAWU9pLOP6lrozV7AkjqLGxqCqydmp2o18fO+etWWiahtw7/288mNRf5rNYAlVFmOKLMVAhbCB5KjQjFQGGqIZe0/YldAU6BnxL3atV9wVdZr3ZTTsPcsZo2Zqxl2W67goKKC+T6K9wqbzmnKbpHxlkYKZSuXT4OFAcSaTyc2xtG27GcTauOpsbq/SP+Kh78r5scxWtQYHM7QbTZFdP3TGsSR4lZOwjU6D+pEK+4at+8L6bF44nb/pQIZaaouqOkG5xXNwyC6OjUoH7CEUc99ii4DKbwTBhcfgUCSEvcQTWNuDz1IfBA29IlxU+gO0QfElRGTQ30IpLIsHq+ms0/OxcJY0DQD0P9ek9TCQyCzshQQrp4NcnERmGQTvNuxhPc0jcP4tfAOo//4+/qFCU8EBlqqfr0Zymr2x7J5WCos43OWPj6AbCjOPLDrAyCwYK3fAUDnilz83DOFAAlh1Fo5ewtK33LLa2C8Q0F30wcTWr9FAMX6nhjri7XkCX6UWekEn4qxsaHZ2CNm3GymobCArxFy0xByr13DYNbnhnPLSNr6xJK8vSlHIwBQYI/6U9oED9JwqlDgNU2LWkZRU75YaUy2KcVFLaImOqivKzaUcqraAL5yeDQZtpybShFTkrFOerfMpC3Z0CHLLyxwOnNxVmLGSwkVILZ7sLMlmLMZipNAOXlNwPW7LjLe7oMpedbeMtpR8cQhR1USpneUchiyFiQCSx/AA+6dTBEW8/iulvsPKrxQ5pLs9HOTFI87NgESOgqu0nvQ1WWGiXNdMsDEopqvShdHOWa6g5BTx0mhGkQdRMiunhU2yWtO+nD5hJNe0CX0/GvH2qUlVClXol9IUCi0v/CoZI71qgy0Rl1r0qyKe1fnu/tLbeDc3qCRjsjx1p+3qzcGMN2bpF4oKhf82e93OIZXqxk/yRnGICVKIuWoWOLmtIX2xrFltOCi2qAw7txVrfYFlwQ1ZAxz4gpLljEu+hcDhNwXxlkBEBWOCJXeDVJ1kaXQkJz9JEA0ufQU9Tw7j4ZTFq8zkafU7TUOTZ3b0uheOvYuOGKqRPZzXY7FdC715QlfPSwmmSmwMFfCQ0sDgUluLjU4rIAYD6x99+bNVf9w4nRdjNV2vOIDgLJ4O6LxULlyu4PRkKomn6iBl4D18Bl7SB7VMvSYA2HyHUmxqDRPcGfuhVIFClZFWqFpwmA6AiEVJ5fN2LOcm+nhZaPvgYgFo67iM1Pn0QCdmrg3kEfrnDLbCgjXXtWhKXu6HgHA3g4BVeJkOwh+IzhdWijNmTXQJQv/NzjwQq7NKBtkQDM59RooWppXP3sD4TT9wLJPpsBPeq4awBezcIEdSnuFVO6lRs4OArAsAPLOp7XzPukbMLhyoyBeftwu49OCqQY8uySt1CAPyr387lxmI5tGn/AJVHU6tXzbDj0X4vjPyHGiyR5wclorJ5owuvBYHlQcWAvo8+7R0A9R89DqjqyW2ESnpZZq2/BiJkjVQN47QnZ+l9H6Y0iy+wZm84DF61MxXogGm79p9sj5C0stdEVQ5bq59VyF0LpJjGyjsNl548riO6kaGhpSRAbUbZYPfWoV0KodK1FvCWm9hJpp/sg+8mfd87LAVN/F0bq6HNYB+4hS0Jn5AhzKwnE5/LxaOByowkwFIyQ/o7lzvaxpj5KMUCOGVnqr0jLT56QXVrO7IhjLUtTzKZUhngLyHmK+iKaVbdfsr3YfOIG3VXKm8t7ZD608hJSF9XBGsQLccuo4qpm0lJwdV02Scut7HQ67tCXLCbfr139ugRYtCoTD9q2iJuEatzJhKtvfAaerAlzWp7cXGx2Qh/JDLKb4qL9SSRvsE4AR7cT6S7x+bXN/4jgUrUedCV4Q0rRdFDRb1OfQENNSEno2DmR9uFi4I0SdUesSW14i/RFcNaDL5JPBrNEyZ2F4m3YCrz5Rvv0/RJC7ho86udeq22eIHOVrDWPeqwLYkHn9glgCgzTF0RlZRE7VrFqmW3HFIgam3n2YbjWftgKlQnS8663YmxsY6+Cfgr0uL+mPdmbKLb+YG+uHa0zU2D0D7k27SJSqqPFxiA+hu/8NMK0/MfRyWMcWrLBnuSn8hm8xTyUjHNPWCGONvGdMjKkZCcD2MACNNWn7dCFSwatWxEd7qXCoOK3qVtShNXHq4rG7Zbm5tkPAQHWDOM/QLqAvZiZ/bycgGdVlg2ecm/N2gchB6gvJ5WnmhgSMb49jVWLU0Dakje/PbyzJJxLnhTmg4vr0Aavp6uQoEwSAVlwq/wl+85x00qoC1/PshmXvrShzrgCNPf9BPDbELq4l2gHJ/sCQD1P3/3gUAl/dtL4KubvbkWUJtEzg9xvcbxU8NmlTD647VE8rjNuXB0StlFZfCuVuU2YN20+6R7g41cQJGbzrc9tI9Xt9AsT+0ZazfAuS5Q6W8uLLz0n78kxhlY2ej9wOTZivoaTjikrmNc2SIm35GCydKZVNAhlQF/4X+JpHfivecWLiC4D1nfb2+36d0v+6EImKLt7W5owpW/rP6MevyoLrSoDwQqLIY2geepYTdPat1Lxk5JOSTeYfuUL5PsUDCgaivXrGC4XvltfiqxZ+5xnV/SyJNuCcpo7wAAGpMvQSXMJVzClqRAmoKrKr1WakJLwqmYyl7QTYxqfuMmHVgBZRhQEHT4tQq7GfI10jGFCn+TsevrQ5C53tG77MPhiormQZOpZLSi4si61V/RX1FRMSKVrSdfn+jiwRbr9SL5AAAgAElEQVRVX5VzBG4ifFKydxQ+GNiC50udd5oOysrKl9bwBcO4brgpCUokazs4D5J4AeYhLdkd/HXMnu6XSr6yPsULW2iCLc3IyCirLQxAKSSuhy1eS9FKPZJgDZ/b3dnumzbHpr94C21jW0bNfk6U9CEFhKYE024iaVJzOWtGSkoG8GRTU1KyOFsKpbEht90MKwU/OQFQ/+QnHlD1M61jmalgTdK3q71d4mBoC57DluV8gKBho5/64wcPQ3JeYOOAXQgxhamehs6Y5UR2il9wPo99WjjcSFfASIXq+WU1hvfNw8MgQLCM6wFbJTmYeLC3CoWCFTat7T09PQnwUeBaSQ+Vjo90gW/2Vm2/U2Llhya/WykUuNIMUwLJb4VNsTwZCnJhKuu5Pp0ywpkaHtJ58uO5QOY+N57UYnYBQP2ffj1qoBLSOYfVnmFv2vkQAUk/9EA49rAlXD4c12Cx4cxpb4ffJzQZxs5Ytu9+ED4hYnbDNPZiI0/4Hy5QLKDkw8OR0GkYJ2C4QABq6EAh36BWCayHYlzLgisEJJnxCtunAo2bVeBHrhHOJgqFyZDc4QUmkLO9yvo0V31vaEahLZ5QsLWw5/036kGqT7o+N+FSftg7AOpvRgHU72AqJHF6EffP52feYy8negmN03hyX8NFa7iBEe0+dlRT9tpCBMo5gBIc/CC69D8s90pjafcvtrJyD5Y1JecXNzheZru6uLhcbwwz2KEbzYct9qi5e8inDFrVtS0tLi7OYlMeyXR24sQ+uUikcNZQclEk9ESV5sMvHKzqnb0ISeelQsJ+vS92bmmqHJ0AkPwY4m3Qh0HCRfkoSotKgaruLjVhb6K02+t3qjhZyId6tAaip70N9MqTZZIZRqd/24a0DalPAqigZ9hCnnqABD6clN0QtT5vb69q6MWrRK0Z3Ow0qy6tXg/n94SOrj1gNSvCaH+w4gyMKMu7SpXnUjFDyRbsN4loYdtbYB24JxAx9uXyZw5BAGUJBCQJzHR6vTbUP8dxtpi274/GlH3UKFArDur6UeATvwAPu43Oov4+AJWxV9J1I5YMYc1atOkS0oIDfqYtR5AseR6RKmxboFNyMP4A9rxtA3QlxoO9fZJnTGIio3OCE6jzjM/t9XYgQyRGCl/AdnoijoLmISCiJ5Q6r+puw113qGHTMjLSaFODz6ofxk0lPNUX01rCm2bFLrknZgDP8A/CxyPFh1KvS/zF4xMpWYXjC7LSLlxVHhK7G55vKXza0b4FoP7uH32jMBYO+JPihQL4ytns3WHJ61JhbCEYIYXoXMpOBJu792SSOGBaB3z2Q6z0A2+RiVKe36vw9CSikiG6wB6hMJo68S7XujgZvP8k46uD3XZyK2QPIl56kmGGx8pSk8pg05Pcl0NDfaAHWNH4thLcXqFaFUOR8gmNfHFfRO7BAnhSDPYSnjF1Q740XyO1Q0TAcmlNZR56B57b8m8pBNcHPgag/t5ffKMw8jff/o7OeEcHNXrXh0K0HSPwYszoXMoWCK2rEIGJfi0ddJFxGmoUT4fL5fl7mFAJbxVC8I/msdeKQSzm2esSLqsV44dPWHvOc0lRAVWSCVzJYYE+D5NdbEaliqnNhtP+hBWNFKVCsg44BlC+uE+KHNtf/ywmdh1bQCyJJLSKv6WvceMQLJCnKJQogfp/3h5hX+LhbnWk6Ah2jcy6ke2cEKhc0n/fC4lkvws1uZo4tQVWmQI1MHaMn8i1TkZewJrUTdqXD5sMaU0Gp/u8sGFCvHR8ABvaNDj44fj4rtC5tmDgyj4M07DeT0a/BN/pXCjthGD80MdyuObcH3voCorAh/iJISGsPMZDU/WPFyVQ/196WJ1lwueUZ3+e4e478dwF01YenXCUY0AWqWrnCqdeDGeCl0dgttXTqdhaqpFWs8niPtkllaL4PRQOdaYPIbqUPHPPcpaH+HJra9dyuaSV7Z0dtU5tbl1KYrnUPpiZw/Skel+lG8CP/cg7gC0l+yS/8qziAbBIaqCRg2UZwZaGsO/RDj3RCP7478nxaMnePFd9/6++Ucjmm2//f1jvs2Mj5kD0KOJhp86lPeJefCGYzKfht8onC40LeSBBZ0wFHk9rLbh/gkVSgbkQywnFgJ425L4D2yNyqQLjqJgjnm+A6fIoiELR3dhjM+VfwJQsJEKKx3BJ4xk2xH1YmcGNV/yMo0gglkFRHJ3D6XA66f/w5xnWtBaxk5WVdSDUJvBt+UguyRDqufQ+8Bcs6r/7kW8Cnwd98s23/8uNzWZLUbZFXyALXSKeyWRJaRR6w4EB8InOvEQ7l7bxIA1UzDXJg03qWeuLzhBerMHZPvyppGnG3FrKa2xZ6wpY6a9508soXXVgw+3irRQD7JspbGVFjC0FaBbO/S0nKZwB18aIAw8KxIxhEP1Urk0aSgOpbfeJInlXy8pT8zZj5E/DXEcJ1H/YMtrVVfTAxhHTeghVlukofPyRTdzlEcZZhYaZj+z4eeqcuB6wYTo6e+XDJqobj0nI2QJ3/5WdUQUbvjLdNZwtypqfEN3aSi6nSZF2CNIejeFQcWaAv4D6VS6XNu4P36gy9QSBC5+1XZkMSHQqLeWFQCvvg3kKPLlF/YdoyiUTE11uCVO+i1mwPQsbnxRlI0x5Q/CD9wjTdokzVjMfyZx680gqU0EsGLoMK74QfmgQjh6M3OXyMqdX6gWWt91sS2YA/VnhEJ7pgIrFuAuTLS6I4vmG/Bh9mlvCDN9RmrXiZLNESYt6Opn2SGGjtahKislHTx75HG2w6QjUZIMjPu/9boxt9FwTNvkgeHOcqPewYZD9QSpOv/hPdqsdgIOEuZR1RYNyfSxnmlcAaF9p1Qs9mxfiptboGgqtPtvyfUBGyXAyZ9iyQ9yoU/BNL+Z34JyAVHWzuSks2qRgbdifP4V/O7SpLYjsAYVyEQCof/bb31IYng74R6sdKXxlKR3OqBH2ugmRInGV0FClIXc90S1A7g2rsd2nP4Q0ssfMcK+FhxndYPWYLJh4OQUjG6dSxgNfh3iiu3tm9hzLAScAQI9pxUUbuj4Fy1yybGaLog8mREIxfuwjHfBmzGbzdHJTUy/OVYBpsiLZ0oVl5ELaUesGHad/+8+iAmqUuRRzwdifgUHiLKknobvqxFGYNwxuVaakjNuQgHBucnxuWX+47liUEioIThx1sFBPk3SYo0jD2lcw2t+mKKg8cWL3WE99YQ747fAFYrfVh5Vjk8tue1JncblQCq59pMPw8CCxvLx8ctVzeAgUPV/fXEgJRoz8oa0gkeiBGiCWglRUquKFJphv0Vw1hhkEh97DWAI0Y9uLasV9xwJZM7Ddgq2v4uP2JBjzux6wDvVtI4rsGCmqh/P9ir3jnoHZCP+E6LrHZpLg7Jd1cbsgecGSqSQuLYTrY3i2T/VWLh1NQ4QIM7JTrxEI26xsmbDwsE+vU6RGX3GjBqpvdMV3OQ0gasFdQA9WzsC4AmHg01sInQ8yAFNWuZPyWE9/zXTdlIJY6X0KP4+6ZZZfmcRO58M+ajLyoQf0YDjftgMDf/sD205yuQjUAHw8vSYUpuDJtna8Q6AxWe+q6fJ6yHPygEKOdM1UdFW/Ys4+AbV0k4rdxNAQhKbNAB2XSroSOizBhopJ5zJMYe7m+fB+8pvKdtgFxbR8j70BNJOecgiRMmy6zb4Ll9MQ8aTHxbPQHObYlU7JQ9k3QQmoD/wMpFSe8NfzbUHvSsfAsl1d22v41EXiWcPW/vZp6CZgUMnAov7df4qmjRqUS4SHTMsznEuyHYczSbT3AHmZEdcKBrNH9msTDHXDPo8flWBLFBys0FK8BBPLTxrwlGXvfcHlFyLULf0GcCMgcOcfDOG2AxaVzfwo7uKhpFTwXJ57vFY73tG1hw10LoczWCwZ4/390WzOAUD92798YqCSvMN0KGvNcriuOnGe0/6+Zlf81IJYLi2eKJ4UOLCoQHOPCGKEnXN5z2yaAov6cKCikdQ1l6A9/ZAX6que5Sxr0W5K84jsPyiqvNahoCWOPKSuDI9dTUtN3cwJ2WcOSPVJgSp8V8T8AcfwYWV0UEsoBFLpO+gyXr6gOWSHnmkEu8xu0Bo4ICNP9UBnxDWEWX2eDnnkhACophMxW5FDy0NA+ZLyMfyos5ZCMUCL2lMuj/UFXZsXc+lgFbZtQKs9r+DYWhBfjusQuXlioKIEOmHrnozT4AgUGjTMKG2gcmnr4H0bXFZStwIVhybE4ungcR79lEzelEG/BvrwiomM2rh26Es9jOw3WLGMvewMycDTRn1YAp82VuH0PtKScEI4V/N6oRmcWEMVuUxWAOpfff9pqn4EKWpbfYNfD1dmlyXruRQDkUm6tyS47hWG/LyKr9Hp4eMClRTeQKLsXNjZNE9mhIviSwP3XoGN8Ism3OrXcH0udxkSpipPrz9o/C/kof4OR9WR+N01OtccSWEA1D/9XaW58997KkI8Qdk5XXMgjylzNjFocCFQ3iz1vDEkLDhCSWzswwZEzYuPsT7aI6l5ERItXR4N2mjxhPK9GEriUreDtLB9QwW7g6wXZkIm08a2QwNVJVrUUHoKxvgzeOYrLrGft7fjIZxgeWzvBmqhPR4mxyj+UwIV+ZvLj9C7lE+ucISWRO9CPAClFTnFkxswrg+pi7CPwW3Qkyx83jzhjXogA/bWemVXR5NGRRb3GjqEobMbihk0gpjqBlz36A7TIpYsavT8Q6X7UZ77ics47PZnZcLuQra0+tAdE0m4Jwaqrq2MVmXpku+alK78l2nFTVeATPkwlO/76UnhSAts68dprA/rpEhcovwlI+DYp1mIon0KCTCwnOtcaHhHmxzR58H6Dr4n/ATYBw2XVWt8kMmOUqBYBg9SrMaWjiwr9ByhbTXmMgujfyGTfFqgkmo8bY/V2E6C1/tULFJHt+4B54WNrlDBoKqAqW/D2HRLyJzE/IVOXbVl4DVjQ37GIHxCxL2qQaA+gHT6t8swhFraFX4iv3KQM4xdejY2fkBCn02Uqu75ZQNOslpWzt6a1eowLaw3z3/6139LqeBRtlFhH4U97Iq0H72qCmMAnPSoO459cR96AFi7BIY5deNj+mKo5+8vs7jU67DeXgGaI4nHVo67CaPxgCjSA6bxHdT7XNYdWEvpWbBf3R6Eyp6V/ACCBflSnuHh9e+Ojo4uYalt/vH9qzAz7G+e/5Nf/02l+VIOVEHV5kVwUecMcJIEtNhCKr+cDgLzBeEWqCQmAKOesDOwSjMRKZyIEqa5FyZObe+jTJO4IDfpUyEzGzp10nII1aCh5ybSODH65UCrvx5OCRK5Sb+hmX++b6gPa/EVGjTWcCB5pwV+qk8EVApL9TOEYG5Zd1BFirLoyttoKzZpKsxsC1OJfYyDMCFiWBJUWuKC9oim5BCqguhYu1I562WYjmNIbk7wGIeJ0+GIkzXEeZlvwoqqQprpi1LEkCJ8shdMy1g9dFs526sRsRsZkKUnAioWLzOZCQ1U02WLI6gCBFGISzi5zzKLnkIhiBSeQcnUTz6kQg3BMvRjikx93nsbb+t95vJYrdARfN8AUDODbQLjGyrwjnSDnTQsloeaOJXFIHnNdMlnw/s8u93uVLQ4Rhb9c7zU1XV2QBFzSb1ddgcUc6B5eCKgojIKD9Cer4Tq/oAs8F8iHDsHpFkJVbjQuCX6dzB6xcbs3IaIJUV043PpnPWuFj7vQJWFjU7KU7k50VshbEC/l7CyDw4rsIz6PQ5x6yyDZgk0MeZWVlZ2wWfuo3zBIWSJ1eM2G+aJb1pZcAfLzpvnv/IHf6I0LeVtVOBI9/6pOQrlA4T2E/Y626YDU/n3A6HsKcBZdwoGJOsSJlefmERQkuqjGdjy/VyqWaNJ1Xxv5VaiByppuW/n2eU7l7K09C9vb7D5j2TYPT5exFNko/yklKX08UKVn9xP4NfH2fYWgyyxfjKg6toQXfch+yICMI2rVLZVM35EQTUNBnVoEALVjIi1cNBQMdInFap4Z8/EwtDeg6br83q5rNsHtKV3wJ40NYYfl/JmkujULjwBlhKr0aSszfczrlCVkjfe53xFdNq2M+q1qkmZCpwAeCqgkk7YD9qwWxzKUAoqyxvuAV2bGq7p1E/QsLCH5zEOCtdILphBQ8WuBNSd2+kIgZpnwX1owqekay7lyvKiFlHfeWLg0vtAC4o/Q6Z/sACJTunxFutqxdH76kmgFqrL8GJ+pm/VjqMCGNyDJtDccKGfjE8DVGJ2496SJRG6P+ZrXJnKzkhbgwQrYEISz0H0rB6pVlRclH45VXbLVCakg/22ZCyFmcUMzcoBQ0zJztDvg75hnLXJaZz1msYLpoOgsbQ5LqC6rVw6twOHpORmldYADU5Kp/fZH/KpBU3rYz0kzs7VtFzogltKj4t966U3z3/sJ35DqRyK26j6pQnwjuHLwheZeioVPh8ufTS8DZiHQS7LUr+v3EpFjjIcqcJNMljLVVGhYsTIk7BnwiZq4XMtDy5c218nwx5Fq3S6I9rPkHTuZHpOoIAShvqpZ6Jd+LdcHWFaMlCUT/6EmSxax/3IudQ538PE3zz/Nz//a0rFUwpUpqseVZa2Frb7QwaEXQpK8kJVeEKp3QOr7CGlMj4unPkY+yjJi0MPgqlKRYEa0gEshGxVeNRmWaviJHEgxMtKN7pGaXFxCU/fkJFm+Z1/BeqN9vleGec/4EgQ31MhyyV4T8UeqGRyDjUGh3OH0wZpgT3pwACsHiWGmrVCQctfvoCOzaUbWcG9vIjCcVf+TlbquqITsN5Jr9ejHj0Vk9ONl3K2oyB91lDiQHaIfh9qn4ztYGMywaNBHPkLxC0lOHDzdboMqNCZPRLOUNlvkUcQr+WqpPGDhPkkj0jh+wmo1zRXL2XfWeyBSkge7i3JaeawFyrXhm+umX1sN3NpQ+E3vZvO0nCWU2EDESyfgDLy5SrchU41MLRQ7BiDVA7C+XiWm+LwTZFAFp5EjbBItiYnutR1rfXgSrjx0I085dKojc73MzMzvZrcHtp9hpOpLJRss80464JwpOGFH48q8bEf+uVsP/o10bfOQQY0aYtmT9pvnv/kz/8zz12Ei8hVPxa3nh5cntvbqguXe637Hr4a2PSkPFyi6jzoDnOpRR6d+gYOod0Qj33j+t5BlETXpgE2fZhwhUjMN0LgHUQzt0MPMsJIh19EOCwdXAlhi6IHpipnB5lwFBYXNhYs5LzNyEhFcyGStWYezv+rgn90dldMS0ozBknLxYjBtba4IwPc5TK6PIcivnn+L777HaWclQF1oAa0Y1uqxGmd0Ba1vwcnd00ncIhCGJqcgLNqrYGn8jJandEIc4eSifBlEfypbxi/O5j+6kjI5kw13Z0P7StDsdvH4ICMqICqtuNh6b39cOSJn0QPuBV5GKtdTHFFReugRVhDh2Dl85MTkoESbvHIHykxP8A+IMkni1I8vAVb6+QfSh51ANRfiClQCbMOX7JG2DQypPKJrgu/dz47wpxhMwwT8mflcj6woYFO59oePt+aD9GpfYBBVRF1G9TAlutub2UTTRlgyRMVAytpc7fD9iB9mTLql1epuHVPFHF8OQTcSRiERZWNL09SwNeTjgUgWCnVvB7Vwb70sMe5sN96AIPP5QGpGIQq13phFwSKMVBhhn/tDDRD97Lz6iwg88VTB6i/seNgrXxZaAQq+5YyomYSHRjfAs32nmn4nrtJWVDxEhEj4lr6DQwU+KTlbTsY+KzWaOLIudBk1avg9qxgn18pIhl6mwxfx9VdKH9xKWA0v2LmIQohjo7379+vQHnLiJ87WXSp9Ptvu2P3dUQjn+Kwuu6LdOjaikNHMQdqP57gBdvQYcmFlqkCR9Xh4D34tsMSArV0hwahdhK8A87p6TH0XFLNpaxbKPKRpRuBtzxh+wc4AwNGRCYfClTKTASqYh7MHdbNadUPHWSQ50C6liUOGsMddWpfTAiUgP5JkEvWet94msI2xf5ECEmI2PwyiTMgbjJ2A3Fx34/+wh8r5Ru5japSnwK0uKS+sC1PXc48jMjAIejd4VNWu9attpJXMl7EOXIIMSWydQSrqcGS1NWVy2KFT0WldtXhKRJcUgF480eB7gC2CNQasKjKeBDinAWPqfQZqRkWwO+RD0QxtHSmqrCwuH8sP58aCC47CaZ/NGlnI3V1dcE0+MiEHx1dlNx4AGP/DRV5OHL35vm//pl/rpRxZKAynXCMiybrfRjnUkis+LAGKn5+a8gZNmVmZKKGfVGBa+uIEY4ugPFJbUcvQtxDNY3+HBgzhNxv6k1opI4u/q8D74mxs70XumyG3NtJKDRlIAtkAzG19hWoS0JOX/jHIeppGLXNWuwM0dT2Dx/1vU9W4EbbUlnZkQSnhdhsVqzQOFtBb29Tt3gohPIPO2pBoo4gSs64GpOtlvob3AY/lkCFVmQhjPBwY+PhZwOZnBpUE3sUYbyyeAuYLdCWlPl492z3Xi3up4Kn2lGHTM407qsEwlTtQcgC4N6zB1L4lJVvUOnOcT2HVaJmddytILQUK8iv7uUu9KXCLVTwjUT6oYHKzkLr5XHp+nINdSc0CUjezjhSH3wiIiWDvvBfxGZYKM5P8NyjEG0jHNWZ1AEYiC1Qza9wBvJcaHN5UvPLiXb9PVpFvmkgzGQM6rUc9n2pGcfRFG1fKhy6OGgeeYFdMNMWnh6HK4z8gAoOLNuXNggJbzjeumGPCAEYlZpKwuD1R42R2st+2Qi4VV/AIWgXitdWk/IrqPhxH9WPSWBMoEPKmF95KiZQF6Xe21Y8FljWxhXkCngQIG5gnIAgD35ARuCTKoANQGIJVF3/Nsxap62E2+YDJHb00G5o+mLYXidU8/OwOOMFNKWZyfkCBNOMedoKP+xcOZwbp+3fXa7hNR/E0QvUBBlq2y6VdXFrOiPph0y2rYP1hebp28efp66+4blc7ERGIlr0joFjMOT1z8J8rJH4POZ98Y106h70rCnxpkN67p73cCUxKxFzpKjieqiwVWCQ+BedANSf+tn/XimT8G1UUtcOTR/TQWFYAAJQk1ExlpvECN9qIfhYmM5hc/C8KxsaUgDqSyhbvgS+fEClzuy4ZrmkVk/NSaqWxbYXBgbKGAllUYWUoc91YLMCa0PpeQwGiNQXANR+BbqkJV+Np2rkhv9YFfB6aBBihBMhkByzwiEgoC8Nbb7m10rfTkSEPjTxaOIxtVBJa9473jz/85/7G6URwwKVOM4tYO5mRqR8huJKgapZgZnKsJogLfWwfW4nURnvcSABKMG1BI3W3CkjjpTCf8wRy9lgKyqBjb4QT06XU0pIoGIUtbN4qRc589k9tQ9ZdeKfP2pRFQEVpHcMpEG3+zKqWSz/BGNyT/KGJ3Lh0L0sKDxKmrE6ODgSyS78xMIL4RGiTmJzOu1l7ICqvoOamkuJ4FwKElOg1sN3G96iJl7auJRnOkY9XypokMuegxYAS8dOKTY9QMU75nRZqMR4z/EG4SwqUVccvqC7WcFYWrPSJSBh9a2PdPK5LL+Om0wDl7DzVANTYeX0f6nr7+rqGJu/NOBQMpBlQjx0T/y5xw0xZLL7x3/i+8Ql7PfcxQyozA4u4c1+G3mUgwJ1LNLwnW4NcNfrVFUfZaL2PITbTgom1GNR6b0OzCul1GM8Pu6+Hj6akdA6rHpFnQwhhhXcDKOkoKXGFDVxhou8cKxEuSFIYQ2kfBhh1CMcq4e/Cyp88ai28+7Wz59V0CdXOo/dTK/sD0866pg00cI96HcgUJ//qFIGoat+Urc+Ad+jaSv8yChNyHh/dXV1F6Ehy8AROJztYH96ATzv2J5dTye1rNajNMmiAlf3/MsXPJ+cZFq5gvWEMI9tPqNtVHnOHDvTHpp/lyWYD7bnwh11GUBzZDjgg9S903DWZ4p4qYtwh6L0JRjQ+PgUTEJoRsEslvr09dXVqkfTIk5hh5p9j96mYRHhRxSZykq6oEkHQP33v/9vlCYdGqjF19kAe9qkjMiMtuOpE2rQj5vGJy3tYCAz7tNtJi49efCZu5eqLass+aW3dD1ANVe/yrYZUjLHL15MmgXOdWMcOyFtECOIVFlDOwvCH5i7zC4Db6LBAYXzAj7Z0j1b7qqo8PEHJHkHPNc75BMs+A3JKUqw8pbe2U/c+JNJJ4CXaM3mRNcBOlkBleFkHSWNVaa41doKP6qOukaSpRzpEsfLngFQb/7vmACVdNNcZXXhoKeSYTUMFKYzRZx0g3CWmr3LvDyteQIWMOembZXnyfaEkICqK6qHTpHmvkrvLBS/d/Wxhcsa9R0ZhQ125WTYdOHxB3Qn9tBfTHBFOl5YklIz4ABfLzH72bAbdoR6ggZ3nuPRG73V1DPUy+DTXfnknimuQrXk5blwgzuRLDBCIZIpPdWP8ndgU9unIsI4i6ehn5f7f/zTWFhUHZxSC6M8KUMobxgAerKDYeBfsGoIwwj7gFHVsJZbfFDUYGnqqq0TNCJGE4FKOnHrVDZbvpgDe+BpFb4Nq0rsPgqEju8z0lA7cgslCAoThNQ7AHp+U75QVX3HctZRn7BEG2xylCzSvbaSFc8M+PB8khvf3It3ZHJCWB4Af7deW6AFFoLY+sMWPSVduH0jHyI50Ro7d2fqoXg1/2ssgEqG8GQ2zcI6jr5TWxlJKsGiBoYSoEvU7z1qSViqxmD67inPnpMSvkWgOnFYjB+cku+/IALVJwH7kWgXeNvR1NSUfF5M4ugTPtyNCw9LKBmXWZL+TJ7dyvGJYz65d9KvwAcIzAUWOJ/5+QA1RO51RaAlgaorpt7mU681vz9CMVnObpAuurqHdPR8admfQAWgjgKTFJ7IIuKl/u3NLvb5KVB/9Q9/0Ue9YW5CtVGr9gDzfHulT4GE4RPmFWUhA2rGS3HoCJsKfiQAVb+IzX9+1meIyR+oNK7rEO0+p2nfKFT0NfklJ7+lHwcrr/tfgjOO78nnuiu9O7UAABvBSURBVPmUBqGVLJecVKDvmuUszOHF8oQ+5TW1JtIf/dJ5IO0lCEgVJmHZ9rEtCdrS7zgd3QmsPOUqwTxiBQsVZ3OfFJH+dpQK0+EUqH/8hz+tVBshgJr4FsfNNS9l9kUpxyDhAJDEtSt+qgkfwvQ4AKh8WXVhA6IvaU2eOilfhkHiCi931BRh+tth6dvMXG2wGtkbVskVqYDBM/g4vGEBqPmt3lu40rfzqfPN/vMfZB1c+gtWXT7flU+8z/OGqLWBZBwfm+nxdLpgh1ONZ48B8aKEaiCviinvlwYkZRbH6WLcQs0CD+3NzY3LvvENAgxyM2fG/vfffzxQh2qQn+Y0RhoGUNENgIHl2AitO0MwBqAapozV2PSEpdnyb5R5CwuR6id94sF7bV4VUMgj8XyCR7ipRKAe2D2JGu94zb28zQq7xM3AIpOaa99xLPCbuS7tfeZZsxYhmc/ptQxgkljEWFXlWigVKQXtlR+xSanLIzm39y0LDV05Irmki5z92c7jNeHWlbOWkpoKjbhAMu2Vu6v+y/PHA3U4Fb8Dm+AFHSQ7UrYU/6rf0S/J0OCZdg4aVb3BmsaLwbGQN62U+4TQbsBm0fu+uIm6x+TD0XMj5m+yBPrESVOSSWVGaziN16jTQMZB0Hm+33GFgOyqIVz3+OWR56P0io75JK4hkfrPLYADwQjK4GZtSk5NLcti84VhL/nf0tyypBTpAW7DISePdR6EWulbb2IA1OL5l0DrbiEDQfLjzZmiKwJzPEDZR22+1sgvMgTjTfu30EItWWr2TbWogNNcB/RWfMP4cVN8K3BxjMPJWHxTkY46yDCTsOLKMOVtfWAgsKgc1+Q3AxKL71ixqLENGEx0H5WSSYDBUomnv8VLfsM8LH+RQ1C4hqccNG7xRvrjvYVWxOE+wgoIHDAJefP8n/3sY9uo6OAIJAgdLDtRKYyQzkMqePqQjxoCmDDgosKuwsRt7p1/Q7YDPEMDd1wNzy6Af/AHYv4Igxu9sKtv19ywpGR7C07dyRz2JEADUYua+rGPGA4u9cd5ijgwL86KdFGwPDv7fvbMUNPDJlzgBLsPZc/lT+SPlfVCWVtWoGtfOsOzyQXtYFezl02lN7PXrRRVArIIuPn92qOBGlMtmGuL3tORZnbOFR76TAdOhkE+6/19n/IWeL6sEmolD3JiKqLAjBkHMVlD1quioj4cwQ9YsEAtqu04bK3wBHJ9YpYEXIWFf4lL/dj9Gjm8P12ZTrybGIRVJaAnLgO2cAPaarwbvWvbXpubmDhrPZiYuN+ZW1lfKjqGN/27Rw6t1jNdQ0vx8wIqk5fzrCQXW9S5pb2Sy30otFGgAkBSV3D4Vk4vLVz6PDQfQ8WUh334dWM+HRez5eZmYw3A3ntrfspUfwWdjBX/j+jh6X1pMQk9OFqlc5r1Ti0x28vnxqaTQSXvCuHgAbvToTZqjVq9EW4cajjHz6x1OvVGtdlud0AULDqp+Ojv5wRUYizfbMqnrRnb7dAkuJ3SsgllFwWg8iltLTq/MpziNBsOzKmUVfG9361frGhvE6tn0UBIZHnrB1SmvLq6usXvYbSJfMHhfbQPN0xLp2MEVFLoVwz+t9K9Jz6OLT5V1Y/DxFHrWH3yQhzg8B44FIaJAFRbR2AXeoo1TQVLPtizMAlEesUsybq47Ar4eMcppAZC4iHkCxkr0Oyb5//5u9/IHoW9DDHgHywOfAXBHod9pl8RrVPTu/6IsaEHh21Uw0JeAE8ydPRuKCKDgGj+DyJ+a6T/3TE4I1LKPw7svPkzjN8/QgNvnv/ST3yjNH4UQFXKUh5OAmpGnwLnBkLcsCsQP1gdiEjwrAwz7xMRf5JIEb81SEe7eLgCtUDWSof+h7eOlxT2pL8xBmogaqKQXgCqpeE4sDIPwiXxBMc0Ak4qRQnCShERf0HSCuSJFRb+r3fkbBYUvM6hXrDBY8afxkIDnxVQYXs13tZe6Z2YDJfD1lQYKH4VgGkRQKFjKraoviz8wI+3wiMmz+WS3GB9o8TvYqiBN89/69e/UcovctXvV5xKGQvhmNoyU+n0kH8f3p8JbX0TOozJ7wdYTy+C/ONJ90pl9LhhUIH8YkkWVWIa/31iDbx5/td/+o3SNKIEKkWUUt4YTtv99mWAiQxgQKHItKDPHr+tcEIMzCglqK7FiwC2AQ+0U7BnIxKsyI5AUec0Ar/46wANxBCo/qWlb44MOj95AER+T4LfGtvW6fRV2avp9R0hlbARda3rSNPDus5pejWqYL4osUd0s3wXXAjv0wc2e70M4lcRNRBLoKp0nbDuiy4XIeUVFTsrbZ0P6wqj0QsreU4BLPqDybj1Pau1JAeDho9gXLVSOsi5tNGLZAXb7Rq3LKYSnH6IDNTw0obNSvylMg28ef79v/pGWVCVKlLV79yFGbIrnDRUX5aWplpSVxMl1nLoBS1WH6SFN1GMvZkuf+JnnVuw6thF0wjKVEodD4FAOtwWF/g1uOGVT5JSUO8vMznWs94A6wspUMPylyJF4CgFi/9Gr4E3z//yb79RGi0SUIsTAAzZ99D50O4iLjTek8vl0AtS5lJTU5CEUYuuWMEFS1woo24r/L3aA9TwEDGvgJ8ZrzFsdoieuQVoUYPI4ZOgurLS0X9rigaoPvHjNzHUQOyByl2pYTNHBGruO2GbeLCmuKEhSC34Awqo9PgGopfgULdniB7uamdboc0geHkFQZO9AL8CcAO51XmAGl4luvH6rfTU27WByhc8dMH4LHrSKcqFROMKl4Fpwu4HR1R0IQUxmJCZANnCfy7hZYy/DauBpwEq04quzyUuigGmouXZOl0pQlr2p/rg3zwsnyE523C5D+0EUjw9tTU2NSIWe+HLvjPTWZ1K3YVB+5oDmrnq+XSKU75gVClQVca16svBPB3TuczD4r7zD+gYAW4SFX2QAkqjUrVsU9GmxDQ9kEOgem0vGUGpp6axSePelx26A6D3RAmr8PjLh2ngzfPf+cG3lEZVVPWDRVWpqV9RCXVxy2s92MhM2p+EvRnsH2x08VY+nMfjuMXrtFHYB3U9yaRhrZfNTtpqrE03wd440yRxgoY9h3giiUhOnAOrCJTWoSUeixoJJWr99As7IdtW2GyqW69F9JPi5itcO5GB+7rBG5oc/bNcjjAWqMuatO9lXvyeBkvdAalGczdbh/sFD35H//CwdC1GjP/EVANvnv/ZfxdjoC4XE/sVYqnETVT6qtt0a7aBz53pdxd3CaaQS61TqVrptbWLKWxuoMCzpbzE1aHqU5gZ5QwvmfIyRCN36F1RIgEV1yKBW/geAG8jIyPZjQqRcBVSOcWHPcXEeAuN25RWGlzrXkqhLVa2DNbkGF9R90LKmTPNuj1rBrqsu5ANkfR9dPMIWINSzajaDJb01NJR+qo1H7YPKe3yBJQixH9jpYFYA5W3mHLf6oTONVrUxjHooBusFt7U1DM7nWS1gseTqQF890cBMpwh/ZnjoBfOALcaNBq+ABfHuPC8Vs6wZj8H4weUvu0pfeGCFPbQF5kt0GpwDQ8PUZPrNXohNKPuXrbrnjXwhqxbOhTBNA6W8gar1cJyhiu3tqiGMoU/PAiWNDMOzGl6aFFFloy5EQ5Ng8xAlLMc/WguhLS1wUtCBtLh2trtETWEEPHHD9ZArIGatHRpOlcfUxtZ4lap5mG803C+vojjSWMj8+svxzjL0Q60ChGo/OvTPLosv2n7YGWMZ1/UwQ6379DMsQlngu3ifA/DhnyqO4Q3LyhAESXKMt+5WdwCO1jtzudgeNKyAkvLdl+ur5WA89Ph2r7HoKbugQCatzhMgZyhjSqNo7puZiDU2foUrP/JXu1wTZ+x/B7kEcLlnW7x7GvKGbnHKeYaiDVQ84tHrQknuMMPLBV2q9x4oGX7JNG/y+K4CZhDgg1tsiowFwjUnn6VdjuNS9tbV1cM7DRwpmu7SuU6np3B2LCbCK4Sw8MmfMh4SN9yAFSlGKXxO2fe4bZfdwIz0ggtDBac8vVw7AY0MJoFkTnrwdvKXVi1t9wp9I4Kzw0eoPaDQ1/BZbNK27cHV3N6psMwOCTJ9pKVLZeWHsZ/Y6aBpwAqa2L5goksaKOqinIBr22w+WbVpikAqDWnOuIY4y3ncO44o64EeCZt61WMVvsWcM6Xve7EtWH+OCVDOFgLY1/3avfA6DOgWtG0htMJ2MbOGoOGS23focEIAjV1pQ2sZvFND2z+3N+1AusfNclbOWrwjYFqfF0w1HVghCWL2p+V2z4Fu1QSdeFepgGAumTYcqvU/c+GoTcWB2o4/T/+3ZvnP/idWHWmCAz4o0UFGBn6cjLRog7YuKwOfXG5S9+fwU1AjQ8W1dYN5QoWlYcNQomzhyvtJPryus4LaCRo5goxS4s8n1bwzAGQCMygTlyoNFis60vPRerNi1z/E5WuKB3kWm6EwEjadSv/mu6ZQhIrkuCQYWMh7GyevQOJqtRLLGfaF9LWwZ6HXqBOuAW/U+JoTEKLqrF2GJ1zucmVTByogl6f7O+b5z/y4zEDqj0Bxk7hFAU8/8k8iBYVgLpZVzhb31MBQJ2BoxWYDZuhCfdjAqAew4JY5wwANbGtqaABa+DcHcSwqs9kuB9BX5MgQDW/hnBQax9qhTVTMOPvDhrQR2VEVXwG9T6X3SBsbkJGyniDtHVUeSrHvdbprlkudZjGglOCJKDK2qhMUfaK4AADgSrT0aJquNIiezL0xhJ1i/Gq30fjsb6JKVDBolqvy+GATwAqbL8gWNSSw+VUzjA4ZuKSltQqMrnea9gsVpE2g+YdVOvOMc46d5hM27TQxa+k+Ss/M72kGA0C1PUUXMrP5Q8wzCKMFcA1PX1U6qSH1I9+X+iD1cPhWgDs5jQuQdpthwKVUb9nNUcwlAtv3QtsEKC6DzUvfIEKi7YM485kaGzba5N5k2ynlJBixF88UAOxBKoK5/ozndM4AuW1qGj/BCo9BWSSxDkutVyV81pT1giQ0a9BK9ZDIlCZVxYBqL6ZorB9r8HGJNcDkBp6dX/UwFnfCQdWBQG1T/ROcW+jlRF4bJ+1cLtS21awqOpr1jQq9s+GxoIAdTKVk1nUVMGiGsbBonI9w7s8PxZk+ZaPBPGbR2jgzfO/+g+xqvpV5lkrIGhaw+ef9UPVL1jUmlWJ7tEJFAYAsrPW815ZUvtoNV/YYGmXAqwuCAM8rk3RovrW/WA1XW0vEkZhwN92DSf4Qr9cf6g5LMRQwgBAuGGAzqa51dUCOGNtGqTIg4aAL1AZ3XsEqkBg0oU2KsGTDsQ2KgC1STpqQT+VNacnow285v1+Dcc13MM2vuiME6en0sCb53/x/ZgBlbSUUIvKfrCrzWNiG/XSIVLVJFa6MADQxBecZPDLDmoDixtKR6QQjkQaQrVtMYgW1ddMEudxmrWjeJAzLLsETGp3s9AuA1f844tr+sT7p3O3xeE8MXCaW5h1YhpzuTGYdqAEFtV2hEA1LApVu+PIJAEV2qi5fUIwAKrmRrTC7gJ+Tq/SQ7PWgqcKsoMXbMBOKd6k41eP18Cb53/0fcVcws/1gy/SSA1Y1O7U9CWYk5Qs6oUdC5fonI036ApCD0TTJLGGPWpQVQDUykTawoRdX5yCUVrkJaD6DpWStlQue9qdyaV35xUX24HcL7KKBKDq8dbu2a/IL0/EYa9dhuPH1jNMfGlbsd0xVMJbr/MghtashlMoJtwk8Zzn8wecjM5p30/isk4BzQ4Ho163HObgtjM6VSdMS+26aTL2igwYR1UxJzjCgWRJ46wd4CLml2z8NmYaAKD+XowsKnThYTf9TGdxURHsCO6YES1qyosuOGNXXb5VlnZLsenowaItE7syxb2WmWMHhtDftl+5ANFqdQdv2NbCE4CdT9Ez2yZuoe4omzP1tAs0kaZZoSNapG0FnmzCtGpQSpxtz0y7MJOqokOO7W1vPy9/C+cCTbS3rz67Gz408Gda5rQUhsfKDtx1Z+0w0XqeBwMFF3uFkzNsxn5fe/thCzFPZXNJY0K6PSYEKql7gVnR4KQvewieNiFSDypS/GFUGnjz/F/+teIIESyqdgmGKnucdEpHN5XK5eeoBmAKhx273ri+PoCZoDPaSNVSz44VcdWSviOLy7iEEBvvS6DXTwrvN64HObb9Gh51JKJF9dgp0gmnoJ+cQptQToKHPw4VgUNViB1W1HgMIJe+Bp6yGzRuvbuR7mwGPn/5yzY8bJ25QwacDQ4AgZ+xIfDqOknLusFBrWSYADDcFKsKYUtUL0EGiO4Go1xD05wrAxfauKefYihFHfDN81/+LcWRwgNVBf157PVTu4KbSaS9VI/AxA641gPBrwhUQqf3V8TWHrEvWHiWhuARqJXp4J4ixsmgm4t6zJT92sIVdMG4vA8JQCUD0E8CoAbPC3j4Y5yCIoaMw9w+9H7cLefCgYqw2yzg0qliuurxBexDD3/4DWiDJEKnTbjDyKlwAnDnHL4UiFYPDADVsFlVCQtcDsDzO25Sg6s/Fk9jCtQJKLbXMN0EgmlhlZJpM5F0JfT2SgNQ1g0BnPYGmKK8EJqoELRurjeF4ohPmatTVUqhAQ98gkOex2GYEzjSL3BsSW9TbylESeoFmsujYbRwaiOfjENPQUhcM8WulBP1LRh5rqGK0Y9CXU9J03ABnSj9Jcun1MP0GDipNE1BHhJ7OEM9pCRQezlMqzVm4k19dklv75YdgjDgKJBbS1yZLLeF2yIHSTr+KDYaiClQ2zk2eYTB4iJ5M3wujqgbc1wtN+kCLUPTFd+15HP0FHQxBzq3az/FxlnTS9fdalWncOQzRRA74QPUZitnWXJuctldLpdrPgmO262DC7fQASPFm7xlXTTTImfPDwKVhbrecqRW5R1ABV4Dk57GDsEflW/qL4QOGfb6+yp64BSepL06TDexh03uhwQEAtEAzDl4U3nwTNwcBaqD9IJKlbqrIXtLF2+hevT9BBdvfv+Xf1Mx2whVv/kFC6egUzDq7tLSFitod5+Q8tZGSsLwlMq8Z+ELoEUnI3vrbPZNUS16yxsXcz2u9iUDCELBUMGYQpGVPWtZTOLSRyANx6vsM+i+eEk9a0lq9N76XJnhWJiSoyST6VKrYqpnTKbcC2j+FjZuUg//Nmrc6TiqerTUlNwmnE6eOFFKvRJ8OOGNrkUYxYJLUtc4DB4Mic1HF9hEDQgafxArDbz59h/8kmJeEYCqnm86wbPdgZhnvR8E1/zAwoNj0NFLyodIy/Yk7YTBWPz+mkTj0F+R2n1E5d7UJNd2FXCmDQS0yr3t23Nimqf2hVaAD2d6oxudWht3ra9N4Qos3QDw36H9uoopuJwGpAEJA/7G+TVcmYKkbZtPFK4U/HU1B2ZUQbR4EKUaiCVQVYn7wkgpwEu9L5glKodoasSiBKA2CDNQMiGFdaoYAkyn5x/eChzAK+Dewr02HoGLUyN9BoFk8TGk75prn5f4DheQSjHFuPhYuqye4HFmSrpHhviV+CXiw1V2ozScLEr8MhoNxBSoRDoSD0pXvsWpWNjw465tbW3Lh063IGNA8fo/kGLC4qv5VC7rles1OP9P0sj+QSPnWmQWHHwMDKxq7ltbW2WbtEESUhw594CUpUABL+Sx4teP0kBMgRpKEk8BkqWktLRcDTso1dFSEYsxA4AhvSeqHPCw6ul/ZePSTz3jBaHSC/OciiJxlYWDA/Vg6MmWlpYEQ1WRyD++595zEYlD/H20Gvg4QJWkIm+zYesnPk1qBnoQLAYIGOERSx7ClZfAgY1NcI7osc9IgMRZ6S8y9E8V45IdXNWFVGCPxCsgvoTPgBeROMXfK9bAmz/8iT9RHDhCZwr4SEUWiiVuprdWUgpjksEpZHzwd2Hzt2BgyRC4JWpwVsGfUiwJqfjAikyxPHV05Zp8gOoTKDjL+NOPoYE3//Hnf0NxOhGACoUatlwRHxBEO3UXvnb1MvHi1njScH58BbOc4PXpfSqXXHgc/J0YzjemNyg8J1OaGZjDhTUAtzBwIXslTyL4tSx08ADxpzHQQCyBivbUW8SBwknvdKF8nKQoUkCJGyG6rtLenFZwF6jp9hmAlWLgL43liSp/47kO9RaeD6x2G1/Nzc3hthZSup544S9CcQ0fK/42Kg3EFKhRpRxFYKIyT5heFMPMFLfhNwAbBZfwQbV2PF0Ojo0L+SGEjx9/+7QaePNf//yvKU4hQtWvmE/UAUleb0aj9pmFM5zEzVfU2vsqIrz5V999ozgjnwyo5o3sms6WOZZf7lQsbDzgV6WBLwKo6vUMLvsGjhrvHRU8UL6qIohnRokGvgigGg/Bpw9cQ5OWQnhHKclpPMwXrYE3/+oXvqM4A5+o6ifl0kaTwnpAxfLGA349Gnjz3/zMHyvOzScCqvM9dPeBmkKtiFKcgXjAL1YDANRfVSz8pwEqs51OccrNCP54isWNB/yKNPAFAFX3XsBpHKhfEe6izsqbf/sz/15xpE9jUSfFQ6Ky7uNdKcVF9dUFfPNvf/bPFWfq0wD1RMPXNMEa5jLRK1uxuPGAX5EGvgCg3nOmk8Z8jp2LN1G/IuBFm5UvAqh8Q6aVry+KD/ZHW7pfUfjPH6jknvalktY8Sz+/IvXHs6JUA58/UCdx/xXOdIkbPsTph1YDb/6Xn/sbxZn/FJ2pwgvcE4ptly1qVSxvPODXowEA6o8qzs1HByoY0XG6xY+NbkWhWNB4wK9OAwDUf6E4U58CqPt0B73sIcVCxgN+lRp48z//0x9TnLFPAFSyHQeq4vL5mgMCUH9Fcf4+OlBh0/5NutNj9pB8xZ1igeMBvxoNfO5A7cJNItneXdhvP97r/2pQ94CMfO5AbUMPP8tLZ3z30QcU7tcU5fMGKuNYx43KrW3xtfNfE+gekpc33/v2TyuO99HbqO6DZGyiWrvi1b7iQvpKAwJQv1GctY8O1EnYDB2aqIfx0X7FZfS1BvwSgNoEZ0R8rfqP50uhBj5roGp3YBMfjr3HfSbjw1MKS/QrDfZZA9XVhKelWKdQ9/Hhqa8UgQqz9eZ7P/ONwqAq1cduo3bC+U0ct+lGAcGixut/xSX19QX8AoD6TtB63KR+feiLIkefP1Dz26LITjzo16qBzxaoRKWeXIfRqbS38bWnXyv4osnXm+/9/LcUh/+YbVQ43PlFEvSldgsVixcP+BVr4M33fvlzBWpeE3altqQjgb7iQohnLbIGPlegQh8/D6ZPWXYhXvNHLsUfghCfLVBVJPHkLGPhYj6+SPqHAIaRs/jme38aTdX/dz/+8eh3/v7/+t/+n7//+4+XYDylz1gDf/u9P1IO1G/9ux/5qPSDH/zgo6YXT+wz1sB3owBqZAMd4xDxuagYK/QLZve7nzNQv2C9xkWPsQZ+60eUV/0xTjrOLq4B5Rr4lZ9UHjYeMq6BuAbiGohrIK6BuAbiGohrIK6BuAbiGohrIK6BuAbiGohrIK6BuAbiGohrIK6BuAbiGohrIK6BuAbiGvjh1MD/DzhOYBncOepNAAAAAElFTkSuQmCC",
          };
          resolve(ret);
        }, 2000);
      });
    },

    searchDoctors: function (_requestObject) {
      return new Promise(function (resolve, reject) {
        let ret = {
          doctors: [
            {
              name: "Pinco pallino",
              clinic: "Clinic pallino",
              address: "Via pinco pallino n.1",
              phone: "+391231458930",
              fax: "+3900008219",
            },
            {
              name: "Pinco pallino 2",
              clinic: "Clinic pallino",
              address: "Via pinco pallino n.1",
              phone: "+391231458930",
              fax: "+3900008219",
            },
            {
              name: "Pinco pallino 3",
              clinic: "Clinic pallino",
              address: "Via pinco pallino n.1",
              phone: "+391231458930",
              fax: "+3900008219",
            },
            {
              name: "Pinco pallino 4",
              clinic: "Clinic pallino",
              address: "Via pinco pallino n.1",
              phone: "+391231458930",
              fax: "+3900008219",
            },
          ],
        };
        setTimeout(() => {
          resolve(ret);
        }, 2000);
      });
    },

    // if no lenses are available against the prescription filtering, this function is called to retrieve the frames filtered PLP URL to link in the dedicated CTA "see available frames"
    // the PLP must be of the same category of the frame
    // if no URL is returned, then the user won't see the CTA
    checkAvailableFrames: function (_frame, _prescriptionObject) {
      alert(
        "Calling checkAvailableFrames().\n\nFrame object: " +
        JSON.stringify(_frame) +
        "\n\nPrescription object: " +
        JSON.stringify(_prescriptionObject)
      );
      //var filteredFramesURL = "/lc-us/sunglasses";
      var filteredFramesURL = null;
      return filteredFramesURL;
    },

    // it removes the cookie information
    clearPrescription: function () {
      document.cookie = "_prescriptionObject=; Max-Age=-99999999;";
    },
  },
  paymentInstallment: {
    type: "affirm",
    installments: 2,
    multiplePaymentInstallment: true,
    contentIdentifier: "X_PDP_Installments",
    types: ["affirm", "afterpay", "klarna"],
  },
  // dynamicPromoModule: {
  //   getDiscount: function (selectedFrame, selectedData) {
  //     console.log("Simulating getDiscount");
  //     return new Promise(function (resolve, reject) {
  //       const framePrice = selectedFrame.listPrice;

  //       const lensePackagePrice = parseFloat(
  //         selectedData.lensPackage.listPrice
  //       );
  //       const lenseFramePrice = parseFloat(selectedData.frame.offerPrice);

  //       setTimeout(function () {
  //         resolve({
  //           lensesData: {
  //             lensPackage: {
  //               ...selectedData.lensPackage,
  //               offerPrice: parseFloat((lensePackagePrice * 0.4).toFixed(2)),
  //             },
  //             frame: {
  //               ...selectedData.frame,
  //               offerPrice: parseFloat((lenseFramePrice * 0.4).toFixed(2)),
  //             },
  //           },
  //           frame: {
  //             ...selectedFrame,
  //             offerPrice: parseFloat((framePrice * 0.4).toFixed(2)),
  //           },
  //         });
  //       }, Math.floor(Math.random() * 5000));
  //     });
  //   },
  // },
};
