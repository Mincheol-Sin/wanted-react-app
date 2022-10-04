export const PrevArrowBtn = ({ onClick }) => {
  return (
    <button type="button" className="prev-arrow" onClick={onClick}>
      <svg class="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
        <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
      </svg>
    </button>
  );
};

export const NextArrowBtn = ({ onClick }) => {
  return (
    <button type="button" className="next-arrow" onClick={onClick}>
      <svg class="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
        <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
      </svg>
    </button>
  );
};
