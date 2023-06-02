import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  const {
    handleFilter,
    clearFilter,
    all_products,
    filters: {
      text,
      company,
      color,
      min_price,
      max_price,
      price,
      shipping,
      category,
    },
  } = useFilterContext();

  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const colors = getUniqueValues(all_products, "colors");

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault}>
          {/* search input */}

          <div className="form-control">
            <input
              type="text"
              name="text"
              className="search-input"
              value={text}
              onChange={handleFilter}
              placeholder="search"
            />
          </div>
          {/* end search input */}
          {/* category input */}
          <div className="form-control">
            <h5>Category</h5>
            <div>
              {categories.map((c, index) => {
                return (
                  <button
                    type="button"
                    name="category"
                    key={index}
                    className={`${
                      category === c.toLowerCase() ? "active" : null
                    }`}
                    onClick={handleFilter}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>

          {/* end category input */}
          {/* company input */}
          <div className="form-control">
            <h5>Company</h5>
            <div>
              <select
                name="company"
                value={company}
                className="company"
                onChange={handleFilter}
              >
                {companies.map((c, index) => {
                  return (
                    <option key={index} value={c}>
                      {c}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          {/* end company input */}
          {/*  color input */}
          <div className="form-control">
            <h5>colors</h5>
            <div className="colors">
              {colors.map((c, index) => {
                if (c === "all") {
                  return (
                    <button
                      key={index}
                      type="button"
                      name="color"
                      onClick={handleFilter}
                      data-color="all"
                      className={`${
                        color === "all" ? "all-btn active" : "all-btn"
                      }`}
                    >
                      all
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    type="button"
                    name="color"
                    style={{ background: c }}
                    className={`${
                      color === c ? "color-btn active" : "color-btn"
                    }`}
                    data-color={c}
                    onClick={handleFilter}
                  >
                    {color === c ? <FaCheck /> : null}
                  </button>
                );
              })}
            </div>
          </div>

          {/* end color input */}

          {/* price  input */}
          <div className="form-control">
            <h5>Price</h5>
            <p className="price">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              onChange={handleFilter}
              max={max_price}
              value={price}
              min={min_price}
            />
          </div>

          {/* end price input */}
          {/* shippinginput */}
          <div className="form-control shipping">
            <label htmlFor="shipping">Free shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              checked={shipping}
              onChange={handleFilter}
            />
          </div>

          {/* end shipping input */}
          <button type="button" className="clear-btn" onClick={clearFilter}>
            Clear Filters
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
    max-width: 200px;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
