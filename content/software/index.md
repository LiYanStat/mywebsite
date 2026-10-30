---
title: Software
summary: Open-source R packages for climate statistics, measurement error models, and microbiome data.
type: page
---

## R packages on CRAN

| Name | Latest release | Downloads (RStudio CRAN mirror) |
| :--- | :--- | :--- |
| [dacc](#dacc) | [![dacc CRAN version](https://www.r-pkg.org/badges/version/dacc)](https://CRAN.R-project.org/package=dacc) | [![dacc total downloads](https://cranlogs.r-pkg.org/badges/grand-total/dacc)](https://CRAN.R-project.org/package=dacc) |
| [tls](#tls) | [![tls CRAN version](https://www.r-pkg.org/badges/version/tls)](https://CRAN.R-project.org/package=tls) | [![tls total downloads](https://cranlogs.r-pkg.org/badges/grand-total/tls)](https://CRAN.R-project.org/package=tls) |
| [touch](#touch) | [![touch CRAN version](https://www.r-pkg.org/badges/version/touch)](https://CRAN.R-project.org/package=touch) | [![touch total downloads](https://cranlogs.r-pkg.org/badges/grand-total/touch)](https://CRAN.R-project.org/package=touch) |

Download badges report cumulative downloads recorded by the RStudio CRAN mirror since October 2012. Release and download badges are provided by external services.

## dacc

### Detection and Attribution Analysis of Climate Change

Statistical tools for climate change detection and attribution using optimal fingerprinting, including generalized total least squares and estimating equation methods. The package also provides covariance shrinkage estimators.

[CRAN](https://CRAN.R-project.org/package=dacc) · [Source code](https://github.com/LiYanStat/dacc) · [Reference manual](https://CRAN.R-project.org/web/packages/dacc/dacc.pdf) · [Development version](https://liyanstat.r-universe.dev/dacc)

```r
install.packages("dacc")
```

#### References

- Li et al. (2025). [Journal of Climate article](https://doi.org/10.1175/JCLI-D-24-0193.1).
- Ma et al. (2023). [Journal of Climate article](https://doi.org/10.1175/JCLI-D-22-0681.1).

---

## tls

### Total Least Squares in Errors-in-Variables Models

Point and interval estimation for regression models with measurement error in the predictors, using total least squares and generalized total least squares methods.

[CRAN](https://CRAN.R-project.org/package=tls) · [Source code](https://github.com/LiYanStat/tls) · [Reference manual](https://CRAN.R-project.org/web/packages/tls/tls.pdf)

```r
install.packages("tls")
```

#### Methodological references

- Golub and Van Loan (1980). [An Analysis of the Total Least Squares Problem](https://doi.org/10.1137/0717073).
- Markovsky and Van Huffel (2007). [Overview of total least-squares methods](https://doi.org/10.1016/j.sigpro.2007.04.004).

---

## touch

### Tools of Utilization and Cost in Healthcare

R tools for healthcare data analysis, including mapping ICD-9 codes to AHRQ comorbidity measures and translating between ICD-9 and ICD-10 codes using CMS General Equivalence Mappings.

[CRAN](https://CRAN.R-project.org/package=touch) · [Source code](https://github.com/wenjie2wang/touch) · [Reference manual](https://CRAN.R-project.org/web/packages/touch/touch.pdf)

```r
install.packages("touch")
```

---

## Archived CRAN packages

| Name | Last CRAN release | Downloads (RStudio CRAN mirror) |
| :--- | :--- | :--- |
| [fmerPack](#fmerpack) | 0.0-1 (archived) | [![fmerPack total downloads](https://cranlogs.r-pkg.org/badges/grand-total/fmerPack)](https://CRAN.R-project.org/package=fmerPack) |

## fmerPack

### Tools of Heterogeneity Pursuit via Finite Mixture Effects Model

Regularized finite mixture regression using an effects-model formulation to identify predictors with shared effects and those whose effects vary across clusters. Supports heterogeneity pursuit and variable selection.

[CRAN package status](https://CRAN.R-project.org/package=fmerPack) · [Archived source releases](https://CRAN.R-project.org/src/contrib/Archive/fmerPack/)

CRAN archived this package on December 25, 2025. Source releases remain available from the archive.

#### Reference

- Li, Y., Yu, C., Zhao, Y., Aseltine, R. H., Yao, W., and Chen, K. (2021). [Pursuing Sources of Heterogeneity in Modeling Clustered Population](https://doi.org/10.48550/arXiv.2003.04787).

---

## Other research software

## paaPack

### Principal Amalgamation Analysis for Microbiome Data

An R implementation of hierarchical principal amalgamation analysis, with optional guidance from a taxonomic tree. Includes tools to visualize amalgamation paths, diversity loss, and changes in between-sample distances.

[Source code and installation instructions](https://github.com/LiYanStat/paaPack)

#### Reference

- [Principal Amalgamation Analysis for Microbiome Data](https://doi.org/10.3390/genes13071139). *Genes* (2022), 13(7), 1139.
