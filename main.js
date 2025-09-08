        // Mock data for products
        const produtos = [
            {
                id: 1,
                nome: "Batom Líquido Matte",
                marca: "dior",
                categoria: "batom",
                preco: 129.90,
                cores: ["rosa", "vermelho", "vinho"],
                imagem: "https://placehold.co/600x600/ff7bac/ffffff?text=Batom+Dior",
                descricao: "Batom líquido de longa duração com acabamento matte perfeito. Fórmula enriquecida com óleos nutritivos que hidratam os lábios enquanto proporcionam cor intensa e duradoura. Ideal para quem busca um look sofisticado e moderno.",
                destaque: true,
                tipo: "maquiagem"
            },
            {
                id: 2,
                nome: "Paleta de Sombras",
                marca: "mac",
                categoria: "sombra",
                preco: 199.90,
                cores: ["dourado", "rosa", "azul escuro", "roxo"],
                imagem: "https://placehold.co/600x600/c3447a/ffffff?text=Paleta+MAC",
                descricao: "Paleta com 12 sombras altamente pigmentadas e duradouras. Com acabamentos variados - matte, cintilante e metálico - para criar looks versáteis do dia para a noite. Fórmula suave que esfuma facilmente e não craquela.",
                destaque: true,
                tipo: "maquiagem"
            },
            {
                id: 3,
                nome: "Base Líquida HD",
                marca: "nars",
                categoria: "base",
                preco: 159.90,
                cores: ["rosa", "dourado"],
                imagem: "https://placehold.co/600x600/ff6b6b/ffffff?text=Base+NARS",
                descricao: "Base de alta cobertura com acabamento natural e efeito matte. Fórmula leve que não obstrui os poros e contém SPF 15 para proteção diária. Ideal para peles mistas a oleosas, controla o brilho por até 16 horas.",
                destaque: false,
                tipo: "maquiagem"
            },
            {
                id: 4,
                nome: "Máscara de Cílios Volume",
                marca: "fenty",
                categoria: "rímel",
                preco: 89.90,
                cores: ["preto"],
                imagem: "https://placehold.co/600x600/4ecdc4/ffffff?text=Rímel+Fenty",
                descricao: "Máscara que proporciona volume extremo e separação perfeita. Escova exclusiva alcança até os cílios mais curtos, enquanto a fórmula à prova d'água mantém o efeito por até 24 horas sem borrar ou descascar.",
                destaque: false,
                tipo: "maquiagem"
            },
            {
                id: 5,
                nome: "Condicionador Hidratação Intensa",
                marca: "loreal",
                categoria: "haircare",
                preco: 45.90,
                cores: ["branco"],
                imagem: "https://placehold.co/600x600/ffe66d/333333?text=Condicionador",
                descricao: "Condicionador com fórmula rica que hidrata profundamente os fios. Enriquecido com óleo de argan e queratina, restaura a fibra capilar, reduz o frizz e proporciona brilho intenso. Ideal para cabelos secos e danificados.",
                destaque: true,
                tipo: "cuidados"
            },
            {
                id: 6,
                nome: "Protetor Solar Facial FPS 50",
                marca: "nivea",
                categoria: "proteção-solar",
                preco: 69.90,
                cores: ["branco"],
                imagem: "https://placehold.co/600x600/2980b9/ffffff?text=Protetor+Solar",
                descricao: "Proteção solar facial com toque seco e não comedogênico. Fórmula leve que não obstrui os poros, ideal para peles oleosas e acneicas. Proteção UVA/UVB ampla e contínua, com antioxidantes que combatem os radicais livres.",
                destaque: true,
                tipo: "cuidados"
            },
            {
                id: 7,
                nome: "Loção Hidratante Corporal",
                marca: "aveeno",
                categoria: "corporal",
                preco: 89.90,
                cores: ["branco"],
                imagem: "https://placehold.co/600x600/8e44ad/ffffff?text=Loção+Corporal",
                descricao: "Loção hidratante com aveia coloidal que acalma a pele sensível. Absorção rápida, sem deixar resíduo oleoso. Hidratação por até 24 horas, ideal para uso diário em todo o corpo, inclusive em peles com tendência a alergias.",
                destaque: false,
                tipo: "cuidados"
            },
            {
                id: 8,
                nome: "Creme Anti-Idade Facial",
                marca: "elizabeth-arden",
                categoria: "skincare",
                preco: 249.90,
                cores: ["branco"],
                imagem: "https://placehold.co/600x600/27ae60/ffffff?text=Creme+Anti-Idade",
                descricao: "Creme anti-idade com retinol que reduz rugas e linhas de expressão. Fórmula avançada que estimula a produção de colágeno, melhora a firmeza e elasticidade da pele. Resultados visíveis em 4 semanas de uso.",
                destaque: true,
                tipo: "cuidados"
            },
            {
                id: 9,
                nome: "Shampoo Restauração Capilar",
                marca: "loreal",
                categoria: "haircare",
                preco: 39.90,
                cores: ["branco"],
                imagem: "https://placehold.co/600x600/c3447a/ffffff?text=Shampoo",
                descricao: "Shampoo que restaura a fibra capilar e devolve o brilho aos fios. Com queratina e proteínas do trigo, fortalece os cabelos danificados pela coloração, alisamento ou uso de calor. Limpa suavemente sem remover a hidratação natural.",
                destaque: false,
                tipo: "cuidados"
            },
            {
                id: 10,
                nome: "Blush em Pó",
                marca: "too-faced",
                categoria: "blush",
                preco: 99.90,
                cores: ["rosa", "dourado"],
                imagem: "https://placehold.co/600x600/ffe66d/333333?text=Blush+Too+Faced",
                descricao: "Blush com partículas de brilho sutil e acabamento natural. Fórmula altamente pigmentada que permite build-up de cor, ideal para criar um glow saudável. Textura sedosa que esfuma facilmente e dura por até 12 horas.",
                destaque: false,
                tipo: "maquiagem"
            }
        ];

        // Vendedores
        const vendedores = [
            {
                id: 1,
                nome: "Ana Silva",
                cargo: "Consultora de Beleza Sênior",
                contato: "(11) 9999-1111",
                imagem: "https://placehold.co/100x100/c3447a/ffffff?text=Ana",
                numero: "551199991111"
            },
            {
                id: 2,
                nome: "Carla Mendes",
                cargo: "Especialista em Maquiagem",
                contato: "(11) 9999-2222",
                imagem: "https://placehold.co/100x100/ff7bac/ffffff?text=Carla",
                numero: "551199992222"
            },
            {
                id: 3,
                nome: "Juliana Costa",
                cargo: "Consultora de Skincare",
                contato: "(11) 9999-3333",
                imagem: "https://placehold.co/100x100/25D366/ffffff?text=Juliana",
                numero: "551199993333"
            },
            {
                id: 4,
                nome: "Patrícia Almeida",
                cargo: "Gerente de Vendas",
                contato: "(11) 9999-4444",
                imagem: "https://placehold.co/100x100/2980b9/ffffff?text=Patrícia",
                numero: "551199994444"
            }
        ];

        // DOM elements
        const produtosContainer = document.getElementById('produtos-container');
        const noResults = document.getElementById('no-results');
        const precoMinInput = document.getElementById('preco-min');
        const precoMaxInput = document.getElementById('preco-max');
        const precoMinValue = document.getElementById('preco-min-value');
        const precoMaxValue = document.getElementById('preco-max-value');
        const colorOptions = document.querySelectorAll('.color-option');
        const maisVendidosCheckbox = document.getElementById('mais-vendidos');
        const lancamentosCheckbox = document.getElementById('lançamentos');
        const limparFiltrosBtn = document.getElementById('limpar-filtros');

        // Modal elements
        const productModal = document.getElementById('product-modal');
        const modalClose = document.getElementById('modal-close');
        const btnCloseModal = document.getElementById('btn-close-modal');
        const btnContactWhatsapp = document.getElementById('btn-contact-whatsapp');
        const modalImage = document.getElementById('modal-image');
        const modalBrand = document.getElementById('modal-brand');
        const modalName = document.getElementById('modal-name');
        const modalCategory = document.getElementById('modal-category');
        const modalPrice = document.getElementById('modal-price');
        const modalDescription = document.getElementById('modal-description');
        const modalTipo = document.getElementById('modal-tipo');
        const modalCores = document.getElementById('modal-cores');
        const modalStatus = document.getElementById('modal-status');

        // Seller selection modal elements
        const sellerModal = document.getElementById('seller-modal');
        const sellerList = document.getElementById('seller-list');
        const btnSellerCancel = document.getElementById('btn-seller-cancel');
        const btnSellerConfirm = document.getElementById('btn-seller-confirm');

        // Contact form elements
        const nomeInput = document.getElementById('nome');
        const produtoSelect = document.getElementById('produto');
        const mensagemInput = document.getElementById('mensagem');
        const btnWhatsapp = document.getElementById('btn-whatsapp');
        const btnHeroWhatsapp = document.getElementById('btn-hero-whatsapp');

        // Cart elements
        const cartBadge = document.getElementById('cart-badge');
        const cartCount = document.getElementById('cart-count');
        const cartSection = document.getElementById('cart-section');
        const cartClose = document.getElementById('cart-close');
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        const btnCartWhatsapp = document.getElementById('btn-cart-whatsapp');

        // Mobile menu elements
        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuClose = document.getElementById('mobile-menu-close');

        // Current product for modal
        let currentProduct = null;
        let currentMessage = '';
        let selectedSeller = null;

        // Shopping cart
        let cart = [];

        // Format price
        function formatPrice(price) {
            return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        }

        // Get category name from key
        function getCategoriaNome(categoriaKey) {
            const categorias = {
                'base': 'Base',
                'batom': 'Batom',
                'sombra': 'Sombra',
                'rímel': 'Rímel',
                'pó': 'Pó',
                'blush': 'Blush',
                'corretivo': 'Corretivo',
                'delineador': 'Delineador',
                'skincare': 'Skincare',
                'haircare': 'Haircare',
                'corporal': 'Cuidados Corporais',
                'proteção-solar': 'Proteção Solar'
            };
            return categorias[categoriaKey] || categoriaKey;
        }

        // Get brand name from key
        function getMarcaNome(marcaKey) {
            const marcas = {
                'dior': 'Dior',
                'mac': 'MAC',
                'nars': 'NARS',
                'fenty': 'Fenty Beauty',
                'too-faced': 'Too Faced',
                'urban-decay': 'Urban Decay',
                'loreal': 'L\'Oréal',
                'nivea': 'Nivea',
                'aveeno': 'Aveeno',
                'elizabeth-arden': 'Elizabeth Arden',
                'cerave': 'CeraVe'
            };
            return marcas[marcaKey] || marcaKey;
        }

        // Get color hex from color name
        function getColorHex(colorName) {
            const colors = {
                'rosa': '#ff7bac',
                'vinho': '#c3447a',
                'vermelho': '#ff6b6b',
                'azul': '#4ecdc4',
                'dourado': '#ffe66d',
                'azul escuro': '#2980b9',
                'roxo': '#8e44ad',
                'verde': '#27ae60',
                'preto': '#000000',
                'branco': '#ffffff'
            };
            return colors[colorName] || '#ccc';
        }

        // Update cart count
        function updateCartCount() {
            cartCount.textContent = cart.length;
            cartBadge.style.display = cart.length > 0 ? 'flex' : 'none';
        }

        // Update cart display
        function updateCartDisplay() {
            cartItems.innerHTML = '';
            
            if (cart.length === 0) {
                cartItems.innerHTML = '<p style="text-align: center; color: #666; padding: 20px;">Seu carrinho está vazio</p>';
                cartTotal.textContent = 'R$ 0,00';
                return;
            }
            
            let total = 0;
            cart.forEach((produto, index) => {
                total += produto.preco;
                
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <div class="cart-item-image">
                        <img src="${produto.imagem}" alt="${produto.nome}">
                    </div>
                    <div class="cart-item-info">
                        <div class="cart-item-name">${produto.nome}</div>
                        <div class="cart-item-brand">${getMarcaNome(produto.marca)}</div>
                        <div class="cart-item-price">${formatPrice(produto.preco)}</div>
                    </div>
                    <button class="cart-item-remove" data-id="${produto.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                `;
                
                cartItems.appendChild(cartItem);
            });
            
            cartTotal.textContent = formatPrice(total);
            
            // Add event listeners to remove buttons
            document.querySelectorAll('.cart-item-remove').forEach(button => {
                button.addEventListener('click', function() {
                    const productId = parseInt(this.getAttribute('data-id'));
                    removeFromCart(productId);
                });
            });
        }

        // Populate product select in contact form
        function populateProductSelect() {
            produtoSelect.innerHTML = '<option value="">Selecione um produto</option>';
            produtos.forEach(produto => {
                const option = document.createElement('option');
                option.value = produto.id;
                option.textContent = `${produto.nome} - ${getMarcaNome(produto.marca)} (${formatPrice(produto.preco)})`;
                produtoSelect.appendChild(option);
            });
        }

        // Add product to cart
        function addToCart(productId) {
            const product = produtos.find(p => p.id === productId);
            if (product) {
                cart.push(product);
                updateCartCount();
                updateCartDisplay();
                
                // Show feedback
                const buttons = document.querySelectorAll(`.btn-add[data-id="${productId}"]`);
                buttons.forEach(button => {
                    button.innerHTML = '<i class="fas fa-check"></i> Adicionado!';
                    button.style.background = '#27ae60';
                    button.style.borderColor = '#27ae60';
                    
                    setTimeout(() => {
                        button.innerHTML = '<i class="fas fa-plus"></i> Adicionar';
                        button.style.background = '#25D366';
                        button.style.borderColor = '#25D366';
                    }, 1500);
                });
            }
        }

        // Remove product from cart
        function removeFromCart(productId) {
            const index = cart.findIndex(p => p.id === productId);
            if (index > -1) {
                cart.splice(index, 1);
                updateCartCount();
                updateCartDisplay();
                
                // Show feedback on product card
                const buttons = document.querySelectorAll(`.btn-remove[data-id="${productId}"]`);
                buttons.forEach(button => {
                    button.innerHTML = '<i class="fas fa-trash"></i> Removido!';
                    button.style.background = '#95a5a6';
                    button.style.borderColor = '#95a5a6';
                    
                    setTimeout(() => {
                        button.innerHTML = '<i class="fas fa-minus"></i> Remover';
                        button.style.background = '#e74c3c';
                        button.style.borderColor = '#e74c3c';
                    }, 1500);
                });
            }
        }

        // Generate WhatsApp message from cart
        function generateWhatsAppMessage() {
            if (cart.length === 0) {
                alert('Seu carrinho está vazio. Adicione produtos antes de enviar a mensagem.');
                return null;
            }
            
            const nome = nomeInput.value.trim() || 'Cliente';
            let mensagem = `Olá! Meu nome é ${nome}.\n\nGostaria de informações sobre os seguintes produtos:\n\n`;
            
            let total = 0;
            cart.forEach((produto, index) => {
                mensagem += `${index + 1}. ${produto.nome}\n`;
                mensagem += `   Marca: ${getMarcaNome(produto.marca)}\n`;
                mensagem += `   Preço: ${formatPrice(produto.preco)}\n\n`;
                total += produto.preco;
            });
            
            mensagem += `Total estimado: ${formatPrice(total)}\n\n`;
            mensagem += 'Aguardo retorno!';
            
            return mensagem;
        }

        // Open seller selection modal
        function openSellerModal(message) {
            currentMessage = message;
            sellerList.innerHTML = '';
            
            vendedores.forEach(vendedor => {
                const sellerItem = document.createElement('div');
                sellerItem.className = 'seller-item';
                sellerItem.setAttribute('data-id', vendedor.id);
                sellerItem.innerHTML = `
                    <div class="seller-avatar">
                        <img src="${vendedor.imagem}" alt="${vendedor.nome}">
                    </div>
                    <div class="seller-info">
                        <div class="seller-name">${vendedor.nome}</div>
                        <div class="seller-role">${vendedor.cargo}</div>
                        <div class="seller-contact">${vendedor.contato}</div>
                    </div>
                `;
                
                sellerList.appendChild(sellerItem);
            });
            
            // Add event listeners to seller items
            document.querySelectorAll('.seller-item').forEach(item => {
                item.addEventListener('click', function() {
                    document.querySelectorAll('.seller-item').forEach(i => i.classList.remove('selected'));
                    this.classList.add('selected');
                    selectedSeller = vendedores.find(v => v.id === parseInt(this.getAttribute('data-id')));
                });
            });
            
            // Select first seller by default
            if (document.querySelector('.seller-item')) {
                document.querySelector('.seller-item').click();
            }
            
            sellerModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // Close seller selection modal
        function closeSellerModal() {
            sellerModal.classList.remove('active');
            document.body.style.overflow = 'auto';
            selectedSeller = null;
        }

        // Send WhatsApp message
        function sendWhatsAppMessage(message, seller) {
            if (!message || !seller) return;
            
            const url = `https://wa.me/${seller.numero}?text=${encodeURIComponent(message)}`;
            
            window.open(url, '_blank');
        }

        // Render products
        function renderProdutos(produtosFiltrados) {
            produtosContainer.innerHTML = '';
            
            if (produtosFiltrados.length === 0) {
                noResults.style.display = 'block';
                return;
            }
            
            noResults.style.display = 'none';
            
            produtosFiltrados.forEach(produto => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                
                // Get first color for the product
                const firstColor = produto.cores[0];
                
                productCard.innerHTML = `
                    ${produto.destaque ? '<div class="product-badge">Mais Vendido</div>' : ''}
                    <div class="product-image">
                        <img src="${produto.imagem}" alt="${produto.nome}">
                    </div>
                    <div class="product-info">
                        <div class="product-category">${getCategoriaNome(produto.categoria)}</div>
                        <div class="product-brand">${getMarcaNome(produto.marca)}</div>
                        <h3 class="product-name">${produto.nome}</h3>
                        <div class="product-colors">
                            ${produto.cores.map(cor => `<div class="color-dot" style="background-color: ${getColorHex(cor)};" title="${cor}"></div>`).join('')}
                        </div>
                        <div class="product-price">${formatPrice(produto.preco)}</div>
                        <div class="product-actions">
                            <a href="#" class="btn-details" data-id="${produto.id}">Ver Detalhes</a>
                            <a href="#" class="btn-add" data-id="${produto.id}">
                                <i class="fas fa-plus"></i> Adicionar
                            </a>
                        </div>
                    </div>
                `;
                
                produtosContainer.appendChild(productCard);
            });
            
            // Add event listeners to details buttons
            document.querySelectorAll('.btn-details').forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    const productId = parseInt(this.getAttribute('data-id'));
                    const product = produtos.find(p => p.id === productId);
                    openProductModal(product);
                });
            });
            
            // Add event listeners to add buttons
            document.querySelectorAll('.btn-add').forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    const productId = parseInt(this.getAttribute('data-id'));
                    addToCart(productId);
                });
            });
        }

        // Open product modal
        function openProductModal(product) {
            currentProduct = product;
            modalImage.src = product.imagem;
            modalImage.alt = product.nome;
            modalBrand.textContent = getMarcaNome(product.marca);
            modalName.textContent = product.nome;
            modalCategory.textContent = getCategoriaNome(product.categoria);
            modalPrice.textContent = formatPrice(product.preco);
            modalDescription.textContent = product.descricao;
            modalTipo.textContent = product.tipo === 'maquiagem' ? 'Produto de Maquiagem' : 'Produto de Cuidados Pessoais';
            modalCores.textContent = product.cores.join(', ');
            modalStatus.textContent = product.destaque ? 'Mais Vendido' : 'Disponível';
            
            productModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // Close product modal
        function closeProductModal() {
            productModal.classList.remove('active');
            document.body.style.overflow = 'auto';
            currentProduct = null;
        }

        // Send WhatsApp message from modal
        function sendWhatsAppFromModal() {
            if (!currentProduct) return;
            
            const nome = nomeInput.value || 'Cliente';
            const mensagem = `Olá! Estou interessado(a) no produto:\n\n${currentProduct.nome}\nMarca: ${getMarcaNome(currentProduct.marca)}\nPreço: ${formatPrice(currentProduct.preco)}\n\nPoderiam me passar mais informações?`;
            openSellerModal(mensagem);
        }

        // Send WhatsApp message from contact form
        function sendWhatsAppFromForm() {
            const nome = nomeInput.value.trim();
            const produtoId = produtoSelect.value;
            const mensagem = mensagemInput.value.trim();
            
            if (!nome) {
                alert('Por favor, informe seu nome.');
                return;
            }
            
            let produto = null;
            if (produtoId) {
                produto = produtos.find(p => p.id === parseInt(produtoId));
            }
            
            let mensagemTexto = `Olá! Meu nome é ${nome}.\n\n`;
            
            if (produto) {
                mensagemTexto += `Estou interessado(a) no produto:\n${produto.nome}\nMarca: ${getMarcaNome(produto.marca)}\nPreço: ${formatPrice(produto.preco)}\n\n`;
            }
            
            if (mensagem) {
                mensagemTexto += `Mensagem: ${mensagem}\n\n`;
            }
            
            mensagemTexto += 'Aguardo retorno!';
            openSellerModal(mensagemTexto);
        }

        // Mobile menu toggle
        function toggleMobileMenu() {
            mobileMenu.classList.toggle('active');
        }

        // Close mobile menu
        function closeMobileMenu() {
            mobileMenu.classList.remove('active');
        }

        // Add event listeners for modal
        modalClose.addEventListener('click', closeProductModal);
        btnCloseModal.addEventListener('click', closeProductModal);
        btnContactWhatsapp.addEventListener('click', sendWhatsAppFromModal);

        // Close modal when clicking outside
        productModal.addEventListener('click', function(e) {
            if (e.target === productModal) {
                closeProductModal();
            }
        });

        // Update price values
        function updatePriceValues() {
            precoMinValue.textContent = precoMinInput.value;
            precoMaxValue.textContent = precoMaxInput.value;
        }

        // Filter products - this function is called whenever any filter changes
        function filtrarProdutos() {
            const categoria = document.getElementById('categoria').value;
            const marca = document.getElementById('marca').value;
            const precoMin = parseFloat(precoMinInput.value);
            const precoMax = parseFloat(precoMaxInput.value);
            const apenasMaisVendidos = maisVendidosCheckbox.checked;
            const apenasLancamentos = lancamentosCheckbox.checked;
            
            // Get selected colors
            const selectedColors = Array.from(colorOptions)
                .filter(option => option.classList.contains('selected'))
                .map(option => option.getAttribute('data-color'));
            
            let produtosFiltrados = produtos.filter(produto => {
                // Filter by category
                if (categoria && produto.categoria !== categoria) {
                    return false;
                }
                
                // Filter by brand
                if (marca && produto.marca !== marca) {
                    return false;
                }
                
                // Filter by price
                if (produto.preco < precoMin || produto.preco > precoMax) {
                    return false;
                }
                
                // Filter by color
                if (selectedColors.length > 0) {
                    // Check if any of the product's colors match selected colors
                    const hasMatchingColor = produto.cores.some(cor => 
                        selectedColors.includes(cor)
                    );
                    if (!hasMatchingColor) {
                        return false;
                    }
                }
                
                // Filter by best sellers
                if (apenasMaisVendidos && !produto.destaque) {
                    return false;
                }
                
                return true;
            });
            
            renderProdutos(produtosFiltrados);
        }

        // Add event listeners to automatically filter when any filter changes
        document.getElementById('categoria').addEventListener('change', filtrarProdutos);
        document.getElementById('marca').addEventListener('change', filtrarProdutos);
        maisVendidosCheckbox.addEventListener('change', filtrarProdutos);
        lancamentosCheckbox.addEventListener('change', filtrarProdutos);

        precoMinInput.addEventListener('input', function() {
            // Ensure min is not greater than max
            if (parseInt(this.value) > parseInt(precoMaxInput.value)) {
                this.value = precoMaxInput.value;
            }
            updatePriceValues();
            filtrarProdutos();
        });

        precoMaxInput.addEventListener('input', function() {
            // Ensure max is not less than min
            if (parseInt(this.value) < parseInt(precoMinInput.value)) {
                this.value = precoMinInput.value;
            }
            updatePriceValues();
            filtrarProdutos();
        });

        // Color selection
        colorOptions.forEach(option => {
            option.addEventListener('click', function() {
                this.classList.toggle('selected');
                filtrarProdutos();
            });
        });

        // Reset filters button
        limparFiltrosBtn.addEventListener('click', function() {
            // Reset all filters
            document.getElementById('categoria').value = '';
            document.getElementById('marca').value = '';
            document.getElementById('preco-min').value = 10;
            document.getElementById('preco-max').value = 500;
            updatePriceValues();
            
            // Reset color selections
            colorOptions.forEach(option => {
                option.classList.remove('selected');
            });
            
            // Reset checkboxes
            maisVendidosCheckbox.checked = false;
            lancamentosCheckbox.checked = false;
            
            // Re-render all products
            filtrarProdutos();
        });

        // Contact form button
        btnWhatsapp.addEventListener('click', sendWhatsAppFromForm);
        btnHeroWhatsapp.addEventListener('click', function(e) {
            e.preventDefault();
            const nome = nomeInput.value.trim() || 'Cliente';
            const mensagem = `Olá! Meu nome é ${nome}.\n\nGostaria de informações sobre seus produtos.\n\nAguardo retorno!`;
            openSellerModal(mensagem);
        });

        // Cart badge click - open cart
        cartBadge.addEventListener('click', function() {
            cartSection.classList.add('active');
            cartBadge.style.display = 'none';
        });

        // Cart close button
        cartClose.addEventListener('click', function() {
            cartSection.classList.remove('active');
            cartBadge.style.display = cart.length > 0 ? 'flex' : 'none';
        });

        // Send WhatsApp message from cart
        btnCartWhatsapp.addEventListener('click', function() {
            const message = generateWhatsAppMessage();
            if (message) {
                openSellerModal(message);
            }
        });

        // Seller modal event listeners
        btnSellerCancel.addEventListener('click', closeSellerModal);
        
        btnSellerConfirm.addEventListener('click', function() {
            if (selectedSeller && currentMessage) {
                sendWhatsAppMessage(currentMessage, selectedSeller);
                closeSellerModal();
            }
        });

        // Close seller modal when clicking outside
        sellerModal.addEventListener('click', function(e) {
            if (e.target === sellerModal) {
                closeSellerModal();
            }
        });

        // Mobile menu event listeners
        menuToggle.addEventListener('click', toggleMobileMenu);
        mobileMenuClose.addEventListener('click', closeMobileMenu);

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.mobile-nav a').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                closeMobileMenu();
            }
        });

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            // Set initial price values
            updatePriceValues();
            
            // Render all products initially
            filtrarProdutos();
            
            // Populate product select in contact form
            populateProductSelect();
            
            // Initialize cart
            updateCartCount();
            updateCartDisplay();
            
            // Hide cart badge initially
            cartBadge.style.display = 'none';
        });