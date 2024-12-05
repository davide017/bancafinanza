const express = require('express');
const articlesRoutes = require('./cms-backend/routes/articles');
const categoriesRoutes = require('./cms-backend/routes/categories');
const tagsRoutes = require('./cms-backend/routes/tags');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/articles', articlesRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/tags', tagsRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});