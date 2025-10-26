import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 2rem 0;

  .carousel-track {
    display: flex;
    gap: 2rem;
    width: max-content;
    animation: none; /* We'll control with JS */
  }

  .carousel-item {
    flex-shrink: 0;
    width: 350px;
  }

  .service-card {
    padding: 2.5rem;
    background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
    border-radius: 16px;
    border: 1px solid rgba(102, 126, 234, 0.1);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    height: 100%;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 40px rgba(102, 126, 234, 0.15);
      border-color: rgba(102, 126, 234, 0.3);
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: #1a1a1a;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    p {
      color: #666;
      line-height: 1.7;
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    .carousel-item {
      width: 280px;
    }

    .service-card {
      padding: 1.5rem;
    }
  }
`;



